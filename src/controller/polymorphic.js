const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
    async getAction() {
        let serviceName = this.get('serviceName');
        let service = think.service(serviceName);

        this.success(service.sayHello());
    }
};