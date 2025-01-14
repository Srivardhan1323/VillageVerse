const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true },
    email: { 
        type: String, 
        required: true, 
        unique: true },
    password: { 
        type: String, 
        required: true },
    profilePicture: {
        type: String,
        required:true },
    createdAt: { 
        type: Date, 
        default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
