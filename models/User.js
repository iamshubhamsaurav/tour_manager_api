const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide your email address"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    photo: String,
    password: {
        type: String,
        required: [true, "Please provide password"],
        minLength: 8,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;