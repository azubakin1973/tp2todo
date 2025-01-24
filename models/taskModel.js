const db = require('../config/db');

// Créer une nouvelle tâche
exports.createTask = (userId, title, description, status, callback) => {
  const query = 'INSERT INTO tasks (user_id, title, description, status) VALUES (?, ?, ?, ?)';
  db.query(query, [userId, title, description, status || 'en attente'], callback);
};

// Liste de toutes les tâches
exports.getTasksByUserId = (userId, callback) => {
  const query = 'SELECT * FROM tasks WHERE user_id = ?';
  db.query(query, [userId], callback);
};

// Mettre à jour la tâche
exports.updateTask = (taskId, userId, title, description, status, callback) => {
  const query = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ? AND user_id = ?';
  db.query(query, [title, description, status, taskId, userId], callback);
};

// Supprimer la tâche
exports.deleteTask = (taskId, userId, callback) => {
  const query = 'DELETE FROM tasks WHERE id = ? AND user_id = ?';
  db.query(query, [taskId, userId], callback);
};
