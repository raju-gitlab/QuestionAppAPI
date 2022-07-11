const { default: mongoose, Mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const Category = Schema ({
    CategoryName : String,
    CreatedOn : {
        type: Date,
        default: new Date()
    },
    CreatedBy : { 
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        // ref: 'AdminUser'
    },
    ModifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    ModifiedOn: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    Subscribed : Number,
    Like : Number,
    Dislike: Number,
    listcategory: mongoose.Schema.Types.Array
});

module.exports = ChatSchema = mongoose.model('Category', Category);