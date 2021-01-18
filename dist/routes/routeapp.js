"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = require("../function/menu");
const findurl_1 = require("../function/findurl");
const dataRoute = [
    { method: 'POST', path: '/menu', handler: menu_1.default },
    { method: 'POST', path: '/findurl', handler: findurl_1.default }
];
exports.default = dataRoute;
//# sourceMappingURL=routeapp.js.map