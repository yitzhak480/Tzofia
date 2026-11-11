import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdminLogin from './AdminLogin';
import AdminCategories from './AdminCategories';
import AdminPeople from './AdminPeople';
import { loadToken, makeAdminApi, saveToken } from './adminApi';

const TABS = [
  { id: 'people', label: 'דמויות' },
  { id: 'categories', label: 'קטגוריות' },
];

// /admin — manage the encyclopedia. Shows the login until the admin signs in.
const AdminPage = () => {
  const [token, setToken] = useState(loadToken);
  const [tab, setTab] = useState('people');

  const logout = useCallback((expired = false) => {
    saveToken(null);
    setToken(null);
    if (expired) toast.error('פג תוקף ההתחברות, יש להתחבר מחדש');
  }, []);

  const adminApi = useMemo(() => makeAdminApi(token, () => logout(true)), [token, logout]);

  // On opening the page, make sure a saved login is still valid.
  useEffect(() => {
    if (token) adminApi.call('/auth/check').catch(() => {});
  }, [token, adminApi]);

  const handleLogin = (newToken) => {
    saveToken(newToken);
    setToken(newToken);
  };

  return (
    <div className="page-wrapper" dir="rtl">
      <Helmet>
        <title>Tzofia Art | ניהול</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />

      <main className="admin-container admin-wide">
        <h1 className="admin-main-title">ניהול לומדות האילן</h1>

        {!token ? (
          <AdminLogin onLogin={handleLogin} />
        ) : (
          <>
            <div className="admin-topbar">
              <div className="admin-tabs" role="tablist">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={tab === t.id}
                    className={`filter-btn ${tab === t.id ? 'active' : ''}`}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <button className="admin-btn" onClick={() => logout()}>יציאה</button>
            </div>

            {tab === 'categories' && <AdminCategories adminApi={adminApi} />}
            {tab === 'people' && <AdminPeople adminApi={adminApi} />}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;
