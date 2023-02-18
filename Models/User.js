const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4,

    },
    email: {
        type: String,
        required: true,
        minLength: 10,
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User;


// •	The username should be at least 4 characters long
// •	The email should be at least 10 characters long
// •	The password should be at least 3 characters long
// •	The repeat password should be equal to the password
