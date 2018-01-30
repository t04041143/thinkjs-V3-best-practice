const test = require('ava');
const path = require('path');
require(path.join(process.cwd(), 'development.js'));

test('first test', t => {
    let controller = think.controller('captcha');
    t.is(1, 1);
});