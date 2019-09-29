const express = require('express');
const router = express.Router();
const mentor = require('../models/mentor');
//login/authenticate
router.get('/login',(req,res,next)=>{
    res.send('authenticate');
})

//register
router.post('/register',(req,res,next)=>{
    let newMentor = new mentor({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        password: req.body.password,
        contactNumber: req.body.contactNumber,
        role: "mentor",
        linkedURL: req.body.linkedURL,
        yearOfExp : req.body.yearOfExp,
        descrp : req.body.descrp,
        active: req.body.active,
        confirmedSignUp: req.body.confirmedSignUp,
        resetPassword: req.body.resetPassword,
        resetPasswordDate: req.body.resetPasswordDate,
    });

    mentor.addMentor(newMentor, (err, user)=>{
        if(err){
            res.json({success: false, msg: 'failed to register user', why : err});
        }
        else{
            res.json({success: true, msg: 'successfully registered user'});
        }
    });
});

//profile
router.get('/profile',(req,res,next)=>{
    res.send('profile');
})

module.exports = router;
