'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let mongoose = require('mongoose');
let path = require('path');

var env = process.env.NODE_ENV || 'dev';

let config = require('./server/config/config.js')[env];
let logger = require('./server/logger.js')(config);
let partsApi = require('./server/routes/partsAPI.js');
let LogParams = require('./server/models/LogParams.js');
let app = express();

let logParams = new LogParams('Server start', 'server.js global');
logger.log(logParams);

let port = config.server.port;

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.static(path.join(__dirname, '/.')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect(config.database.uri);

var router = express.Router();

app.use('/api', partsApi);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/api', router);

app.listen(port, () => {
    console.log('App listening on port ' + port)

    logParams.message = "App started";
    logParams.meta.port = port;
    logger.log(logParams);
});