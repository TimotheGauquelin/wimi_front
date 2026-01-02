import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

interface UseFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useFetch<T>(
  url: string,
  options?: UseFetchOptions
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const config: AxiosRequestConfig = {
        method: options?.method || 'GET',
        url,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        data: options?.body,
      };

      const response = await axios<T>(config);
      setData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        setError(
          new Error(
            axiosError.response?.statusText ||
              `HTTP error! status: ${axiosError.response?.status || 'Unknown'}`
          )
        );
      } else {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options?.method === 'GET' || !options?.method) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

