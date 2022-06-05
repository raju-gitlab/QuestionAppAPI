const { booleanParser } = require("config/parser");
const { string } = require("joi");
const { default: mongoose, Mongoose } = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Register = Schema({
    UserName : String,
    Email : String,
    Password : String,
    PasswordSalt : String,
    Createdate : Date,
    Modifiedate : Date,
    IsActive : Boolean,
    IsDeleted : Boolean,
    IsVerified : Boolean
});

const validateEmail = Schema({
    Email : String,
    IsDeleted : Boolean
})

const MovieS =  Schema({
    name : String,
    genere : Array
});

module.exports = MovieSchema = mongoose.model("movie",MovieS);
module.exports = registerSchema = mongoose.model("user",Register);