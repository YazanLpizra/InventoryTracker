'use strict';

let router = require('express').Router();

let Part = require('../models/Part.js');
let logger = require('../logger.js');
let LogParams = require('../models/LogParams.js');

//message,callerName,meta?,level=info
let logParams;
let alerted = false;

router.use((req, res, next) => {
    //do logging
    logParams = new LogParams('Request body.', '/api middleware', { body: JSON.stringify(req.body.part) });
    logger.log(logParams);

    logParams.message = 'Request params.';
    logParams.meta.data = JSON.stringify(req.params);
    logger.log(logParams);

    try {
        global.gc();
        logParams.message = 'Program memory usage.';
        logParams.meta.data = process.memoryUsage().heapUsed;
        logParams.level = LogLevel.DEBUG;
        logger.log(logParams);

        logger.log(`Program is using ${process.memoryUsage().heapUsed} bytes of Heap.`);
    } catch (e) {
        if (!alerted) {
            logger.log('You must run program with "node --expose- gc server.js" to get garbage collection and heap statistics.');
            alerted = true;
        }
    }

    next();
});

router.route('/parts')
    .get((req, res) => {
        logParams = new LogParams('Method start', 'GET /api/parts');
        logger.log(logParams);

        Part.find((err, parts) => {
            if (err) {
                logParams.message = 'Parts list could not be retrieved.';
                logParams.level = LogLevel.ERROR;
                logParams.meta.error = err;
                logger.log(logParams);
                return res.json({ error: err, message: 'Parts list was not able to be retrieved.' });
            }
            logParams.message = 'Parts fetched successfully.';
            logger.log(logParams);
            res.json({ data: parts, message: 'Parts fetched succesfully.' });
        });
    })
    .post((req, res) => {
        logParams = new LogParams('Method start', 'POST /api/parts');
        logger.log(logParams);

        let part = new Part();

        Object.keys(req.body.part).forEach(function (key, index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
            if (req.body.part[key]) {
                part[key] = req.body.part[key];
            }
        });

        part.save((err) => {
            if (err) {
                logParams.message = 'Part could not be created.';
                logParams.level = LogLevel.ERROR;
                logParams.meta.error = err;
                logger.log(logParams);
                return res.json({ error: err, message: 'Part could not be created.' });
            }
            logParams.message = 'Part created.';
            logger.log(logParams);
            res.json({ data: part, message: 'Part created.' });
        });
    });

router.route('/parts/:partNumber')
    .get((req, res) => {
        logParams = new LogParams('Method start', 'GET /api/parts/:partNumber');
        logger.log(logParams);

        Part.findOne({ 'partNumber': req.params.partNumber }, (err, part) => {
            if (err) {
                logParams.message = 'Part could not be fetched.';
                logParams.level = LogLevel.ERROR;
                logParams.meta.error = err;
                logger.log(logParams);
                return res.json({
                    error: err,
                    message: 'Part could not be fetched.'
                });
            }

            if (!part) {
                logParams.message = 'Could not retrieve part. Part not found with partNumber = ' + req.params['partNumber'];
                logParams.level = LogLevel.ERROR;
                logParams.meta.error = 'Part not found.';
                logger.log(logParams);
                return res.json({
                    error: 'Part not found',
                    message: 'Could not retrieve part. Part not found with partNumber = ' + req.params['partNumber']
                });
            }

            logParams.message = 'Part fetched successfully';
            logger.log(logParams);
            res.json({ data: part, message: 'Part fetched successfully' });
        });
    })
    .put((req, res) => {
        logParams = new LogParams('Method start', 'PUT /api/parts/:partNumber');
        logger.log(logParams);

        Part.findOne({ partNumber: req.params['partNumber'] }, (err, part) => {
            if (err) {
                logParams.message = 'Part to be updated could not be fetched';
                logParams.level = LogLevel.ERROR;
                logParams.meta.error = err;
                logParams.level = LogLevel.ERROR;
                logger.log(logParams);

                return res.json({
                    error: err,
                    message: 'Part to be updated could not be fetched'
                });
            }

            if (!part) {
                logParams.message = 'Part not found.';
                logParams.meta.error = 'Could not retrieve part to update. Part not found with partNumber = ' + req.params['partNumber'];
                logParams.level = LogLevel.ERROR;
                logger.log(logParams);

                return res.json({
                    error: 'Part not found',
                    message: 'Could not retrieve part to update. Part not found with partNumber = ' + req.params['partNumber']
                });
            }

            Object.keys(req.body.part).forEach(function (key, index) {
                // key: the name of the object key
                // index: the ordinal position of the key within the object 
                if (req.body.part[key]) {
                    part[key] = req.body.part[key];
                }
            });

            part.save((err) => {
                if (err) return res.json({ error: err, message: 'Part could not be updated in the database' });

                logParams.message = 'Part updated successfully';
                logger.log(logParams);
                res.json({ data: part, message: 'Part updated successfully' });
            });
        });
    })
    .delete((req, res) => {
        logParams = new LogParams('Method start', 'DELETE /api/parts/:partNumber');
        logger.log(logParams);

        Part.remove({ partNumber: req.params['partNumber'] }, (err, part) => {
            if (err) {
                logParams.message = 'Part could not be deleted';
                logParams.meta.error = err;
                logParams.level = LogLevel.ERROR;
                logger.log(logParams);

                return res.json({
                    error: err,
                    message: 'Part could not be deleted'
                });
            }

            if (!part) {
                logParams.message = 'Could not retrieve part to delete. Part not found with partNumber = ' + req.params['partNumber']
                logParams.meta.error = 'Part not found.';
                logParams.level = LogLevel.ERROR;
                logger.log(logParams);

                return res.json({
                    error: 'Part not found',
                    message: 'Could not retrieve part to delete. Part not found with partNumber = ' + req.params['partNumber']
                });
            }

            logParams.message = 'Part successfully deleted';
            logger.log(logParams);
            res.json({ data: part, message: 'Part successfully deleted' });
        });
    });

module.exports = router;