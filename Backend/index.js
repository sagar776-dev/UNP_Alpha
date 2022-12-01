const express = require("express");
const http = require("http");
const cors = require("cors");

const config = require("./config");
const dbconfig = require("./config/settings.json");

const sequelize = require("./util/database");
const users = require("./model/parent");
const mongod = require("./util/mongodb");

const configRoutes = require('./routes/index.route');

const app = express();
app.use(express.json());

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

app.use(cors());

configRoutes(app);

console.log(dbconfig);

const httpServer = http.createServer(app);
httpServer.listen(config.port);
console.log(`Server started at ${config.port}`);

module.exports = { app };
