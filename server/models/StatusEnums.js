'use strict';

const shippingStatusEnum = {
    NA: 'NA',
    ORDERED: 'ORDERED',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED'

};

const stockStatusEnum = {
    STOCKED: 'STOCKED',
    JUNKED: 'JUNKED',
    SOLD: 'SOLD'
};

module.exports.StockStatusEnum = stockStatusEnum;
module.exports.ShippingStatusEnum = shippingStatusEnum;