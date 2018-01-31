const test = require('ava');
const path = require('path');
require(path.join(process.cwd(), 'development.js'));


async function clearData(captchaKey) {
    let captchaInRedis = await think.mmdb.hgetall(captchaKey);

    if (!think.isEmpty(captchaInRedis)) {
        await think.mmdb.delete(captchaKey);
    }
}


test.serial('create captcha', async t => {
    let params = {receiverId: 1456789, purpose: 1};
    let captchaKey = `captcha:${params['receiverId']}_${params['purpose']}`;

    await clearData(captchaKey);

    const captchaService = think.service('captcha');

    let captcha = await captchaService.create({receiverId: params['receiverId'], purpose: params['purpose']});

    let captchaInRedis = await think.mmdb.hgetall(captchaKey);

    t.is(captcha.value, captchaInRedis.value);
    // TODO 有bug，数据类型问题 t.is(captcha.verified, captchaInRedis.verified);
});