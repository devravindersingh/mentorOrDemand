const express = require('express');
const router = express.Router();
const mentor = require('../models/mentor');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require("../config/database");

//login/authenticate
router.get('/login',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    student.getMentorByUsername(username, (err, user)=> {
        if(err) throw err;
        if(!user){
            console.log(user);
            return res.json({
                success: false,
                msg : 'User not found',
            })
        }
        mentor.comparePassword(password, user.password, (err, isMatch)=>{
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
