const express = require('express');
const http = require('http');
const cors = require('cors');

const config = require('./config');


const app = express();
app.use(cors());


const routes = require('./routes/index.route');
app.use(routes);


const httpServer = http.createServer(app);
httpServer.listen(config.port);
console.log(`Server started at ${config.port}`);

module.exports = { app };