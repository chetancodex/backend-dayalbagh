const express = require('express');
const StudentController = require('../controller/student.controller');
const router = express.Router();

//Register User
router.post('/register', StudentController.register);

// Sign In
router.post('/signIn', StudentController.signIn);

// hello
router.get('/hello', StudentController.greet)

module.exports = router