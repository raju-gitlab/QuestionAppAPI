const _config = require('config');
const jsontoken = require('jsonwebtoken');
const { default: mongoose, Mongoose } = require('mongoose');
const AuthenticationService = require('../Services/Authservice');
const validateEmail = require('../Utilities/EmailValidator');

module.exports = class Authentication {

    static async Getusernames(req, res, next) {
        try {
            const listnames = await AuthenticationService.Getusernameslist();
            if (!listnames) {
                res.status(400).send("Bad Request");
            }
            else {
                res.status(200).send(listnames);
            }
        } catch (error) {
            res.status(400).send("error");
        }
    }

    static async ValidateUser(req, res, next) {
        try {
            const validate = await AuthenticationService.ValidateUserEmail(req);
            if (validate) {
                return res.status(200).send(true);
            }
            else {
                return res.status(200).send(false);
            }
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    static async Login(req, res, next) {
        try {
            const Loginresult = await AuthenticationService.LoginService(req.body);
            console.log(Loginresult);
            if (!Loginresult) {
                res.status(400).send("Bad Request");
            }
            else {
                console.log("Login Success");
                res.status(200).send(Loginresult);
            }
        } catch (error) {
            res.status(400).send("Error in Response", { error: error });
        }
    }

    static async Register(req, res, next) {
        try {
            const validate = await validateEmail.EmaliExintance(req.body);
            if (!validate) return res.status(400).send(validate);

            const login = await AuthenticationService.Register(req.body);
            if (!login) return res.status(400).send(false);

            const setOTP = await AuthenticationService.GenerateOTP(req.body.Email);
            if (!setOTP) return false;

            const token = jsontoken.sign({ "_id": Loginresult._id, "Email": req.body.email }, _config.get("jwtPrivateKey"));
            res.header('x-auth-token', token).status(200).send(token);

        } catch (error) {
            res.status(400).send("Error in Response", { error: error });
        }
    }
}