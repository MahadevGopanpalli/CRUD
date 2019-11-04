var mongoose = require('mongoose');

var Data = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: String,
    location: Number

});

module.exports = mongoose.model('Virat', Data);