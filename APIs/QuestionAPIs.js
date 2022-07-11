const QuestionService = require("../Services/Questionservice");

module.exports = class Question {
    static async GetAllQuestions(req, res, next) {
        console.log("Control Reached");
        try {
            const result = await QuestionService.GetQuestions();
            if (!result) {
                res.status(400).send("NOT");
            }
            else {
                res.status(200).send("OK");
            }
        } catch (error) {
            res.status(400).send({ error: error });
        }
    }
    static async PostQuestion(req, res, next) {
        try {
            const result = await QuestionService.PostQuestion(req.body);
            if (result) {
                res.status(200).send(result);
            }
            else {
                res.status(400).send("Bad Request");
            }
        } catch (error) {
            res.status(400).send({ error: error });
        }
    }
}