import getMenu from "../function/menu";
import getFindUrl from "../function/findurl";
import {ServerRoute} from "@hapi/hapi";

const dataRoute: ServerRoute[] = [
    { method: 'POST', path: '/menu', handler: getMenu },
    { method: 'POST', path: '/findurl', handler: getFindUrl }
];

export default dataRoute;
