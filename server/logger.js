var winston = require('winston');
let LogLevel = require('./models/LogLevel.js');
let LogParams = require('./models/LogParams.js');

require('winston-loggly-bulk');

module.exports = function (config) {
    winston.add(winston.transports.Loggly, {
        token: config.loggly.token,
        subdomain: config.loggly.subdomain,
        tags: ["inventoryTracker"],
        json: true

    });

    return {
        log: function (params) {
            if (!(params instanceof LogParams)) {
                winston.log(LogLevel.INFO, `${params}`);
            } else {
                //enhance logs
                params.meta.callingFunction = params.callingFunction;

                winston.log(params.level, `${params.message}`, params.meta);
            }
            params.message = "";
            params.meta = {};
        }
    };
}