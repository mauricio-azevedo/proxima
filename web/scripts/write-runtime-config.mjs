import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_API_BASE_URL = 'http://localhost:3000';
const CONFIG_ENV_NAME = 'NG_APP_API_BASE_URL';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const webRoot = resolve(scriptDirectory, '..');
const outputPath = resolve(webRoot, 'public', 'env.js');

const apiBaseUrl = normalizeUrl(process.env[CONFIG_ENV_NAME] ?? DEFAULT_API_BASE_URL);

mkdirSync(dirname(outputPath), { recursive: true });

writeFileSync(
  outputPath,
  `window.__PROXIMA_CONFIG__ = Object.freeze({ apiBaseUrl: ${JSON.stringify(apiBaseUrl)} });\n`,
);

function normalizeUrl(value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    throw new Error(`${CONFIG_ENV_NAME} cannot be empty.`);
  }

  const parsedUrl = new URL(trimmedValue);

  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    throw new Error(`${CONFIG_ENV_NAME} must use http or https.`);
  }

  return parsedUrl.toString().replace(/\/$/, '');
}
