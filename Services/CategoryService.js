const CategorySchema = require('../Schema/CategorySchema');
const {ObjectId} = require('mongodb');

module.exports = class Category {
    static async GetCategories(params) {
        try {
            const result = await CategorySchema.findById(params.params.CategoryId).select(["listcategory"]);
            if (result) {
                return result;
            }
            else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    static async AddNewCategory(params) {
        try {
            const schema = CategorySchema;
            const model = new schema({
                CategoryName: params.categoryname,
                CreatedBy: params.userid,
                listcategory: [{_id: new ObjectId(), Name: params.name, ImagePath: params.imagepath, Subscribers: 0, Like: 0, Dislike : 0 }]
            });
            const result = await model.save();
            if (result) {
                return result;
            }
            else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    static async UpdateListItems(params) {
        try {
            console.log("COntrol Reached");
            const result = await CategorySchema.findById(params.categoryid);
            if (result) {
                result.listcategory.push({_id: new ObjectId() ,Name: params.name, ImagePath: params.imagepath , Subscribers: 0, Like: 0, Dislike : 0 });
                const status = await result.save();
                if (status) {
                    return status;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    static async UpdateListValues(params) { 

    } 
}