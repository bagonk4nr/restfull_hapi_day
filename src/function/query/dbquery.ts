import pathfile from '../../lib/pathfile';
import keys from '../../lib/keys';
import headers from "../../lib/headers";
import findurl from "../../lib/findurl";

class dbquery {

    private static _query2: any;
    private static _querys: any;
    private static _query1: any[] = [];
    private static _typeresults: any;
    private static _pathfile: any[] = [];
    private static _passdetail: any;
    private static _whereParams: string[] = [];
    private static _whereParams1: string;
    private static _table: any[] = [];
    private static _joinparams: any[] = [];
    private static _orderby: any;
    private static _pathfileocr: any;
    private static _groupby: string;
    private static _header: any[] = [];
    private static _keys: any[] = [];
    private static _typeqry: any;
    private static _namaqry: any;
    private static _qry: any;
    private static _dbname: any;

    static dbquerysdata(resAppQuery: string) {

        // console.log(resAppQuery['0'].query1);

        if(resAppQuery['0'].jenis_query == "sp") {

            this._query1 = resAppQuery['0'].query1.split("@");

            if(resAppQuery['0'].typeresults != null && resAppQuery['0'].query1 != "")
                this._typeresults = resAppQuery['0'].typeresults;

            if( resAppQuery['0'].pathFile != null && resAppQuery['0'].query1 != "") {
                this._pathfile = resAppQuery['0'].pathFile.split(", ");
                if(this._pathfile.length > 1) {
                    pathfile.setPathFile(this._pathfile['0']);
                    pathfile.setPathFile1(this._pathfile['1']);
                }
            }

            if( resAppQuery['0'].passworduser != null && resAppQuery['0'].query1 != "")
                this._passdetail = resAppQuery['0'].passworduser;

        } else {

            this._querys = resAppQuery['0'].querys;

            if(resAppQuery['0'].query1 != null && resAppQuery['0'].query1 != "")
                this._query1 = resAppQuery['0'].query1.split("@");


            if( resAppQuery['0'].query2 != null && resAppQuery['0'].query1 != "")
                this._query2 = resAppQuery['0'].query2;

            if( resAppQuery['0'].tables != null && resAppQuery['0'].query1 != "")
                this._table = resAppQuery['0'].tables.split(", ");

            if( resAppQuery['0'].whereParams != null && resAppQuery['0'].query1 != "")
                this._whereParams = resAppQuery['0'].whereParams.split("@");


            if( resAppQuery['0'].joinParams != null && resAppQuery['0'].query1 != "")
                this._joinparams = resAppQuery['0'].joinParams.split(",");

            if( resAppQuery['0'].groupByParams != null && resAppQuery['0'].query1 != "")
                this._groupby = resAppQuery['0'].groupByParams;
            else this._groupby ="";

            if( resAppQuery['0'].orderByParams != null && resAppQuery['0'].query1 != "")
                this._orderby = resAppQuery['0'].orderByParams;
            else this._orderby ="";

            if( resAppQuery['0'].pathocr != null && resAppQuery['0'].query1 != "") {
                this._pathfileocr = resAppQuery['0'].pathocr;
                pathfile.setPathFileOCR(this._pathfileocr);
            }

            if( resAppQuery['0'].pathFile != null && resAppQuery['0'].query1 != "") {
                this._pathfile = resAppQuery['0'].pathFile.split(", ");
                if(this._pathfile.length > 1) {
                    pathfile.setPathFile(this._pathfile['0']);
                    pathfile.setPathFile1(this._pathfile['1']);
                }
            }

            if( resAppQuery['0'].headers != null && resAppQuery['0'].query1 != "") {
                this._header = resAppQuery['0'].headers.split("@");
                headers.setHeader(this._header);
            }

            if( resAppQuery['0'].keys != null && resAppQuery['0'].query1 != "") {
                this._keys = resAppQuery['0'].keys.split("@");
                keys.setKey(this._keys);
            }

            if( resAppQuery['0'].typeresults != null && resAppQuery['0'].query1 != "")
                this._typeresults = resAppQuery['0'].typeresults;

            if(resAppQuery['0'].type_query != null && resAppQuery['0'].query1 != "")
                this._typeqry = resAppQuery['0'].type_query;

            if(resAppQuery['0'].nama_query != null && resAppQuery['0'].query1 != "")
                this._namaqry = resAppQuery['0'].nama_query;

            if( !this._whereParams['0'].match(null) && this._whereParams['0'] != null && this._whereParams['0'] != "") {
                if(this._typeqry.match("find")){
                    this._whereParams1 =  this._whereParams['0'] + " = '" + findurl.getParamURL() + "' " ;

                }else this._whereParams1 = "";
            }else this._whereParams1 = "";

            if(resAppQuery['0'].dbname != null && resAppQuery['0'].dbname != "")
                this._dbname = resAppQuery['0'].dbname;

        }
    }

    static async qrySelectData(req) {
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

        return await dbquery.toDB(req, this._qry, this._typeresults);
    }

    private static async toDB(req, _qry: any, _typeresults: any) {
        // console.log(_qry);
        let resHasil = await req.app.db.query(_qry);
        // console.log(resHasil, 'hasil akhir');
        return resHasil;
    }
}

export default dbquery;
