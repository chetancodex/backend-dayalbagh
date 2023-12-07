const db = require('../config/index');
const Question = db.QuestionModel;
const Option  = db.OptionModel

exports.SetQuestion = async (req,res) => {
try {
    const question = req.body.question;
    const options = req.body.options;


    if (!question || !options || options.length === 0) {
        return res.status(400).json({ error: 'Invalid request. Please provide questionText and non-empty options array.' });
    }
    if (!options.every(option => option.option !== undefined)) {
        return res.status(400).json({ error: 'Invalid options format. Each option should have a text property.' });
    }

    // Create a new question
    const newQuestion = await Question.create({
        question
    });

    // Create options and associate them with the question
    const questionId = newQuestion.id; // Assuming Sequelize uses 'id' as the primary key
    const optionObjects = options.map(option => ({
        option: option.option,
        isCorrect: option.isCorrect !== undefined ? option.isCorrect : false,
        quesId: questionId
    }));

    // Save options to the Option table
    await Option.bulkCreate(optionObjects);

    return res.status(201).json({ message: 'Question and options created successfully.' });
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
}
}
