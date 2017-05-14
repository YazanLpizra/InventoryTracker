'use strict';

let router = require('express').Router();
let Part = require('../models/Part.js');

router.use((req, res, next) => {
    //do logging
    console.log('passing through parts API middleware');
    console.log(new Date().toISOString() + ": Request body: " + JSON.stringify(req.body.part, null, 2))
    console.log(new Date().toISOString() + ": Request params: " + JSON.stringify(req.params, null, 2))

    try {
        global.gc();
    } catch (e) {
        console.log("You must run program with 'node --expose-gc server.js' or 'npm start'");
        process.exit();
    }

    //2. Output Heap stats
    var heapUsed = process.memoryUsage().heapUsed;
    console.log("Program is using " + heapUsed + " bytes of Heap.")

    next();
});

router.route('/parts')
    .get((req, res) => {
        Part.find((err, parts) => {
            if (err) return res.json({ error: err, message: "Parts list was not able to be retrieved" });
            res.json({ data: parts, message: "Parts fetched succesfully" });
        });
    })
    .post((req, res) => {
        let part = new Part();

        console.log(JSON.stringify(req.body.part))

        Object.keys(req.body.part).forEach(function (key, index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
            if (req.body.part[key]) {
                part[key] = req.body.part[key];
            }
        });

        part.save((err) => {
            if (err) return res.json({ error: err, message: "Part could not be created" });
            res.json({ data: part, message: "Part created" });
        });
    });

router.route('/parts/:partNumber')
    .get((req, res) => {
        Part.findOne({ 'partNumber': req.params.partNumber }, (err, part) => {
            if (err) return res.json({
                error: err,
                message: "Part could not be fetched"
            });

            if (!part) return res.json({
                error: 'Part not found',
                message: 'Could not retrieve part. Part not found with partNumber = ' + req.params['partNumber']
            });
            res.json({ data: part, message: "Part fetched successfully" });
        });
    })
    .put((req, res) => {
        Part.findOne({ partNumber: req.params['partNumber'] }, (err, part) => {
            if (err) return res.json({
                error: err,
                message: "Part to be updated could not be fetched"
            });

            if (!part) return res.json({
                error: 'Part not found',
                message: 'Could not retrieve part to update. Part not found with partNumber = ' + req.params['partNumber']
            });

            Object.keys(req.body.part).forEach(function (key, index) {
                // key: the name of the object key
                // index: the ordinal position of the key within the object 


                if (req.body.part[key]) {
                    part[key] = req.body.part[key];
                }
            });

            part.save((err) => {
                if (err) return res.json({ error: err, message: "Part could not be updated in the database" });
                res.json({ data: part, message: 'Part updated successfully' });
            });
        });
    })
    .delete((req, res) => {
        Part.remove({ partNumber: req.params['partNumber'] }, (err, part) => {
            if (err) return res.json({
                error: err,
                message: "Part could not be deleted"
            });

            if (!part) return res.json({
                error: 'Part not found',
                message: 'Could not retrieve part to delete. Part not found with partNumber = ' + req.params['partNumber']
            });

            res.json({ data: part, message: 'Part successfully deleted' });
        });
    });

module.exports = router;