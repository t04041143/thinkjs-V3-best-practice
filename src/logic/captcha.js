const Base = require('./base');

module.exports = class extends Base {
    postAction() {
        this.rules = {
            receiverType: {required: true, string: true, in: Object.keys(think.dict.captcha.receiverType)},
            receiverId: {required: true, string: true, receiverValid: true},
            purpose: {required: true, string: true, in: think.dict.captcha.purpose}
        };
    }
};