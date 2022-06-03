const express = require('express');
const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    UserName : String,
    Email : String,
    Password : String,
    PasswordSalt : String,
    Createdat : Date,
    Modifiedat : Date,
    IsActive : Boolean,
    IsDeleted : Boolean,
    IsVerified : Boolean
});
const loginSchema = new mongoose.Schema({
    Email : String,
    Password : String,
});


const sc = mongoose.model("SchemaName" , regSchema);