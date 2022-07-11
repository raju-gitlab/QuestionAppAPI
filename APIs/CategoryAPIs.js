const express = require('express');
const CategoryService = require('../Services/CategoryService');
const route = express.Router();

module.exports = class Categories {
    static async GetCategories(req, res, next) {
        console.log("New Incoming Request");
        try {
            const result = await CategoryService.GetCategories(req);
            if (result) {
                return res.status(200).send(result);
            } else {
                return res.status(400).send("Req Not Completed");
            }
        } catch (error) {
            return res.status(400).send("ok");
        }
    }

    static async AddCategories(req, res, next) {
        try {
            const result = await CategoryService.AddNewCategory(req.body);
            if (result) {
                return res.status(200).send(result);
            } else {
                return res.status(400).send("Req Not Completed");
            }
        } catch (error) {
            return res.status(400).send("ok");
        }
    }

    static async UpdateCategory(req, res, next) {
        try {
            const result = await CategoryService.UpdateListItems(req.body);
            if (result) {
                return res.status(200).send(result);
            } else {
                return res.status(400).send("Req Not Completed");
            }
        } catch (error) {
            return res.status(400).send("Req Not Completed");
        }
    }
}