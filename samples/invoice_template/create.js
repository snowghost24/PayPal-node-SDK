/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var util = require('./util');
var paypal = require('../../');
require('../configure');

paypal.invoiceTemplate.create(util.invoice_template_json(), function (error, invoice_template) {
    if (error) {
        throw error;
    } else {
        console.log("Create Invoice Template Response:");
        console.log(invoice_template);
    }
});
