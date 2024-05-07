const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', userSchema);