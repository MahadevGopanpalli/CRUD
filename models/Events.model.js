var mongoose = require('mongoose');


var Events = new mongoose.Schema({
    name: {
        type: String,
        required: "Required"
    },
    description: {
        type: String,
        required: "Required"
    },
    Teacher: {
        type: String,
        required: "Required"
    }
});

module.exports = mongoose.model('Marveous', Events);

var SEvents = new mongoose.Schema({
    Name: {
        type: String,
        required: "Required"
    },
    Description: {
        type: String,
        required: "Required"
    },
    Teacher: {
        type: String,
        required: "Required"
    }
});

module.exports = mongoose.model('Marvelous', SEvents);