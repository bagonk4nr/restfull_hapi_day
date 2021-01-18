import querytodb from './query/querytodb';

const getMenu = async (request, h) => {
    // console.log(request.params);
    const resultdb = await querytodb.getMenu(request);
    return resultdb;
};

export default getMenu;