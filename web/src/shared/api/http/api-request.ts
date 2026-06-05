import { apiBaseUrl } from '../constants/api-base-url';
import { ApiRequestError } from '../errors/api-request-error';
import { readErrorMessage } from '../helpers/read-error-message';

interface ApiRequestOptions extends RequestInit {
  accessToken?: string | null;
}

export async function apiRequest<TResponse>(path: string, options: ApiRequestOptions = {}) {
  const { accessToken, headers, ...requestInit } = options;
  const requestHeaders = new Headers(headers);

  if (requestInit.body && !requestHeaders.has('Content-Type')) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  if (accessToken) {
    requestHeaders.set('Authorization', `Bearer ${accessToken}`);
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...requestInit,
    headers: requestHeaders,
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
