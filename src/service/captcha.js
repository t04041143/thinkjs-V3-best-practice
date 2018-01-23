module.exports = class extends think.Service {
    constructor() {
        super();
    }

    async create(params) {
        // 组合校验码在缓存中的索引key值
        let cacheKey = `captcha:${params['receiverId']}_${params['purpose']}`;

        // 在缓存中查询校验码
        let captcha = await think.mmdb.hgetall(cacheKey);

        // 如果校验码不存在，则产生新的校验码并存储到缓存
        if (think.isEmpty(captcha)) {
            // 生成随机校验码
            captcha = {
                value: String(think._.random(100000, 999999)),
                verified: false
            };
            // 构造校验码信息
            // 将校验码信息写入缓存
            await think.mmdb.hmset(cacheKey, captcha, think.config('identity.captcha').expire);
        }

        // // TODO 发送校验码 messager[params['receiverType']].sendCaptcha(params['receiverId'], captcha);

        return captcha;
    }
};