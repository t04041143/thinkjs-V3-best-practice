module.exports.instantiateCtx = (path) => {
    return {
        model: think.model,
        path: path,
        app: {
            modules: []
        },
        body: 'hello thinkjs',
        status: 404,
        ip: '10.10.10.10',
        ips: '10.10.10.10,11.11.11.11',
        module: '',
        method: 'GET',
        userAgent: 'test',
        referrer(onlyHost) {
            return onlyHost;
        },
        referer(onlyHost) {
            return onlyHost;
        },
        download() {
            return true;
        },
        type: 'text/html; charset=UTF-8',
        isGet: true,
        isPost: false,
        isCli: true,
        params: {name: 'thinkjs'},
        header: {
            accept: 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br'
        },
        res: {},
        redirect(url, alt) {
            return url;
        },
        set(name, value) {
            if (helper.isObject(name)) {
                this.header = Object.assign({}, this.header, name);
                return;
            }
            this.header[name] = value;
        },
        isMethod(method) {
            return method === this.method;
        },
        isAjax() {
            return true;
        },
        isJsonp(callback) {
            return callback;
        },
        json(str) {
            return JSON.parse(str);
        },
        jsonp(data, callback) {
            return data;
        },
        success(data, message) {
            return {
                errno: 0,
                data,
                errmsg: message || ''
            };
        },
        fail({errno, errmsg, data}) {
            return {errno, errmsg, data};
        },
        expires(time) {
            return time
        },
        param(name, value) {
            if (value) {
                this.params[name] = value;
                return value;
            }
            return this.params[name];
        },
        post(name, value) {
            return value
        },
        file(name, value) {
            return value
        },
        cookie(name, value) {
            return value
        }
    };
};