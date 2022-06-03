const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const registerSchema = Schema({
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
// const loginSchema = new mongoose.Schema({
//     Email : String,
//     Password : String,
// });

const MovieS =  Schema({
    name : String,
    genere : Array
});

module.exports = MovieSchema = mongoose.model("movie",MovieS);
module.exports.registerSchema = registerSchema;