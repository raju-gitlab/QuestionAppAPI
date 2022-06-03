const express = require('express');
const validateOID = require('../Validators/ObjectIdValidator.js');
const MovieSchema = require('../Schema/AuthSchema');
const { mongoose } = require('mongoose');
const postService = require('../Services/Postservices');


const route = express.Router();

module.exports = class Posts {
    static async allPosts(req, res, next) {
        try {
            const postsDetails = await postService.GetPost();
            if (!postsDetails) {
                console.log("Data is not Present");
                res.status(404).send("Response error");
            } else {
                res.status(200).send(postsDetails);
            }
        } catch (error) {
            res.status(404).send({error : error});
        }
    }

    static async postById(req,res,next) {
        try {
            var Id = req.params.Id;
            const postsDetails = await postService.GetpostById(Id);
            if(!postsDetails) {
                console.log("Data Is not present");
                res.status(404).send("Response Error");
            }
            else {
                res.status(200).send(postsDetails);
            }
        } catch (error) {
            res.status(404).send({error : error});
        }
    }
};