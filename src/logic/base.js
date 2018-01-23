const HttpException = require('../exception/http_exception');

module.exports = class extends think.Logic {
    __after() {
        super.__after();

        if (!think.isEmpty(this.validateErrors)) {
            think.logger.debug(this.validateErrors);
            return this.ctx.failWith(new HttpException(400, 1400, this.ctx.i18n.__("validateError.1400")))
        }
    }
};
