const path = require('path');
const isDev = think.env === 'development';

module.exports = [
    {
        handle: 'authorization',
        enable: isDev,
        options: {}
    },
    {
        handle: 'meta',
        options: {
            logRequest: isDev,
            sendResponseTime: isDev
        }
    },
    {
        handle: 'resource',
        enable: isDev,
        options: {
            root: path.join(think.ROOT_PATH, 'www'),
            publicPath: /^\/(static|favicon\.ico)/
        }
    },
    {
        handle: 'trace',
        enable: !think.isCli,
        options: {
            debug: isDev,
            contentType(ctx) {
                return ctx.accepts('application/json') ? 'json' : 'html';
            }
        }
    },
    {
        handle: 'payload',
        options: {}
    },
    {
        handle: 'router',
        options: {}
    },
    {
        handle: 'i18n',
        options: {
            // 这个是可以用的 directory: './web-server/src/config/locales',
            directory: `${__dirname}/locales`,
            extension: '.json',
            locales: ['zh-CN', 'en'], //  `zh-CN` defualtLocale, must match the locales to the filenames
            modes: [
                'header',
            ],
            devMode: false
        }
    },
    'logic',
    'controller',
];
