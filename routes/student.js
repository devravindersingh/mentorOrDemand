const express = require('express');
const router = express.Router();
const student = require('../models/student');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require("../config/database");

//login/authenticate
router.post('/login',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    student.getStudentByUsername(username, (err, user)=> {
        if(err) throw err;
        if(!user){
            console.log(user);
            return res.json({
                success: false,
                msg : 'User not found',
            })
        }
        student.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 14400 //4hours
                })
                res.json({
                    success : true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.username,
                        email: user.email
                    }
                });
            }
            else{
                return res.json({
                    success: false,
                    msg: "wrong password"
                })
            }
        })
    })
})

//register
router.post('/register',(req,res,next)=>{
    let newStudent = new student({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        password: req.body.password,
        contactNumber: req.body.contactNumber,
        role: "student",
        linkedURL: "",
        yearOfExp : 0,
        descrp : "",
        active: req.body.active,
        confirmedSignUp: req.body.confirmedSignUp,
        resetPassword: req.body.resetPassword,
        resetPasswordDate: req.body.resetPasswordDate,
    });

    student.addStudent(newStudent, (err, user)=>{
        if(err){
            res.json({success: false, msg: 'failed to register user', why: err, yourObj: user});
        }
        else{
            res.json({success: true, msg: 'successfully registered user'});
        }
    });
});

//profile
router.get('/profile',passport.authenticate('jwt', {session: false}),(req,res,next)=>{
    res.json({user: req.user});
})

//editing data
router.get('/edit',(req,res,next)=>{
    res.send('editdata');
})

//coursedetails  -- need technolgies id for display content
router.get('/courseDetails',(req,res,next)=>{
    res.send('details of course');
})

//searching -- need the qurey in techid, calendar details
router.get('/search',(req,res,next)=>{
    res.send('searching for mentors');
})


module.exports = router;