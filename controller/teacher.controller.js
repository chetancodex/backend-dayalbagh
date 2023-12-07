const db = require('../config/index');
const Teacher = db.TeacherModel;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretkey = "your_secret_key_here";
//For Register
exports.register = (req,res) => {
    const teacher = {
        teacherName: req.body.teacherName,
        email: req.body.email,
        hash_password: bcrypt.hashSync(req.body.password, 10), // Hash the password
      };
      
      Teacher.create(teacher)
        .then((teacher) => {
          res.status(200).send(teacher);
        })
        .catch((error) => {
          console.error('Error:', error);
          res.status(500).send({
            message: 'An error occurred while creating the teacher.'})
         });
};
// For Sign IN 
exports.signIn = async(req,res) => {
try {
    const teacher = await Teacher.findOne({ where : {email : req.body.email} });
    if(!user || !user.comparePassword(req.body.password)) {
        return res.status(400).send({message : "Email or Password is Invalid"});
    }
    const expiresIn = 3600
    const token = jwt.sign(
        {
            email : teacher.email,
            teacherName: teacher.teacherName,
            id : teacher.id,
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

exports.greet = (req, res) => {
  res.json("Hello student")
}

