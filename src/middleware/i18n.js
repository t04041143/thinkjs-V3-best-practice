/**
 * 由于koa-i18n的handle的入参刚好和标准的koa中间件如参反了，所以包一层
 */

const locale = require('koa-locale');
const i18n = require('koa-i18n');

module.exports = (options, app) => {
    locale(app, 'zh-CN');
    app.use(i18n(app, options));

    return (ctx, next) => {
        return next();
    };
};