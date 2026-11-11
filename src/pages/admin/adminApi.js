// Admin login token, kept in the browser so the admin stays logged in
// (the server makes it expire after 7 days).
import { api } from '../../api';

const KEY = 'tzofia_admin_token';

export const loadToken = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

export const saveToken = (token) => {
  try {
    if (token) localStorage.setItem(KEY, token);
    else localStorage.removeItem(KEY);
  } catch {
    // private browsing: the admin just has to log in again next time
  }
};

// Builds request helpers that send the token, and log out on 401.
export const makeAdminApi = (token, onExpired) => {
  const call = async (path, opts = {}) => {
    try {
      return await api(path, { ...opts, token });
    } catch (err) {
      if (err.status === 401) onExpired();
      throw err;
    }
  };

  return {
    call,
    upload: (file) => {
      const form = new FormData();
      form.append('image', file);
      return call('/upload', { method: 'POST', form });
    },
  };
};

// "Kings of Judah" -> "kings-of-judah"
export const toSlug = (text) =>
  (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
