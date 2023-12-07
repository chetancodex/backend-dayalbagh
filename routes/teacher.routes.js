const express = require('express');
const TeacherController = require('../controller/teacher.controller');
const router = express.Router();

//Register User
router.post('/register', TeacherController.register);

// Sign In
router.post('/signIn', TeacherController.signIn);

module.exports = router