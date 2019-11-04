const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

const api = require('./routes/api');
const port = 3000;
var employeeController = require('./routes/employeeController.js');
const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use('/api', api);
app.use('/employees', employeeController);

app.listen(port, function() {
    console.log("Marvellous Innfosystems : Server running on localhost:" + port);
});