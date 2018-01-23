const assert = require('assert');

module.exports = class extends think.Controller {
    static get _REST() {
        return true;
    }

    constructor(ctx) {
        super(ctx);
        this.resource = this.getResource();
        this.id = this.getId();
        assert(think.isFunction(this.model), 'this.model must be a function');
        this.modelInstance = this.model(this.resource);
    }

    __before() {
    }

    /**
     * get resource
     * @return {String} [resource name]
     */
    getResource() {
        return this.ctx.controller;
    }

    getId() {
        const id = this.get('id');
        if (id && (think.isString(id) || think.isNumber(id))) {
            return id;
        }
        const last = this.ctx.path.split('/').slice(-1)[0];
        if (last !== this.resource) {
            return last;
        }
        return '';
    }

    async getAction() {
        let data;
        if (this.id) {
            const pk = this.modelInstance.pk;
            data = await this.modelInstance.where({[pk]: this.id}).find();
            return this.success(data);
        }
        data = await this.modelInstance.select();
        return this.success(data);
    }

    /**
     * put resource
     * @return {Promise} []
     */
    async postAction() {
        const pk = this.modelInstance.pk;
        const data = this.post();
        delete data[pk];
        if (think.isEmpty(data)) {
            return this.fail('data is empty');
        }
        const insertId = await this.modelInstance.add(data);
        return this.success({id: insertId});
    }

    /**
     * delete resource
     * @return {Promise} []
     */
    async deleteAction() {
        if (!this.id) {
            return this.fail('params error');
        }
        const pk = this.modelInstance.pk;
        const rows = await this.modelInstance.where({[pk]: this.id}).delete();
        return this.success({affectedRows: rows});
    }

    /**
     * update resource
     * @return {Promise} []
     */
    async putAction() {
        if (!this.id) {
            return this.fail('params error');
        }
        const pk = this.modelInstance.pk;
        const data = this.post();
        delete data[pk];
        if (think.isEmpty(data)) {
            return this.fail('data is empty');
        }
        const rows = await this.modelInstance.where({[pk]: this.id}).update(data);
        return this.success({affectedRows: rows});
    }

    __call() {
    }
};