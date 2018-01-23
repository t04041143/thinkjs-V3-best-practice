// default config
module.exports = {
    workers: 1,
    errnoField: 'code',
    errmsgField: 'message',
    identity: {
        captcha: {
            expire: 1200 // 秒
        },
        accessToken: {
            secret: 'adsas89fv12', //签名用的秘钥
            expire: 18000 // 秒
        },
        uidStart: 10000000,
    },
    redis: {
        host: '127.0.0.1',
        port: 6379,
        password: '123456',
        timeout: 0,
        log_connect: true,
        db: 1
    },
};
