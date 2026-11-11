// Protects admin-only routes. The admin logs in with ADMIN_PASSWORD and gets a
// token signed with JWT_SECRET, which the admin page sends with every change.
const jwt = require('jsonwebtoken');

const requireAdmin = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token || !process.env.JWT_SECRET) {
    return res.status(401).json({ message: 'Admin login required' });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'admin') throw new Error('not admin');
    next();
  } catch {
    res.status(401).json({ message: 'Login expired, please log in again' });
  }
};

module.exports = { requireAdmin };
