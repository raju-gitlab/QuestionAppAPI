const _bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const registerSchema = require('../Schema/AuthSchema');
const validationSchema = require('../Schema/ValidationSchema');

module.exports = class AuthenticationService {

    static async GenerateOTP(params) {
        try {
            const key = new ObjectId();
            const isExists = this.validationSchema.findOne({"UserId" : params.Email});
            if(isExists) return false;

            const date = new Date();
            const schema = validationSchema;
            const model = new schema({
               UserId : params.Email,
               SecurityKey : key,
               CreatedTime : date,
               ValidationTill : date.setMinutes(date.getMinutes() + 10)
            });
            
            const response = await model.save();
            if(!response) return null;

            return key;
        } catch (error) {
            throw error;
        }
    }

    static async Getusernameslist(params) {
        try {
            const result = await registerSchema.find().select(["UserName", "_id"]);
            if(!result) return false;

            return true;            
        } catch (error) {
            throw error;
        }
    }

    static async ValidateUserEmail(params) {
        try {
            const result = await registerSchema.find({ "Email": params.params.Email });
            console.log(result);
            if (result.length != 0) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {

        }
    }

    static async ValidateAuthentication(params) {
        try {
            const result = await validationSchema.find({ "UserId": params.Email });
            if (result.length != 0) {
                if (result.SecurityKey == params.params.AuthKey) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else {
                return 0;
            }
        } catch (error) {
            throw error;
        }
    }

    static async LoginService(params) {
        try {
            const data = await registerSchema.findOne({ "Email": params.Email }).select(["Email", "Password"]);
            if (data.length != 0) {
                if (await _bcrypt.compare(params.Password, data.Password)) {
                    return data;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        } catch (error) {
            console.log("Error is : ", error);
        }
    }

    static async Register(params) {
        try {
            const PasswordSalt = await _bcrypt.genSalt(15);
            params.password = await _bcrypt.hash(params.password, PasswordSalt);
            const model = registerSchema;
            const login = new model({
                Name: params.name,
                Gender: params.gender,
                UserName: params.username,
                Email: params.email,
                Password: params.password,
                PasswordSalt: PasswordSalt,
                Createdate: new Date(),
                ContactNumber: params.phonenumber
            });
            const result = await login.save();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async ForgetPassword(params) {

    }
}