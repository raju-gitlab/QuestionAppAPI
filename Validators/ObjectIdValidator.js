const express = require('express');
const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);
const mongoose = require('mongoose');
const app = express();

const Schema = new mongoose.Schema({
    OID: String
});

//Function for validate ObjectId
function validateOID(SchemaName, ObjectId) {
    return new Promise((resolve, reject) => {
        const model = mongoose.model(SchemaName, Schema);
        const response = model.findById(ObjectId);
        if (response && mongoose.Types.ObjectId.isValid(ObjectId)) {
            resolve(response);
        }
        else {
            reject("Either Id not available in following Schema Or ObjectId is not Valid");
        }
    })
}

module.exports.validateOID = validateOID;