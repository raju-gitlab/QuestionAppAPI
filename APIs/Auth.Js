const AuthenticationService = require('../Services/Authservice');
const validateEmail = require('../Utilities/EmailValidator');

module.exports = class Authentication {
    static async Login(req, res, next) {
        try {
            const Loginresult = await AuthenticationService.LoginService();
            if (!Loginresult) {
                console.log("Result not fetched");
                res.status(400).send("Bad Request");
            }
            else {
                res.status(200).send(Loginresult);
            }
        } catch (error) {
            res.status(400).send("Error in Response", { error: error });
        }
    }

    static async Register(req, res, next) {
        try {
            if (await validateEmail.EmaliExintance(req.body)) {
                const Loginresult = await AuthenticationService.Register(req.body);
                if (!Loginresult) {
                    console.log("Result not fetched");
                    res.status(400).send("Bad Request");
                }
                else {
                    res.status(200).send(Loginresult);
                }
            }
            else {
                res.status(200).send("Email Already Registrated");
            }
        } catch (error) {
            res.status(400).send("Error in Response", { error: error });
        }
    }
}