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
const pathfile_1 = require("../../lib/pathfile");
const keys_1 = require("../../lib/keys");
const headers_1 = require("../../lib/headers");
const findurl_1 = require("../../lib/findurl");
class dbquery {
    static dbquerysdata(resAppQuery) {
        // console.log(resAppQuery['0'].query1);
        if (resAppQuery['0'].jenis_query == "sp") {
            this._query1 = resAppQuery['0'].query1.split("@");
            if (resAppQuery['0'].typeresults != null && resAppQuery['0'].query1 != "")
                this._typeresults = resAppQuery['0'].typeresults;
            if (resAppQuery['0'].pathFile != null && resAppQuery['0'].query1 != "") {
                this._pathfile = resAppQuery['0'].pathFile.split(", ");
                if (this._pathfile.length > 1) {
                    pathfile_1.default.setPathFile(this._pathfile['0']);
                    pathfile_1.default.setPathFile1(this._pathfile['1']);
                }
            }
            if (resAppQuery['0'].passworduser != null && resAppQuery['0'].query1 != "")
                this._passdetail = resAppQuery['0'].passworduser;
        }
        else {
            this._querys = resAppQuery['0'].querys;
            if (resAppQuery['0'].query1 != null && resAppQuery['0'].query1 != "")
                this._query1 = resAppQuery['0'].query1.split("@");
            if (resAppQuery['0'].query2 != null && resAppQuery['0'].query1 != "")
                this._query2 = resAppQuery['0'].query2;
            if (resAppQuery['0'].tables != null && resAppQuery['0'].query1 != "")
                this._table = resAppQuery['0'].tables.split(", ");
            if (resAppQuery['0'].whereParams != null && resAppQuery['0'].query1 != "")
                this._whereParams = resAppQuery['0'].whereParams.split("@");
            if (resAppQuery['0'].joinParams != null && resAppQuery['0'].query1 != "")
                this._joinparams = resAppQuery['0'].joinParams.split(",");
            if (resAppQuery['0'].groupByParams != null && resAppQuery['0'].query1 != "")
                this._groupby = resAppQuery['0'].groupByParams;
            else
                this._groupby = "";
            if (resAppQuery['0'].orderByParams != null && resAppQuery['0'].query1 != "")
                this._orderby = resAppQuery['0'].orderByParams;
            else
                this._orderby = "";
            if (resAppQuery['0'].pathocr != null && resAppQuery['0'].query1 != "") {
                this._pathfileocr = resAppQuery['0'].pathocr;
                pathfile_1.default.setPathFileOCR(this._pathfileocr);
            }
            if (resAppQuery['0'].pathFile != null && resAppQuery['0'].query1 != "") {
                this._pathfile = resAppQuery['0'].pathFile.split(", ");
                if (this._pathfile.length > 1) {
                    pathfile_1.default.setPathFile(this._pathfile['0']);
                    pathfile_1.default.setPathFile1(this._pathfile['1']);
                }
            }
            if (resAppQuery['0'].headers != null && resAppQuery['0'].query1 != "") {
                this._header = resAppQuery['0'].headers.split("@");
                headers_1.default.setHeader(this._header);
            }
            if (resAppQuery['0'].keys != null && resAppQuery['0'].query1 != "") {
                this._keys = resAppQuery['0'].keys.split("@");
                keys_1.default.setKey(this._keys);
            }
            if (resAppQuery['0'].typeresults != null && resAppQuery['0'].query1 != "")
                this._typeresults = resAppQuery['0'].typeresults;
            if (resAppQuery['0'].type_query != null && resAppQuery['0'].query1 != "")
                this._typeqry = resAppQuery['0'].type_query;
            if (resAppQuery['0'].nama_query != null && resAppQuery['0'].query1 != "")
                this._namaqry = resAppQuery['0'].nama_query;
            if (!this._whereParams['0'].match(null) && this._whereParams['0'] != null && this._whereParams['0'] != "") {
                if (this._typeqry.match("find")) {
                    this._whereParams1 = this._whereParams['0'] + " = '" + findurl_1.default.getParamURL() + "' ";
                }
                else
                    this._whereParams1 = "";
            }
            else
                this._whereParams1 = "";
            if (resAppQuery['0'].dbname != null && resAppQuery['0'].dbname != "")
                this._dbname = resAppQuery['0'].dbname;
        }
    }
    static qrySelectData(req) {
        return __awaiter(this, void 0, void 0, function* () {
            this._qry = this._querys + this._dbname + this._table['0'];
            if (this._table.length > 1 && this._query1['1'] != "" && this._query1['1'] != null) {
                for (let i = 1; i < this._table.length; i++) {
                    this._qry += this._query1['0'] + this._table[i] + this._query1['1'] + this._joinparams[i - 1] + this._query1[2];
                }
            }
            this._qry += this._whereParams1;
            this._qry += this._groupby;
            this._qry += this._orderby;
            this._qry += " ;";
            return yield dbquery.toDB(req, this._qry, this._typeresults);
        });
    }
    static toDB(req, _qry, _typeresults) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(_qry);
            let resHasil = yield req.app.db.query(_qry);
            // console.log(resHasil, 'hasil akhir');
            return resHasil;
        });
    }
}
dbquery._query1 = [];
dbquery._pathfile = [];
dbquery._whereParams = [];
dbquery._table = [];
dbquery._joinparams = [];
dbquery._header = [];
dbquery._keys = [];
exports.default = dbquery;
//# sourceMappingURL=dbquery.js.map