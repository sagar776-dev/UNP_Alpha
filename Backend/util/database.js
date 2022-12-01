const Sequelize = require('sequelize');
const dbconfig = require('../config/settings.json');


const sequelize = new Sequelize(dbconfig.mysqlConfig.database, dbconfig.mysqlConfig.username, dbconfig.mysqlConfig.password, {
    dialect: "mysql",
    host: dbconfig.mysqlConfig.host,
    port: dbconfig.mysqlConfig.port
})

module.exports = sequelize