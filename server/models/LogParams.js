'use strict';

let LogLevel = require('./LogLevel.js')

class LogParams {
    constructor(message, callingFunction, meta = {}, level = LogLevel.INFO) {
        this.message = message;
        this.level = level;
        this.meta = meta;
        this.callingFunction = callingFunction;
    }
}

module.exports = LogParams;
