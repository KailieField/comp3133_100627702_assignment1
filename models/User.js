const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {

        type: String, 
        required: true, 
        unique: true

    },

    email: {

        type: String,
        required: true,
        unique: true

    },

    password: {

        type: String,
        required: true //<------- will be storing hashed password
    },

    created_at: {

        type: Date,
        default: Date.now()

    },

    updated_at: {

        type: String,
        default: Date.now()

    },


});

module.exports = mongoose.model("User", UserSchema);