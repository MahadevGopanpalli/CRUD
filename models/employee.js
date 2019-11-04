const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    fullName: { type: String },
    email: { type: String },
    mobile: { type: String },
    location: { type: Number }
});

module.exports = { Employee };