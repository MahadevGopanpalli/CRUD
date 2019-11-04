const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const url = "mongodb://localhost:27017/DBS";
const Marvellous = require('../models/Events.model');
var MongoClient = require('mongodb').MongoClient;

var Virat = require('../models/Data');

var batchmodel = mongoose.model('Marveous', 'Events');
var sbatchmodel = mongoose.model('Marvelous', 'SEvents');
var data = mongoose.model('Virat', 'Data');

mongoose.connect(url, function(err) {
    if (err) {
        console.error('Error! ' + err)
    } else {
        console.log('Connected to mongodb')
    }
});


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.get('/events', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("DBS");
        dbo.collection("Events").find({}, { projection: { _id: 0, name: 1, description: 1, Teacher: 1 } }).toArray((err, result) => {
                if (err) throw err;
                console.log(result)
                res.json(result)

            })
            //Find the first document in the customers collection:

    })

})




router.get('/data', verifyToken, (req, res) => {


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("DBS");
        dbo.collection("Employee").find({}, { projection: { _id: 0, fullName: 1, email: 1, mobile: 1, location: 1 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result)
            res.json(result)

        })

    })
})



router.post('/data', function(req, res) {
    var myData = new data(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

/*
let form = req.body
var obj = new data();
obj.fullname = form.fullName;
obj.email = form.email;
obj.mobile = form.mobile;
obj.location = form.location;
obj.save(function(err, doc) {
    if (!err) {
        Console.log(obj);
    } else
        res.send("Error while writting data");
})*/




router.post('/login', (req, res) => {
    let userData = req.body

    if ((userData.email == "Vaibhav") && (userData.password == "Vaibhav")) {
        let payload = { subject: 1 }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({ token })
    } else {
        res.status(401).send('Invalid Password')
    }
})

module.exports = router;