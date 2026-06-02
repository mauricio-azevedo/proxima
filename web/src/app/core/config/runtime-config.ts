interface ProximaRuntimeConfig {
  apiBaseUrl: string;
}

declare global {
  interface Window {
    __PROXIMA_CONFIG__?: ProximaRuntimeConfig;
  }
}

const LOCAL_API_BASE_URL = 'http://localhost:3000';

export function getRuntimeConfig(): ProximaRuntimeConfig {
  return {
    apiBaseUrl: normalizeApiBaseUrl(window.__PROXIMA_CONFIG__?.apiBaseUrl ?? LOCAL_API_BASE_URL),
  };
}

function normalizeApiBaseUrl(apiBaseUrl: string): string {
  return apiBaseUrl.replace(/\/$/, '');
}
