# Privacy

Polar health and route data are sensitive. This MCP stores OAuth tokens locally under `~/.polar-mcp/` and never prints token values.

## Modes

- `summary`: minimal fields for safe agent use.
- `structured`: normalized Polar AccessLink Dynamic API v4 data with profile and GPS minimization.
- `raw`: upstream Polar JSON, only when explicitly requested.

## Boundary

The MCP uses official Polar AccessLink Dynamic API v4 read endpoints. It does not call private Polar Flow mobile endpoints, write data, or provide medical diagnosis.
