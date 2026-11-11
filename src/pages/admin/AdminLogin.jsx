import React, { useState } from 'react';
import { api } from '../../api';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const { token } = await api('/auth/login', { method: 'POST', body: { password } });
      onLogin(token);
    } catch (err) {
      setError(
        err.status === 401
          ? 'סיסמה שגויה'
          : err.status === 429
            ? 'יותר מדי ניסיונות. נסו שוב בעוד רבע שעה.'
            : `לא ניתן להתחבר: ${err.message}`
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin-card admin-login">
      <h2>כניסת מנהל</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="admin-password">סיסמה:</label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            autoFocus
            required
          />
        </div>
        {error && <p className="admin-error">{error}</p>}
        <button type="submit" className="admin-submit-btn" disabled={busy}>
          {busy ? 'מתחבר... (השרת עשוי להתעורר עד דקה)' : 'כניסה'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
