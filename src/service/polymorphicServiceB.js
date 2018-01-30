module.exports = class extends think.Service {
    constructor() {
        super();
    }

    sayHello() {
        return "I am service B";
    }
};