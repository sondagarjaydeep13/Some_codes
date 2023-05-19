#! /usr/bin/env node

const Yarg = require('../src/yarg');

new Yarg({
    ignore: ['node_modules'],
}).start();
