module.exports = {
    failWith(error) {
        if (error.status) {
            this.status = error.status;
        } else {
            this.status = 500;
        }

        return this.fail(error.code, error.message || '', error.data || '');
    },
};