//! IPFS upload via reqwest HTTP client.
//!
//! Uses the IPFS `/api/v0/add` endpoint with multipart form upload.

use anyhow::{Context, Result};
use serde::Deserialize;

#[derive(Deserialize)]
struct IpfsAddResponse {
    #[serde(rename = "Hash")]
    hash: String,
}

/// Upload a file to a local IPFS node and return the resulting CID.
///
/// # Arguments
/// * `file_path` - Path to the file to upload
/// * `ipfs_url` - Base URL of the IPFS API (e.g., "http://127.0.0.1:5001")
pub async fn upload_to_ipfs(file_path: &str, ipfs_url: &str) -> Result<String> {
    let file_bytes = std::fs::read(file_path).context("Failed to read file for IPFS upload")?;

    let file_name = std::path::Path::new(file_path)
        .file_name()
        .unwrap_or_default()
        .to_string_lossy()
        .to_string();

    let part = reqwest::multipart::Part::bytes(file_bytes)
        .file_name(file_name)
        .mime_str("application/octet-stream")?;

    let form = reqwest::multipart::Form::new().part("file", part);

    let url = format!("{ipfs_url}/api/v0/add");

    let client = reqwest::Client::new();
    let response = client
        .post(&url)
        .multipart(form)
        .send()
        .await
        .context("Failed to connect to IPFS node — is it running?")?;

    if !response.status().is_success() {
        let status = response.status();
        let body = response.text().await.unwrap_or_default();
        anyhow::bail!("IPFS upload failed (HTTP {status}): {body}");
    }

    let result: IpfsAddResponse = response
        .json()
        .await
        .context("Failed to parse IPFS response")?;

    Ok(result.hash)
}
