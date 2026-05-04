import { homedir } from "node:os";
import { join } from "node:path";
import { DEFAULT_SCOPES, POLAR_DEVELOPER_PORTAL_URL } from "../constants.js";
import type { PrivacyMode, PolarConfig } from "../types.js";
import { loadConfigSources } from "./local-config.js";

function env(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

export function getConfig(): PolarConfig {
  const sources = loadConfigSources(process.env, homedir());
  const value = (name: keyof typeof sources.values) => env(name) ?? sources.values[name];
  const clientId = value("POLAR_CLIENT_ID");
  const clientSecret = value("POLAR_CLIENT_SECRET");
  const redirectUri = value("POLAR_REDIRECT_URI");
  const tokenPath = value("POLAR_TOKEN_PATH") ?? join(homedir(), ".polar-mcp", "tokens.json");
  const cachePath = value("POLAR_CACHE_PATH") ?? join(homedir(), ".polar-mcp", "cache.sqlite");
  const scopes = (value("POLAR_SCOPES")?.split(/[ ,]+/).filter(Boolean)) ?? DEFAULT_SCOPES;
  const privacyMode = parsePrivacyMode(value("POLAR_PRIVACY_MODE"));
  const cacheEnabled = parseBool(value("POLAR_CACHE"), false);

  const missing = [
    ["POLAR_CLIENT_ID", clientId],
    ["POLAR_CLIENT_SECRET", clientSecret],
    ["POLAR_REDIRECT_URI", redirectUri]
  ].filter(([, value]) => !value).map(([name]) => name);

  if (missing.length > 0) {
    throw new Error(
      `Missing required POLAR environment variables: ${missing.join(", ")}. ` +
      `Create an app at ${POLAR_DEVELOPER_PORTAL_URL} and set these variables before using Polar tools.`
    );
  }

  return {
    clientId: clientId!,
    clientSecret: clientSecret!,
    redirectUri: redirectUri!,
    scopes,
    tokenPath,
    privacyMode,
    cacheEnabled,
    cachePath
  };
}

function parsePrivacyMode(value: string | undefined): PrivacyMode {
  if (value === "summary" || value === "structured" || value === "raw") return value;
  return "structured";
}

function parseBool(value: string | undefined, fallback: boolean): boolean {
  if (!value) return fallback;
  return ["1", "true", "yes", "on", "sqlite"].includes(value.toLowerCase());
}
