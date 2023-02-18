const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLength: 2,
    },
    author:{
        type: String,
        required: true,
        minLength: 5,
    },
    image:{
        type: String,
        required: true,
        //validate: /^http?:\/\//,
    },
    review:{
        type: String,
        required: true,
        minLength: 10,

    },
    genre:{
        type: String,
        required: true,
        minLength: 3,
    },
    stars:{
        type: Number,
        require: true,
        min: 1,
        max: 5,
    },
    wishingList:[{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
})


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;


// You should make the following validations while creating or editing a book review:
// •	The Title should be at least 2 characters
// •	The Author should be at least 5 characters
// •	The Genre should be at least 3 characters
// •	The Stars should be a positive number between 1 and 5
// •	The Image should start with http:// or https://.
// •	The Review should be a minimum of 10 characters long
