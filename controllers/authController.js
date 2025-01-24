const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Creer une conte de l'utilisateur
exports.signup = (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    const query = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({ message: 'User created successfully' });
    });
  });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    });
  });
};

// suprimmer la conte
exports.deleteAccount = (req, res) => {
  const userId = req.user.id;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting account' });
    }
    res.status(200).json({ message: 'Account deleted successfully' });
  });
};

// Mettre à jour l'informations d'utilisateur
exports.updateAccount = (req, res) => {
  const userId = req.user.id;
  const { username, email } = req.body;
  const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
  db.query(query, [username, email, userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating account' });
    }
    res.status(200).json({ message: 'Account updated successfully' });
  });
};
