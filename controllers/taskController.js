const taskModel = require('../models/taskmodel');

// Créer une tâche
exports.createTask = (req, res) => {
  const { title, description, status } = req.body;
  const userId = req.user.id; 

  taskModel.createTask(userId, title, description, status || 'pendente', (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating task' });
    }
    res.status(201).json({ message: 'Task created successfully', taskId: result.insertId });
  });
};

// Liste de toutes les tâches
exports.getTasks = (req, res) => {
  const userId = req.user.id;

  taskModel.getTasksByUserId(userId, (err, tasks) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching tasks' });
    }
    res.status(200).json(tasks);
  });
};

// Mettre à jour la tâche
exports.updateTask = (req, res) => {
  const { title, description, status } = req.body;
  const taskId = req.params.id;
  const userId = req.user.id;

  taskModel.updateTask(taskId, userId, title, description, status, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating task' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    res.status(200).json({ message: 'Task updated successfully' });
  });
};

// Supprimer la tâche
exports.deleteTask = (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.id;

  taskModel.deleteTask(taskId, userId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting task' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  });
};
