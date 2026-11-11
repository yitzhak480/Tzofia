// Talking to the server (on Render).
import { useEffect, useState } from 'react';

export const API_URL =
  import.meta.env.VITE_API_URL || 'https://tzofia-backend.onrender.com/api';

// Sends a request to the server and returns the JSON answer.
// Throws an Error with the server's message if something went wrong.
export async function api(path, { method = 'GET', body, token, form } = {}) {
  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined && !form) headers['Content-Type'] = 'application/json';

  const res = await fetch(API_URL + path, {
    method,
    headers,
    body: form ? form : body !== undefined ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const err = new Error(data?.message || `Server error (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return data;
}

// Picks the text in the current language, falling back to Hebrew.
export const tr = (field, lang) => (field && (field[lang] || field.he)) || '';

// Loads data from the server for a page: { data, loading, error }.
export function useApi(path) {
  // Remember which address the result belongs to, so when the visitor moves
  // to another page we show "loading" instead of the previous page's data.
  const [result, setResult] = useState({ path: null, data: null, error: null });

  useEffect(() => {
    let cancelled = false;
    api(path)
      .then((data) => !cancelled && setResult({ path, data, error: null }))
      .catch((error) => !cancelled && setResult({ path, data: null, error }));
    return () => {
      cancelled = true;
    };
  }, [path]);

  const current = result.path === path;
  return {
    data: current ? result.data : null,
    error: current ? result.error : null,
    loading: !current,
  };
}
