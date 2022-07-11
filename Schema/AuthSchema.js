const { string } = require("joi");
const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Register = Schema({
    Name : String,
    UserName: String,
    Email: String,
    Gender : String,
    Password: String,
    PasswordSalt: String,
    Createdate: {
        type: Date,
        default: new Date()
    },
    Modifiedate: {
        type: Date,
        default: null
    },
    IsActive: {
        type: Boolean,
        default: true
    },
    IsDeleted: {
        type: Boolean,
        default: false
    },
    IsVerified: {
        type: Boolean,
        default: false
    },
    IsTwoFactorAuthEnabled : {
        type : Boolean,
        default: false
    },
    Bio: {
        type :String,
        default: null
    },
    ContactNumber: Number,
    RecoveryMail: {
        type: String,
        default: null
    },
    Background: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    Interests: {
        type: mongoose.Schema.Types.Array,
        default: null
    }
});

const validateEmail = Schema({
    Email: String,
    IsDeleted: Boolean
});

module.exports = registerSchema = mongoose.model("user", Register);