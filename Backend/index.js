const express = require("express");
const http = require("http");
const cors = require("cors");

const config = require("./config");

const dbconfig = require("./config/settings.json");

var mysql = require("mysql");

const app = express();
app.use(cors());

const routes = require("./routes/index.route");
app.use(routes);

console.log(dbconfig);

const httpServer = http.createServer(app);
httpServer.listen(config.port);
console.log(`Server started at ${config.port}`);

var con = mysql.createConnection({
  host: dbconfig.mysqlConfig.host,
  user: dbconfig.mysqlConfig.username,
  password: dbconfig.mysqlConfig.password,
  database: dbconfig.mysqlConfig.database,
  port: 3307
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  if (err) throw err;
  con.query("SELECT * FROM parent", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});

module.exports = { app };
