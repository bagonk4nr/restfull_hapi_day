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
const dbquery_1 = require("./dbquery");
const findurl_1 = require("../../lib/findurl");
class querytodb {
    static getMenu(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let resAppQuery = yield querytodb.qrySelectToApp(request, "menu", "menu");
            let resHasil = yield querytodb.dbQry(request, resAppQuery);
            return resHasil;
        });
    }
    static getFindUrl(request) {
        return __awaiter(this, void 0, void 0, function* () {
            findurl_1.default.setParamURL(request.payload.url);
            let resAppQuery = yield querytodb.qrySelectToApp(request, "find", "findURL");
            let resHasil = yield querytodb.dbQry(request, resAppQuery);
            if (resHasil == "[]")
                resHasil = "false";
            else
                resHasil = "true";
            return resHasil;
        });
    }
    static qrySelectToApp(req, param1, param2) {
        return __awaiter(this, void 0, void 0, function* () {
            this.whereparams = "type_query = '" + param1 + "' AND nama_query = '" + param2 + "'";
            this.qry = "SELECT *  FROM myapp_admin.app_query_day WHERE " + this.whereparams + " LIMIT 1;";
            let resHasil = yield req.app.db.query(this.qry);
            let dataJson = yield JSON.parse(JSON.stringify(resHasil));
            // console.log(dataJson['0'].type_query, ' uyee');
            return dataJson;
        });
    }
    static dbQry(req, resQry) {
        return __awaiter(this, void 0, void 0, function* () {
            let storeData = dbquery_1.default.dbquerysdata(resQry);
            let resAkhir = yield dbquery_1.default.qrySelectData(req);
            let dataJson = yield JSON.stringify(resAkhir);
            return dataJson;
        });
    }
}
exports.default = querytodb;
//# sourceMappingURL=querytodb.js.map