const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String // Note: Store passwords securely using hashing
});

module.exports = mongoose.model('User', userSchema);
