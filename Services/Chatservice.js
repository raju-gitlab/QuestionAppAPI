const { default: mongoose } = require('mongoose');
const ChatSchema = require('../Schema/ChatSchema');
const ExceptionlogSchema = require('../Schema/ExceptionlogSchema');

const repliesSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true
    },
    Comment: mongoose.Schema.Types.String,
    replies: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = class ChatService {
    static async Replyservice(params) {
        try {
            console.log(params.params.QuestionId);
            return "ok";
            // const Result = await ChatSchema.findById(params);
            // if(!Result) {
            //     return null;
            // }
            // else {
            //     return Result;
            // }
        } catch (error) {
            throw error;
        }
    }

    /**
     * API for add new parent Comments for each Posts`  
     * @param {*UserId , QuestionId} params 
     * @returns 
     */
    static async NewChat(params) {

        try {
            const search = await ChatSchema.findOne({ QuestionId: params.QuestionId });
            console.log(search);
            if (!search) {
                const Schema = ChatSchema;
                const model = new Schema({
                    QuestionId: params.QuestionId,
                    TotalReplies :  1,
                    replies: [{UserId : params.UserId, Comment: params.Comment,like : 0, dislike : 0,CommentDate : new Date() ,replies:[]}]
                });
                const result = await model.save();
                if (result) {
                    return result;
                }
                else {
                    return null;
                }
            }
            else {
                console.log("Request Reached");
                search.TotalReplies = search.TotalReplies + 1;
                search.replies.push({UserId : params.UserId, Comment: params.Comment,like : 0, dislike : 0,CommentDate : new Date() ,replies:[]});
                search.save();
            }

        } catch {
            throw error;
        }
    }

    static async Demo(params) {
        return null;
    }
}