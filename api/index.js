const jsonServer = require("json-server");
const { join } = require("path");
const server = jsonServer.create();

const dataPath = "../episodes.json";

const router = jsonServer.router(join(__dirname, dataPath));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

module.exports = server;
