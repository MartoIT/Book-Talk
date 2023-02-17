const mogoose = require('mongoose');

const bookSchema = new mogoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    review:{
        type: String,
        required: true,

    },
    genre:{
        type: String,
        required: true,
    },
    stars:{
        type: Number,
        require: true,
    },
    wishingList:{
        type: mogoose.Types.ObjectId,
        ref: 'User'
    },
    owner:{
        type: mogoose.Types.ObjectId,
        ref: 'User',
    },
})


