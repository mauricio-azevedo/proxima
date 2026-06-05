interface ErrorResponseBody {
  message?: string | string[];
  error?: string;
}

export function readErrorMessage(body: unknown, fallbackMessage: string) {
  if (!isErrorResponseBody(body)) {
    return fallbackMessage;
  }

  if (Array.isArray(body.message)) {
    return body.message.join(' ');
  }

  return body.message ?? body.error ?? fallbackMessage;
}

function isErrorResponseBody(value: unknown): value is ErrorResponseBody {
  return typeof value === 'object' && value !== null;
}
