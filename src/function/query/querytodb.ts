import dbquery from "./dbquery";
import findurl from "../../lib/findurl";

class querytodb {

    private static whereparams: String;
    private static qry: string;

    static async getMenu(request: any) {
        let resAppQuery = await querytodb.qrySelectToApp(request, "menu", "menu");
        let resHasil = await querytodb.dbQry(request, resAppQuery);
        return resHasil;
    }

    static async getFindUrl(request: any) {
        findurl.setParamURL(request.payload.url);
        let resAppQuery = await querytodb.qrySelectToApp(request, "find", "findURL");
        let resHasil = await querytodb.dbQry(request, resAppQuery);
        if (resHasil == "[]") resHasil = "false"
        else resHasil = "true";
        return resHasil;
    }

    private static async qrySelectToApp(req, param1, param2) {
        this.whereparams = "type_query = '" + param1 + "' AND nama_query = '" + param2 + "'";
        this.qry = "SELECT *  FROM myapp_admin.app_query_day WHERE " + this.whereparams + " LIMIT 1;";
        let resHasil = await req.app.db.query(this.qry);
        let dataJson = await JSON.parse(JSON.stringify(resHasil));
        // console.log(dataJson['0'].type_query, ' uyee');
        return dataJson;
    }

    private static async dbQry(req, resQry) {
        let storeData = dbquery.dbquerysdata(resQry);
        let resAkhir = await dbquery.qrySelectData(req);
        let dataJson = await JSON.stringify(resAkhir);
        return dataJson;
    }


}

export default querytodb;
