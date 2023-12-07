const db = require('../config/index');
const Student = db.StudentModel;
const jwt = require('jsonwebtoken');
const secretkey = "your_secret_key_here";
//For Register
exports.register = (req,res) => {
    const student = {
        StudentName : req.body.StudentName,
        RollNo: req.body.RollNo,
        email: req.body.email,
      };
      
      Student.create(student)
        .then((student) => {
          res.status(200).send('Student Has Registered' + student);
        })
        .catch((error) => {
          console.error('Error:', error);
          res.status(500).send({
            message: 'An error occurred while creating the Student.'})
         });
};
// For Sign IN 
exports.signIn = async(req,res) => {
try {
    const student = await Student.findOne({ where : {email : req.body.email} });
    if(!student) {
        return res.status(400).send({message : "Email is Invalid"});
    }
    const expiresIn = 3600
    const token = jwt.sign(
        {
            email : student.email,
            StudentName: student.StudentName,
            id : student.id,
            exp : Math.floor(Date.now() / 1000) + expiresIn,
        },
        secretkey
    );
    res.header('Authorization', `Bearer ${token}`);
    console.log(Date.now())
    return res.status(200).send({ token });
} catch (error) {
  return  res.status(500).send({message : "Server Not Responding", er:error})
}
}