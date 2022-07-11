const { default: mongoose, Mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const Chat = Schema({
    QuestionId : {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    like :  {
        type : Number,
        default : 0,
    },
    dislike : {
        type : Number,
        default : 0
    },
    TotalReplies : {
        type: Number,
        default : 0
    },
    
    replies : {
        type : mongoose.Schema.Types.Array
    }
});

module.exports = ChatSchema = mongoose.model('Chat', Chat);