# Polar MCP Skill

Use this skill whenever a user asks Hermes to inspect Polar activity, sleep, Nightly Recharge, training sessions, samples, routes, daily summaries or weekly summaries.

Rules:

- Start with `mcp_polar_polar_connection_status`.
- Prefer `mcp_polar_polar_daily_summary` and `mcp_polar_polar_weekly_summary` before low-level endpoint calls.
- Treat Polar data as sensitive. Do not request raw payloads unless the user explicitly asks.
- Do not diagnose or treat medical conditions.
- Reload MCP with `/reload-mcp` or `hermes mcp test polar`; do not restart the gateway for normal data access.
