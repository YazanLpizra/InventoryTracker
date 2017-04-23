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
            if (err) res.send(err);
            res.json(parts);
        });
    })
    .post((req, res) => {
        let part = new Part();
        part.name = req.body.name;
        part.partId = req.body.partId;

        part.save((err) => {
            if (err) res.send(err);
            res.json({ message: "Part created" });
        });
    });

router.route('/parts/:partId')
    .get((req, res) => {
        Part.findById(req.params.partId, (err, part) => {
            if (err) res.send(err);
            res.json(part);
        });
    })
    .put((req, res) => {
        Part.findById(req.params.partId, (err, part) => {
            if (err) res.send(err);

            part.partId = req.body.partId ? req.body.partId : part.partId;
            part.name = req.body.name ? req.body.name : part.name;

            part.save((err) => {
                if (err) res.send(err);
                res.json({ message: 'part updated successfully' });
            });
        });
    })
    .delete((req, res) => {
        Part.remove({ _id: req.params.partId }, (err, part) => {
            if (err) res.send(err);
            res.json({ message: 'part successfully deleted' });
        });
    })

module.exports = router;