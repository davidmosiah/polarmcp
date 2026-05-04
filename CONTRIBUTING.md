# Contributing

Thanks for improving Polar MCP Unofficial.

Before opening a PR:

```bash
npm install
npm test
```

Guidelines:

- Use only official Polar API endpoints.
- Keep default behavior read-only.
- Treat health, sleep, heart-rate and activity data as sensitive.
- Do not add write/upload tools without explicit safety gates.
- Do not log or return OAuth tokens.
- Update docs and tests with behavior changes.
