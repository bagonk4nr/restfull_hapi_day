"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("@hapi/hapi");
const server = new hapi_1.Server({
    port: 3000,
    host: 'localhost'
});
exports.default = server;
//# sourceMappingURL=serve.js.map