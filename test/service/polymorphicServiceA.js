const test = require('ava');
const path = require('path');
require(path.join(process.cwd(), 'development.js'));

test('first test', t => {
    const serviceA = think.service('polymorphicServiceA');
    t.is(serviceA.sayHello(), "I am service A");
});