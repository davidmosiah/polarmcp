# Security Policy

Report security issues through GitHub issues if they do not contain secrets. Do not paste OAuth tokens, client secrets, raw health payloads or private activity metadata.

## Sensitive Data

- Polar client secret
- OAuth access and refresh tokens
- Raw Polar AccessLink API payloads
- Sleep, Nightly Recharge, training, route, sample and activity records
- Private profile or device metadata

## Defaults

- Tokens stay local under `~/.polar-mcp/tokens.json`.
- Local config is written with `0600` permissions where supported.
- The server is read-only by default.
- Raw payloads are only returned when explicitly requested.
