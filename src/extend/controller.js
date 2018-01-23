module.exports = {
    failWith(error) {
        return this.ctx.failWith(error);
    },

    success(data, message, status = 200) {
        this.ctx.status = status;
        return this.ctx.success(data, message);
    }
};