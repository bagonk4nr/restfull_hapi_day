"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("hapi-plugin-mysql");
const dbcon = {
    plugin: mysql,
    options: {
        host: 'localhost',
        user: 'root',
        password: '123456789'
    }
};
exports.default = dbcon;
//# sourceMappingURL=dbcon.js.map