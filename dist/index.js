"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const serve_1 = require("./server/serve");
const routeapp_1 = require("./routes/routeapp");
const dbcon_1 = require("./config/dbcon");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    // Register
    yield serve_1.default.register(dbcon_1.default);
    // Route
    yield serve_1.default.route(routeapp_1.default);
    yield serve_1.default.start();
    console.log('Server running on %s', serve_1.default.info.uri);
});
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();
//# sourceMappingURL=index.js.map