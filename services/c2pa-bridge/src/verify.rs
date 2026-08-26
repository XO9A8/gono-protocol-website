//! C2PA verification logic using `c2pa::Reader`.

use anyhow::{Context, Result};
use serde::Serialize;

/// Result of a C2PA verification operation.
#[derive(Debug, Serialize)]
pub struct VerifyResult {
    /// Whether the manifest validation succeeded
    pub is_valid: bool,
    /// Active manifest label (URN)
    pub manifest_label: Option<String>,
    /// Validation status messages
    pub validation_status: Vec<ValidationEntry>,
    /// Signer information
    pub signer_info: Option<SignerInfo>,
    /// List of assertions found in the manifest
    pub assertions: Vec<AssertionInfo>,
    /// Full manifest JSON (for detailed inspection)
    pub manifest_json: String,
}

#[derive(Debug, Serialize)]
pub struct ValidationEntry {
    pub code: String,
    pub explanation: String,
    pub success: bool,
}

#[derive(Debug, Serialize)]
pub struct SignerInfo {
    pub issuer: Option<String>,
    pub alg: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct AssertionInfo {
    pub label: String,
    pub data: serde_json::Value,
}

/// Verify a signed file's C2PA manifest.
///
/// Reads the embedded manifest, checks validation status, and extracts
/// signer info and assertions.
pub fn verify_file(file_path: &str) -> Result<VerifyResult> {
    let reader = c2pa::Reader::from_context(c2pa::Context::default())
        .with_file(file_path)
        .context("Failed to read C2PA manifest from file")?;

    let manifest_json = reader.json();

    // Parse the JSON to extract structured info
    let parsed: serde_json::Value =
        serde_json::from_str(&manifest_json).context("Failed to parse manifest JSON")?;

    let manifest_label = parsed
        .get("active_manifest")
        .and_then(|v| v.as_str())
        .map(|s| s.to_string());

    // Extract validation status
    let mut validation_entries = Vec::new();
    let mut is_valid = true;

    if let Some(results) = parsed.get("validation_results") {
        if let Some(active) = results.get("activeManifest") {
            // Collect successes
            if let Some(successes) = active.get("success").and_then(|v| v.as_array()) {
                for entry in successes {
                    validation_entries.push(ValidationEntry {
                        code: entry
                            .get("code")
                            .and_then(|v| v.as_str())
                            .unwrap_or("")
                            .to_string(),
                        explanation: entry
                            .get("explanation")
                            .and_then(|v| v.as_str())
                            .unwrap_or("")
                            .to_string(),
                        success: true,
                    });
                }
            }
            // Collect failures
            if let Some(failures) = active.get("failure").and_then(|v| v.as_array()) {
                for entry in failures {
                    let code = entry
                        .get("code")
                        .and_then(|v| v.as_str())
                        .unwrap_or("")
                        .to_string();
                    // signingCredential.untrusted is expected for dev certs
                    if code != "signingCredential.untrusted" {
                        is_valid = false;
                    }
                    validation_entries.push(ValidationEntry {
                        code,
                        explanation: entry
                            .get("explanation")
                            .and_then(|v| v.as_str())
                            .unwrap_or("")
                            .to_string(),
                        success: false,
                    });
                }
            }
        }
    }

    // Extract signer info from the active manifest
    let signer_info = manifest_label.as_ref().and_then(|label| {
        parsed
            .get("manifests")
            .and_then(|m| m.get(label))
            .and_then(|manifest| manifest.get("signature_info"))
            .map(|sig| SignerInfo {
                issuer: sig.get("issuer").and_then(|v| v.as_str()).map(String::from),
                alg: sig.get("alg").and_then(|v| v.as_str()).map(String::from),
            })
    });

    // Extract assertions
    let mut assertions = Vec::new();
    if let Some(label) = &manifest_label {
        if let Some(manifest) = parsed.get("manifests").and_then(|m| m.get(label)) {
            if let Some(asserts) = manifest.get("assertions").and_then(|a| a.as_array()) {
                for assertion in asserts {
                    assertions.push(AssertionInfo {
                        label: assertion
                            .get("label")
                            .and_then(|v| v.as_str())
                            .unwrap_or("")
                            .to_string(),
                        data: assertion
                            .get("data")
                            .cloned()
                            .unwrap_or(serde_json::Value::Null),
                    });
                }
            }
        }
    }

    Ok(VerifyResult {
        is_valid,
        manifest_label,
        validation_status: validation_entries,
        signer_info,
        assertions,
        manifest_json,
    })
}
