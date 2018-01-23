class HttpException extends Error {
    constructor(status, code, message) {
        super();
        this.message = message;
        this.status = status;
        this.code = code || 0;
    }
}

module.exports = HttpException;