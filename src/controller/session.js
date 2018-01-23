const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
    async postAction() {
        let a = this.ctx.i18n.__('hello');
        this.success(a);
    }
};