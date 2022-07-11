const express = require('express');
const postcontrol = require('../APIs/HomeApis');
const authControl = require('../APIs/Auth');
const QuestionControl = require('../APIs/QuestionAPIs');
const Chatcontrol = require('../APIs/ChatAPIs');
const CategoryControl = require('../APIs/CategoryAPIs');

const routess = express.Router();

routess.get('/getPosts',postcontrol.allPosts);
routess.get('/getURL/:Id', postcontrol.postById);
routess.post('/update', postcontrol.UpdateData);
routess.post('/Auth/login',authControl.Login);
routess.post('/Auth/Register',authControl.Register);
routess.get('/TestAPI', QuestionControl.GetAllQuestions);
routess.post('/TestPost',QuestionControl.PostQuestion);
routess.get('/allchats/:QuestionId', Chatcontrol.Getchats);
routess.post('/postnewChat', Chatcontrol.Postchat);
routess.post('/demo', Chatcontrol.demoAPI);
routess.get('/ListCategories/:CategoryId', CategoryControl.GetCategories);
routess.post('/AddNewCategory', CategoryControl.AddCategories);
routess.put('/UpdateCategory', CategoryControl.UpdateCategory);
routess.get('/Auth/Getusernames', authControl.Getusernames);
routess.get('/Auth/Validate/:Email', authControl.ValidateUser);
module.exports = routess;