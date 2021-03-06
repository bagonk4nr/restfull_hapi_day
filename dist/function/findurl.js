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
const querytodb_1 = require("./query/querytodb");
const getFindUrl = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(request.payload.url, " payload");
    const resultdb = yield querytodb_1.default.getFindUrl(request);
    // console.log(resultdb);
    return resultdb;
});
exports.default = getFindUrl;
//# sourceMappingURL=findurl.js.map