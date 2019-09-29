const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');
const studentSchema = require('./users');

//student schema
// const studentSchema = mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     secondName: {
//         type: String
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password:{
//         type: String,
//         required: true
//     },
//     contactNumber: {
//         type: Number,
//         required: true
//     },
//     role: {
//         type: String
//     },
//     active: {
//         type: Boolean
//     },
//     confirmedSignUp: {
//         type: Boolean
//     },
//     resetPassword: {
//         type: Boolean
//     },
//     resetPasswordDate: {
//         type: Date
//     }
// })


const student = module.exports = mongoose.model('student', studentSchema, 'users');

module.exports.getStudentById = function(id, callback){
    student.findById(id, callback);
}

module.exports.getStudentByUsername = function(username, callback){
    const query = {email: username}
    console.log('its here');
    student.findOne(query, callback);
}

module.exports.addStudent = function(newStudent,callback){
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newStudent.password, salt, (err, hash)=>{
            if(err)
                throw err;
                newStudent.password = hash;
                newStudent.save(callback);
        })
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch)=> {
        if(err) throw err;
        callback(null, isMatch);
        
    })
}