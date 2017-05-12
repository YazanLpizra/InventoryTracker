'use strict';

let mongoose = require('mongoose');

var PartSchema = new mongoose.Schema({
    partId: String,
    partName: String
});

module.exports = mongoose.model('Part', PartSchema);