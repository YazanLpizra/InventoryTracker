'use strict';

let router = require('express').Router();
let Part = require('../models/Part.js');

router.use((req, res, next) => {
    //do logging
    console.log('passing through parts API middleware');
    next();
});

router.route('/parts')
    .get((req, res) => {
        Part.find((err, parts) => {
            if (err) res.json({ error: err, message: "Parts list was not able to be retrieved" });
            res.json({ data: parts, message: "Parts fetched succesfully" });
        });
    })
    .post((req, res) => {
        let part = new Part();
        part.partName = req.body.partName;
        part.partId = req.body.partId;

        part.save((err) => {
            if (err) res.json({ error: err, message: "Part could not be created" });
            res.json({ data: part, message: "Part created" });
        });
    });

router.route('/parts/:partId')
    .get((req, res) => {
        Part.findById(req.params.partId, (err, part) => {
            if (err) res.json({ error: err, message: "Part could not be fetched" });
            res.json({ data: part, message: "Part fetched successfully" });
        });
    })
    .put((req, res) => {
        Part.findById(req.params.partId, (err, part) => {
            if (err) res.json({ error: err, message: "Part to be updated could not be fetched" });

            part.partId = req.body.partId ? req.body.partId : part.partId;
            part.partName = req.body.partName ? req.body.partName : part.partName;

            part.save((err) => {
                if (err) res.json({ error: err, message: "Part could not be updated in the database" });
                res.json({ data: part, message: 'Part updated successfully' });
            });
        });
    })
    .delete((req, res) => {
        Part.remove({ _id: req.params.partId }, (err, part) => {
            if (err) res.json({ error: err, message: "Part could not be deleted" });
            res.json({ data: part, message: 'Part successfully deleted' });
        });
    })

module.exports = router;