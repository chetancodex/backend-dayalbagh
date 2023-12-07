const express = require("express");
const cors = require("cors")
const db = require('./config/index');
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

//Routes
const StudentRoutes = require("./routes/student.routes");
const TeacherRoutes = require("./routes/teacher.routes")
const QuestionRoutes = require("./routes/question.routes");



app.use(cors());
app.use(bodyParser.json());

//Using Routes
app.use("/student", StudentRoutes);
app.use("/teacher",TeacherRoutes);
app.use("/question",QuestionRoutes);


db.sequelize
.sync()
.then(()=> {
    console.log("db sync to Dayalbagh Database")
}).catch((err)=> {
    console.log('Failed to sync' + err.message)
});

const PORT = 3360;
app.listen(PORT , () => {
    console.log(`Server is Running On PORT ${PORT}`)
});