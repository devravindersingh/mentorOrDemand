const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

//mentor schema
const mentorSchema = require('./users');

const mentor = module.exports = mongoose.model('mentor', mentorSchema, 'users');

module.exports.getMentorById = function(id, callback){
    mentor.findById(id, callback);
}

module.exports.getMentorByUsername = function(username, callback){
    const query = {username: username}
    mentor.findOne(query, callback);
}

module.exports.addMentor = function(newMentor,callback){
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newMentor.password, salt, (err, hash)=>{
            if(err)
                throw err;
                newMentor.password = hash;
                newMentor.save(callback);
        })
    })
}