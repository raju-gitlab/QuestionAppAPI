const express = require('express');
const ChatService = require('../Services/Chatservice');
const path = require('path');
const route = express.Router();

module.exports = class Chats {
    static async Getchats(req,res, next) { 
        try {
            const result = await ChatService.Replyservice(req);
            if(result) { 
                res.status(200).send(result);
            }
            else { 
                res.status(404).send(result);   
            }
        } catch (error) {
            res.status.send("Request NOt intiitated");
        }
    }

    static async Postchat(req, res, next) { 
        try {
            const result = await ChatService.NewChat(req.body);
            res.status(200).send(result);
        } catch (error) {
            res.status(404).send("Request NOt intiitated");
        }
    }

    static async demoAPI(req, res, next) { 
        try {
            console.log("New request fetched" );
            console.log(req.body);
            // const result = await ChatService.Demo(req.body);
            res.status(200).send(result);
        } catch (error) {
            res.status(404).send("Request NOt intiitated");
        }
    }
}