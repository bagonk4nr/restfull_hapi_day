import { Server } from "@hapi/hapi";

const server: Server = new Server(
    {
    port: 3000,
    host: 'localhost'
    }
);

export default server;