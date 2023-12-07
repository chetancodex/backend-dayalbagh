const express = require('express');
const QuestionController = require('../controller/question.controller');
const router = express.Router();

router.post('/setQuestion', QuestionController.SetQuestion);

module.exports = router