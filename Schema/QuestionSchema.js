const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const comments = Schema({
    Comment: String,
    CommentBy: mongoose.Schema.Types.ObjectId,
    Like: Number,
    Dislike: Number,
    PostedOn: {
        type: Date,
        default: new Date()
    },
    Replies:[]
});

const Question = Schema({
    QuestionTitle : {
        type: String,
        require: true,
        trim: true
    },
    QuestionDescription : {
        type: String,
        require: true,
        trim: true
    },
    PostedBy : {
        type: mongoose.Schema.Types.ObjectId,
        require : true
    },
    PostedOn : {
        type : Date,
        require : true,
        default: new Date()
    },
    ModifiedOn : {
        type: Date,
        default: null
    },
    ImagePath : {
        type: String,
        default: null
    },
    TotalView: Number,
    Isdeleted: {type: Boolean, default: false},
    Ishidden : {type: Boolean, default: false},
    IsModified : {type: Number, default: false},
    Reports : {type : mongoose.Schema.Types.Array},
    Likes: {type : Number, require: true,default:0},
    Dislikes: {type: Number, require: false,default: 0}
});



module.exports = QuestionSchema = mongoose.model('question',Question);
// module.exports =  = mongoose.model('question',comments);