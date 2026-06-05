import { apiBaseUrl } from '../constants/api-base-url';
import { ApiRequestError } from '../errors/api-request-error';
import { readErrorMessage } from '../helpers/read-error-message';

interface ApiRequestOptions extends RequestInit {
  accessToken?: string | null;
}

export async function apiRequest<TResponse>(path: string, options: ApiRequestOptions = {}) {
  const { accessToken, headers, ...requestInit } = options;
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...requestInit,
    headers: {
      ...(requestInit.body ? { 'Content-Type': 'application/json' } : {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...headers,
    },
  });

  if (!response.ok) {
    const errorBody = await readJsonResponse(response);
    throw new ApiRequestError(readErrorMessage(errorBody, 'Request failed.'), response.status);
  }

  return readJsonResponse(response) as Promise<TResponse>;
}

async function readJsonResponse(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}
