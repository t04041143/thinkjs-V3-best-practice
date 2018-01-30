const test = require('ava');
const path = require('path');
require(path.join(process.cwd(), 'development.js'));

test('first test', t => {
    const indexModel = think.model('index');
    t.is(indexModel.test(), 1);
});


// const test = require('ava');
// const path = require('path');
// require(path.join(process.cwd(), 'development.js'));
//
// test('first test', t => {
//     let controller = think.controller('captcha');
//     t.is(1, 1);
// });
