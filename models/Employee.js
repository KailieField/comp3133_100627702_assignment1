const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    first_name: {

        type: String,
        required: true,

    },

    last_name: {

        type: String,
        required: true

    },

    email: {

        type: String,
        required: true,
        unique: true

    },

    gender: { 

        type: String,
        required: true, 
        enum: [ "Male", "Female", "Other" ]

    },

    designation: {

        type: String,
        required: true,

    },

    salary: {

        type: Number,
        required: true,
        min: 1000 //<--- immediately call for a raise or HR promptly lol (ó﹏ò｡)

    },

    date_of_joining: {

        type: Date,
        default: Date.now()

    },

    department: {

        type: String,
        required: true
    },

    created_at: {

        type: Date,
        default: Date.now()

    },

    updated_at: {

        type: Date,
        default: Date.now()

    },

});

module.exports = mongoose.model("Employee", EmployeeSchema);