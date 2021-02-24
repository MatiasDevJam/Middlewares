const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
const userMiddleware = require('../middlewares/userMiddleware')

router.get('/', controller.index);
router.get('/admin', userMiddleware ,controller.admin)

module.exports = router

