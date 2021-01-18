"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class dbserve {
    constructor() {
        this.dbcfg = () => {
            return this.cfg;
        };
    }
    static dbservecfg(host, user, password) {
        this.cfg = {
            host: host,
            user: user,
            password: password
        };
    }
}
exports.default = dbserve;
//# sourceMappingURL=dbserve.js.map