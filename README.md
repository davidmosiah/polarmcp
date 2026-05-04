# Polar MCP Unofficial

[![MCP Compatible](https://img.shields.io/badge/MCP-compatible-7C3AED?style=flat-square&logo=anthropic&logoColor=white)](https://modelcontextprotocol.io) [![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Provider: Polar](https://img.shields.io/badge/data-Polar-00B0B9?style=flat-square&logo=polar&logoColor=white)](https://polar.com) [![npm version](https://img.shields.io/npm/v/polar-mcp-unofficial?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/polar-mcp-unofficial)

Unofficial, local-first Model Context Protocol server for connecting AI agents to user-authorized Polar data through the official Polar AccessLink Dynamic API v4.

It is designed for Claude, Cursor, Windsurf, Hermes, OpenClaw and other MCP clients that need safe access to Polar activity, sleep, Nightly Recharge, training sessions, routes, samples, devices and test context.

> Not affiliated with, endorsed by, or sponsored by Polar. Not medical advice.

## What It Supports

- OAuth 2.0 authorization code flow with local token storage.
- Polar AccessLink Dynamic API v4 read endpoints.
- Activity, calendar, sleep, sleep/wake vectors and Nightly Recharge.
- Training sessions, training targets, routes, sports and sport profiles.
- Continuous samples, PPI samples, temperature measurements, skin contact and test results.
- Account and device metadata with profile and GPS minimization by default.
- Daily and weekly agent-ready summaries.
- Privacy modes: `summary`, `structured`, `raw`.
- Hermes-focused agent manifest and setup diagnostics.

## Quick Start

Create a Polar AccessLink client at [admin.polaraccesslink.com](https://admin.polaraccesslink.com) and set the callback URL to:

```text
http://127.0.0.1:3000/callback
```

Recommended read scopes:

```text
activity:read calendar:read continuous_samples:read devices:read nightly_recharge:read ppi_data:read profile:read routes:read skin_contact:read sleep:read sports:read temperature_measurement:read tests:read training_sessions:read training_targets:read user_subscription:read
```

Then run:

```bash
npx -y polar-mcp-unofficial setup
npx -y polar-mcp-unofficial auth
npx -y polar-mcp-unofficial doctor
```

Start the MCP server:

```bash
npx -y polar-mcp-unofficial
```

## Claude / Cursor / Generic MCP Config

```json
{
  "mcpServers": {
    "polar": {
      "command": "npx",
      "args": ["-y", "polar-mcp-unofficial"]
    }
  }
}
```

## Hermes

```bash
npx -y polar-mcp-unofficial setup --client hermes --no-auth
npx -y polar-mcp-unofficial doctor --client hermes
```

After config changes, reload MCP with `/reload-mcp` or `hermes mcp test polar`. A normal Polar data-access issue should not require restarting the Hermes gateway.

## Tools

Core setup and safety:

- `polar_agent_manifest`
- `polar_capabilities`
- `polar_connection_status`
- `polar_get_auth_url`
- `polar_exchange_code`
- `polar_privacy_audit`
- `polar_cache_status`
- `polar_revoke_access`

Data tools:

- `polar_get_account_data`
- `polar_list_user_devices`
- `polar_list_activity`
- `polar_list_calendar`
- `polar_list_continuous_samples`
- `polar_list_nightly_recharge`
- `polar_list_ppi_samples`
- `polar_get_route`
- `polar_list_skin_contacts`
- `polar_list_sleeps`
- `polar_list_sleep_wake_vectors`
- `polar_list_sports`
- `polar_list_sport_profile_catalog`
- `polar_list_sport_profiles`
- `polar_list_subscriptions`
- `polar_list_temperature_measurements`
- `polar_list_tests`
- `polar_list_training_sessions`
- `polar_list_training_targets`
- `polar_list_training_target_favorites`

Workflow tools:

- `polar_daily_summary`
- `polar_weekly_summary`

## Privacy Model

Tokens are stored locally under `~/.polar-mcp/` with user-only permissions. The server never prints access tokens or refresh tokens.

Privacy modes:

- `summary`: minimal fields for safe agent use.
- `structured`: normalized Polar data for analysis; GPS and direct profile identifiers are minimized.
- `raw`: upstream Polar JSON, only when explicitly requested.

Health and route data are sensitive. Do not paste raw payloads publicly. This MCP is for personal context and training/wellness reflection, not diagnosis or treatment.

## Development

```bash
npm install
npm test
```

## Links

- Website: https://polarmcp.vercel.app/
- GitHub: https://github.com/davidmosiah/polarmcp
- npm: https://www.npmjs.com/package/polar-mcp-unofficial
- Delx Wellness registry: https://github.com/davidmosiah/delx-wellness
- Connector quality standard: https://github.com/davidmosiah/delx-wellness/blob/main/docs/connector-quality-standard.md
- Polar AccessLink Dynamic API v4 docs: https://www.polar.com/polar-api-v4/
