'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let mongoose = require('mongoose');
let path = require('path');

let partsApi = require('./server/routes/partsAPI.js');

let app = express();
let port = process.env.PORT || process.argv[2] || 8080;

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.static(path.join(__dirname, '/.')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/partsDb');
var router = express.Router();

app.use('/api', partsApi);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.use('/api', router);

app.listen(port, () => {
    console.log("App listening on port " + port);
});