//! Full commit pipeline: sign → hash → upload to IPFS → produce commit payload.
//!
//! The output maps directly to `pallet-gono-store::commit_receipt` extrinsic parameters.

use anyhow::{Context, Result};
use serde::Serialize;

use crate::ipfs;
use crate::sign;

/// Payload for the `commit_receipt` extrinsic on pallet-gono-store.
#[derive(Debug, Serialize)]
pub struct CommitPayload {
    /// IPFS CID of the signed file
    pub cid: String,
    /// SHA-256 hash of the original (unsigned) file
    pub content_hash: String,
    /// IPFS URI for the C2PA manifest (ipfs://<cid>)
    pub c2pa_manifest_uri: String,
    /// SHA-256 fingerprint of the signing certificate
    pub c2pa_signer_fingerprint: String,
    /// C2PA manifest label (URN)
    pub c2pa_manifest_label: String,
    /// Parent CID for provenance DAG linking (null for originals)
    pub parent_cid: Option<String>,
}

/// Execute the full commit pipeline.
///
/// 1. Sign the file with C2PA metadata
/// 2. Upload the signed file to IPFS
/// 3. Return a structured payload for on-chain commitment
pub async fn commit_pipeline(
    file_path: &str,
    cert_path: &str,
    key_path: &str,
    ipfs_url: &str,
) -> Result<CommitPayload> {
    // Step 1: Sign the file
    eprintln!("[1/3] Signing file with C2PA metadata...");
    let sign_result = sign::sign_file(file_path, cert_path, key_path, None)
        .context("Signing step failed")?;

    // Step 2: Upload the signed file to IPFS
    eprintln!("[2/3] Uploading signed file to IPFS...");
    let cid = ipfs::upload_to_ipfs(&sign_result.output_path, ipfs_url)
        .await
        .context("IPFS upload step failed")?;

    // Step 3: Produce commit payload
    eprintln!("[3/3] Generating commit payload...");
    let manifest_uri = format!("ipfs://{cid}");

    Ok(CommitPayload {
        cid,
        content_hash: sign_result.content_hash,
        c2pa_manifest_uri: manifest_uri,
        c2pa_signer_fingerprint: sign_result.signer_fingerprint,
        c2pa_manifest_label: sign_result.manifest_label,
        parent_cid: None,
    })
}
