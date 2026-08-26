//! Gono C2PA Bridge — CLI entry point.
//!
//! Subcommands:
//!   sign    — Sign a media file with C2PA provenance metadata
//!   verify  — Verify a signed file's C2PA manifest
//!   upload  — Upload a file to IPFS
//!   commit  — Full pipeline: sign → hash → upload → print commit payload

mod commit;
mod ipfs;
mod sign;
mod verify;

use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(
    name = "gono-c2pa",
    about = "Gono Protocol C2PA Bridge — sign, verify, upload, and commit media provenance",
    version
)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Sign a media file with C2PA provenance metadata
    Sign {
        /// Path to the input media file
        file: String,
        /// Path to the PEM-encoded signing certificate
        #[arg(long)]
        cert: String,
        /// Path to the PEM-encoded private key
        #[arg(long)]
        key: String,
        /// Output path for the signed file (default: <file>.signed.<ext>)
        #[arg(long, short)]
        output: Option<String>,
    },
    /// Verify a signed file's C2PA manifest
    Verify {
        /// Path to the signed media file
        file: String,
    },
    /// Upload a file to IPFS
    Upload {
        /// Path to the file to upload
        file: String,
        /// IPFS API URL (default: http://127.0.0.1:5001)
        #[arg(long, default_value = "http://127.0.0.1:5001")]
        ipfs_url: String,
    },
    /// Full pipeline: sign → hash → upload to IPFS → print commit payload
    Commit {
        /// Path to the input media file
        file: String,
        /// Path to the PEM-encoded signing certificate
        #[arg(long)]
        cert: String,
        /// Path to the PEM-encoded private key
        #[arg(long)]
        key: String,
        /// IPFS API URL (default: http://127.0.0.1:5001)
        #[arg(long, default_value = "http://127.0.0.1:5001")]
        ipfs_url: String,
    },
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Sign {
            file,
            cert,
            key,
            output,
        } => {
            let result = sign::sign_file(&file, &cert, &key, output.as_deref())?;
            println!("{}", serde_json::to_string_pretty(&result)?);
        }
        Commands::Verify { file } => {
            let result = verify::verify_file(&file)?;
            println!("{}", serde_json::to_string_pretty(&result)?);
        }
        Commands::Upload { file, ipfs_url } => {
            let cid = ipfs::upload_to_ipfs(&file, &ipfs_url).await?;
            println!("{{\"cid\": \"{cid}\"}}");
        }
        Commands::Commit {
            file,
            cert,
            key,
            ipfs_url,
        } => {
            let payload = commit::commit_pipeline(&file, &cert, &key, &ipfs_url).await?;
            println!("{}", serde_json::to_string_pretty(&payload)?);
        }
    }

    Ok(())
}
