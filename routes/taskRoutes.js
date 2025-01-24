const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Créer une tâche
router.post('/', authMiddleware, taskController.createTask);

// Liste de toutes les tâches
router.get('/', authMiddleware, taskController.getTasks);

// Mettre à jour la tâche
router.put('/:id', authMiddleware, taskController.updateTask);

// Supprimer la tâche
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;
