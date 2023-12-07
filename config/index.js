const dbConfig = require("./dbconfig")
const { Sequelize } = require('sequelize');
const  sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    pool : {
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
});
const db = {} ;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.StudentModel = require('../models/student.model')(sequelize, Sequelize);
db.TeacherModel = require('../models/teacher.model')(sequelize, Sequelize);
db.QuestionModel = require('../models/question.model') (sequelize, Sequelize);
db.OptionModel = require('../models/options.model')(sequelize, Sequelize)

module.exports = db;
