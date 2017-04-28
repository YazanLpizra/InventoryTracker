'use strict';

let router = require('express').Router();
let Part = require('../models/Part.js');

router.use((req, res, next) => {
    //do logging
    console.log('passing through parts API middleware');
    console.log(new Date().toISOString() + ": Request body: " + JSON.stringify(req.body.part, null, 2))
    console.log(new Date().toISOString() + ": Request params: " + JSON.stringify(req.params, null, 2))
    next();
});

router.route('/parts')
    .get((req, res) => {
        Part.find((err, parts) => {
            if (err) res.json({ error: err, message: "Parts list was not able to be retrieved" });
            JSON.stringify({ data: parts, message: "Parts fetched succesfully" });
            res.json({ data: parts, message: "Parts fetched succesfully" });
        });
    })
    .post((req, res) => {
        let part = new Part();

        Object.keys(req.body.part).forEach(function(key, index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
            if (req.body.part[key]) {
                part[key] = req.body.part[key];
            }
        });

        part.save((err) => {
            if (err) res.json({ error: err, message: "Part could not be created" });
            console.log(JSON.stringify({ data: part, message: "Part created" }))
            res.json({ data: part, message: "Part created" });
        });
    });

router.route('/parts/:partId')
    .get((req, res) => {
        Part.findById(req.params.partId, (err, part) => {
            if (err) res.json({ error: err, message: "Part could not be fetched" });
            JSON.stringify({ data: part, message: "Part fetched successfully" });
            res.json({ data: part, message: "Part fetched successfully" });
        });
    })
    .put((req, res) => {
        Part.findById(req.params.partId, (err, part) => {
            if (err) res.json({ error: err, message: "Part to be updated could not be fetched" });

            Object.keys(req.body.part).forEach(function(key, index) {
                // key: the name of the object key
                // index: the ordinal position of the key within the object 
                if (req.body.part[key]) {
                    part[key] = req.body.part[key];
                }
            });

            part.save((err) => {
                if (err) res.json({ error: err, message: "Part could not be updated in the database" });
                JSON.stringify({ data: part, message: 'Part updated successfully' });
                res.json({ data: part, message: 'Part updated successfully' });
            });
        });
    })
    .delete((req, res) => {
        Part.remove({ _id: req.params.partId }, (err, part) => {
            if (err) res.json({ error: err, message: "Part could not be deleted" });
            JSON.stringify({ data: part, message: 'Part successfully deleted' });
            res.json({ data: part, message: 'Part successfully deleted' });
        });
    })

module.exports = router;