import querytodb from "./query/querytodb";

const getFindUrl = async (request, h) => {
    // console.log(request.payload.url, " payload");
    const resultdb = await querytodb.getFindUrl(request);
    // console.log(resultdb);
    return resultdb;
};

export default getFindUrl;
