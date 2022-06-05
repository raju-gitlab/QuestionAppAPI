const { date } = require('joi');
const registerSchema = require('../Schema/AuthSchema');

module.exports = class AuthenticationService {
    static async LoginService() {
        try {
            const data = await registerSchema.findOne({ email: "" });
            if (data) {
                return data;
            }
            else {
                console.log("Data is not present");
            }
        } catch (error) {
            console.log("Error is : ", error);
        }
    }

    static async Register(params) {
        try {
            const model = registerSchema;
            const login = new model({
                UserName: params.UserName,
                Email: params.Email,
                Password: params.Password,
                PasswordSalt: params.PasswordSalt,
                Createdate: new Date(),
                Modifiedate: null,
                IsActive: params.IsActive,
                IsDeleted: params.IsDeleted,
                IsVerified: params.IsVerified
            });
            const result = login.save();
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}