'use strict';

let mongoose = require('mongoose');

var PartSchema = new mongoose.Schema({
    partId: String,
    name: String
});

module.exports = mongoose.model('Part', PartSchema);