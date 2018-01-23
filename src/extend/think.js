const _ = require('lodash');
const moment = require('moment');
const Redis = require('../util/redis');
let redisIns = new Redis();
let dict = require('../util/dictionary');

module.exports = {
    _: _,
    moment: moment,
    mmdb: redisIns,
    dict: dict,
};