const { default: mongoose, Mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const Exception = Schema({
    ExceptionName : {
        type : String,
        require : true
    },
    ExceptionDescription: {
        type : String,
        require : true
    },
    OccurTime : {
        type : Date,
        default : new Date(),
        require : true
    },
    ModifiedTime : {
        type : Date,
        require : true
    },
    ModifiedBy : {
        type : mongoose.Schema.Types.ObjectId,
        require : true
    },
    IsSolved : Boolean,
    IsChecked : Boolean
})
module.exports = ExceptionSchema = mongoose.model("log",Exception);