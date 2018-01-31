const test = require('ava');
const path = require('path');
require(path.join(process.cwd(), 'development.js'));

const utils = require(`${think.ROOT_PATH}/test/test_utils`);
const RestController = require(`${think.APP_PATH}/controller/rest`);
const controller = new RestController(utils.instantiateCtx('/captcha'));

test.serial('test controller', async t => {
    let captcha = await controller.action('captcha', 'post');

    t.not(captcha, null);
    t.not(captcha, 'undefined');
    t.not(captcha.data.value, null);
    t.regex(captcha.data.value, /^\d{6}$/);
});