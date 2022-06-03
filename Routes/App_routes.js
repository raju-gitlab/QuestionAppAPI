const express = require('express');
const getPosts = require('../APIs/HomeApis');
const getURL = require('../APIs/HomeApis');
const setData = require('../APIs/HomeApis');
const postcontrol = require('../APIs/HomeApis');
// const Auth = require('../APIs/Auth');

const routess = express.Router();

routess.get('/getPosts',postcontrol.allPosts);
routess.get('/getURL/:Id', postcontrol.postById);
routess.post('/setData', setData);
// routess.get('/Auth/Login', Auth);

module.exports = routess;