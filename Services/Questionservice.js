const QuestionSchema = require('../Schema/QuestionSchema');

module.exports = class QuestionServices {
    static async GetQuestions() {
        try {
            const result = await QuestionSchema.find();
            if (result) {
                return result;
            }
            else {
                return null;
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    static async PostQuestion(params) {
        try {
            const schema = QuestionSchema;
            const model = new schema({
                QuestionTitle: params.questiontitle,
                QuestionDescription: params.questiondescription,
                PostedBy: params.postedby,
                TotalView : 0
            });
            const result = await model.save();
            if (result) {
                return result;
            }
            else {
                return null
            }
        } catch (error) {
            console.log("error" + error);
        }
    }

    // static async Replies(params){
    //     const result = 
    // }
}