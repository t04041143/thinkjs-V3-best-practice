const jwt = require("jsonwebtoken");

module.exports = (options, app) => {
    return (ctx, next) => {
        let token = ctx.headers['authorization'];
        if (!think.isEmpty(token)) {
            try {
                let decoded = jwt.verify(token, think.config('identity.accessToken').secret);
                ctx.header('x-uid', decoded['uid']);
            } catch (err) {
                ctx.status = 401;
                return ctx.fail(401, 1401);
            }
        }

        return next();
    }
};