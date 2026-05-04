# Hermes Example

```bash
npx -y polar-mcp-unofficial setup --client hermes --no-auth
npx -y polar-mcp-unofficial auth
npx -y polar-mcp-unofficial doctor --client hermes
```

Useful direct tools:

- `mcp_polar_polar_connection_status`
- `mcp_polar_polar_daily_summary`
- `mcp_polar_polar_weekly_summary`
- `mcp_polar_polar_list_sleeps`
- `mcp_polar_polar_list_activity`
- `mcp_polar_polar_list_training_sessions`

Keep `POLAR_CLIENT_SECRET` and OAuth tokens out of prompts, logs and public repos.
