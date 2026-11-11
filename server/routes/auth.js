const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Compare passwords without leaking timing information.
const samePassword = (given, expected) => {
  const a = crypto.createHash('sha256').update(String(given)).digest();
  const b = crypto.createHash('sha256').update(String(expected)).digest();
  return crypto.timingSafeEqual(a, b);
};

// Very small brute-force guard: max 10 failed attempts per IP per 15 minutes.
const failures = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILURES = 10;

// POST /api/auth/login  { password } -> { token }
router.post('/login', (req, res) => {
  const { ADMIN_PASSWORD, JWT_SECRET } = process.env;
  if (!ADMIN_PASSWORD || !JWT_SECRET) {
    return res.status(500).json({ message: 'Server is missing ADMIN_PASSWORD or JWT_SECRET' });
  }

  const ip = req.ip;
  const now = Date.now();
  const record = failures.get(ip);
  if (record && now - record.first < WINDOW_MS && record.count >= MAX_FAILURES) {
    return res.status(429).json({ message: 'Too many attempts, try again later' });
  }

  if (!samePassword(req.body?.password || '', ADMIN_PASSWORD)) {
    if (!record || now - record.first >= WINDOW_MS) failures.set(ip, { first: now, count: 1 });
    else record.count += 1;
    return res.status(401).json({ message: 'Wrong password' });
  }

  failures.delete(ip);
  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
});

// GET /api/auth/check -> 200 if the saved token is still valid
router.get('/check', requireAdmin, (req, res) => res.json({ ok: true }));

module.exports = router;
