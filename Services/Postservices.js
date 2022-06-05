const MovieSchema = require('../Schema/AuthSchema');
module.exports = class postService {
    static async GetPost() {
        try {
            const posts = MovieSchema.find();
            return posts;
        } catch (error) {
            console.log("Response not initiated");
        }
    }

    static async GetpostById(Id) {
        try {
            const posts = MovieSchema.findById(Id);
            return posts;
        } catch (error) {
            console.log("Response Not Initited");
        }
    }
    static async UpdatePost(data) {
        try {
            const result = MovieSchema.updateOne({_id : data.Id},{$set :{name : "New Updateed Name"}});
            console.log(result);
            return result;
        } catch (error) {
            console.log("Response Not Initited");
        }
    }
}