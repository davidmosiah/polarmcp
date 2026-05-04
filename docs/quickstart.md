# Polar MCP Quickstart

1. Create a Polar AccessLink client at https://admin.polaraccesslink.com
2. Set callback URL: `http://127.0.0.1:3000/callback`
3. Use scopes: `activity:read calendar:read continuous_samples:read devices:read nightly_recharge:read ppi_data:read profile:read routes:read skin_contact:read sleep:read sports:read temperature_measurement:read tests:read training_sessions:read training_targets:read user_subscription:read`
4. Run:

```bash
npx -y polar-mcp-unofficial setup
npx -y polar-mcp-unofficial auth
npx -y polar-mcp-unofficial doctor
```

Add to your MCP client:

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
