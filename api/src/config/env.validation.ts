interface EnvironmentVariables {
  DATABASE_URL: string;
  JWT_SECRET: string;
  PORT: number;
}

type RawEnvironment = Record<string, string | undefined>;

const DEFAULT_PORT = 3000;
const MIN_JWT_SECRET_LENGTH = 32;

export function validateEnvironment(config: RawEnvironment): EnvironmentVariables {
  const databaseUrl = readRequiredString(config, 'DATABASE_URL');
  const jwtSecret = readRequiredString(config, 'JWT_SECRET');
  const port = readPort(config.PORT);

  if (jwtSecret.length < MIN_JWT_SECRET_LENGTH) {
    throw new Error(`JWT_SECRET must have at least ${MIN_JWT_SECRET_LENGTH} characters.`);
  }

  return {
    DATABASE_URL: databaseUrl,
    JWT_SECRET: jwtSecret,
    PORT: port,
  };
}

function readRequiredString(config: RawEnvironment, key: string): string {
  const value = config[key]?.trim();

  if (!value) {
    throw new Error(`${key} is required.`);
  }

  return value;
}

function readPort(value: string | undefined): number {
  if (!value) {
    return DEFAULT_PORT;
  }

  const port = Number(value);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error('PORT must be a valid TCP port.');
  }

  return port;
}
