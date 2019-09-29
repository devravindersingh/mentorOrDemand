const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config/database');
const Student = require('../models/student');
const Mentor = require('../models/mentor');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use( new JwtStrategy(opts, (jwt_payload, done)=> {
        Student.findById(jwt_payload._id, (err, student)=>{
            if(err){
                return done(err,false);
            }
            if(student){
                return done(null, student);
            }
            else{
                return done(null, false);
            }
        });
    }))
}