# AI Coding Rules

## Project

Modular blockchain infrastructure for verifiable media + autonomous commerce.

## Core

* Inspect relevant code before editing.
* Reuse existing architecture/patterns.
* Make smallest correct change.
* Don't modify unrelated files.
* Never invent APIs, files, configs, or behavior.
* Preserve backward compatibility unless explicitly requested.
* Ask before destructive/architectural changes.

## Context

* Search targeted files/symbols first.
* Don't read whole repo unless necessary.
* Follow imports/callers only as needed.
* Prefer existing tests/docs over assumptions.

## Security

* Treat auth, signatures, payments, storage, and permissions as security-critical.
* Solidity: check reentrancy, access control, replay, signatures, accounting, external calls.
* Never expose secrets/private keys.
* Validate untrusted input.
* Don't weaken security checks for convenience.

## Blockchain

* Preserve deterministic/state-transition behavior.
* Check authorization before state changes.
* Check failure/rollback paths.
* Avoid unsafe external calls.
* Consider replay, nonce, ordering, and precision issues.

## Changes

* Explain plan briefly before large changes.
* Implement minimal patch.
* Don't refactor unless needed.
* Keep public interfaces stable.

## Validation

* Run targeted tests first.
* Then relevant lint/type checks.
* For Solidity: run Foundry tests/fuzz/invariants when relevant.
* For Rust: run cargo check/test/clippy as relevant.
* For Python: run targeted tests + lint/type checks.
* Report failures; don't hide them.

## Output

* Be concise.
* Use bullets/fragments when possible.
* Show only relevant code.
* Don't repeat the user's request.
* State: changed, tested, remaining issue.
