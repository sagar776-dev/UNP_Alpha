const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Relation = sequelize.define("relation", {
    from: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    to:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    since:{
        type: Sequelize.STRING,
        allowNull: true,
    }
}, 
{
    tableName: "relation",
    timestamps: false
})

module.exports = Relation;