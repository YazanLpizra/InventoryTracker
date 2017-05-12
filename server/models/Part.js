'use strict';

let mongoose = require('mongoose');

var PartSchema = new mongoose.Schema({
    partNumber: String,
    partName: String,
    description: String,
    compatibleCars: [{
        year: Number,
        make: String,
        model: String,
        descriptor: String
    }],
    units: [{
        unitId: String,
        manufacturerId: String,
        price: Number,
        mileage: Number,
        stockedDate: Date,
        soldDate: Date,
        soldStatus: ['in_stock', 'ordered', 'shipped', 'no_stock'],
        condition: String
    }]
});

module.exports = mongoose.model('Part', PartSchema);