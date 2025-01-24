const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/users', authController.signup);
router.post('/login', authController.login);
router.delete('/users', authMiddleware, authController.deleteAccount);
router.put('/users', authMiddleware,authController.updateAccount);

module.exports = router;
