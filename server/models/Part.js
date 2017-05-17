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
        purchaseCost:Number,
        price: Number,
        mileage: Number,
        stockedDate: Date,
        soldDate: Date,
        stockStatus: ['STOCKED','SOLD','JUNKED'],
        shippingStatus: ['NA','ORDERED','SHIPPED','DELIVERED'],
        condition: String
    }]
});

module.exports = mongoose.model('Part', PartSchema);