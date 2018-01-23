const BaseRest = require('./rest.js');

const captchaService = think.service('captcha');

module.exports = class extends BaseRest {
    async postAction() {
        let receiverType = this.post('receiverType');
        let receiverId = this.post('receiverId');
        let purpose = this.post('purpose');

        try {
            // 生成验证码
            let captcha = await captchaService.create({receiverType, receiverId, purpose});

            // 为了方便测试，如果不是生产环境，则返回校验码数值
            if (think.env !== 'production') {
                return this.success(captcha);
            }

            this.success();
        } catch (err) {
            return this.failWith(err);
        }
    }
};