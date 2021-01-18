import { Request, ResponseToolkit } from "@hapi/hapi";
import server from "./server/serve";

import dataRoute from "./routes/routeapp";
import dbcon from "./config/dbcon";

const init = async () => {
    // Register
    await server.register(dbcon);

    // Route
    await server.route(dataRoute);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
