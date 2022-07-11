const registerSchema = require('../Schema/AuthSchema');

module.exports = class validateEmail {
    static async EmaliExintance(params) {
        console.log("Control Reached", params.email);
        try {
            const result = await registerSchema.findOne({Email : params.email});
            if(!result) {
                return true;
            }             
            else {
                return false;
            }
        } catch (error) {
            console.log("Response not iNitiated");
        }
    }
}