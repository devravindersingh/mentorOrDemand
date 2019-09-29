const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    role: {
        type: String
    },
    linkedURL: {
        type: String
    },
    yearOfExp: {
        type: Number,
        required: true
    },
    descrp:{
        type: String
    },
    active: {
        type: Boolean
    },
    confirmedSignUp: {
        type: Boolean
    },
    resetPassword: {
        type: Boolean
    },
    resetPasswordDate: {
        type: Date
    }
})

module.exports = userSchema;