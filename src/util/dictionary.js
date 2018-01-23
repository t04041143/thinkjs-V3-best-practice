const fs = require('fs');

// 初始化全局字典
let dict = {};
let dictFileNameList = fs.readdirSync(`${think.ROOT_PATH}/dictionary`);
for (let fileName of dictFileNameList) {
    if (fileName.endsWith('.js')) {
        let dictKey = fileName.substring(0, fileName.indexOf('.'));
        dict[dictKey] = require(`${think.ROOT_PATH}/dictionary/${fileName}`);
    }
}

module.exports = dict;