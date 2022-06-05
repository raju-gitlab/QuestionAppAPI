const express = require('express');
const postcontrol = require('../APIs/HomeApis');
const authControl = require('../APIs/Auth');
// const Auth = require('../APIs/Auth');

const routess = express.Router();

routess.get('/getPosts',postcontrol.allPosts);
routess.get('/getURL/:Id', postcontrol.postById);
routess.post('/update', postcontrol.UpdateData);
routess.get('/login',authControl.Login);
routess.post('/Register',authControl.Register);

module.exports = routess;