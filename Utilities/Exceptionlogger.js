const ExceptionSchema = require('../Utilities/Exceptionlogger.js');

module.exports = class ExceptionLog {
    static async LogException(params) {
        try {
            const model = ExceptionSchema;
            const exception = new model({
                ExceptionName: params.ExceptionName
            });
            const result = exception.save();
        } catch (error) {
            console.log(error);
        }
    }
}