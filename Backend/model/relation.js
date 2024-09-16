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
    },
    since:{
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    fromName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    toName:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, 
{
    tableName: "relation",
    timestamps: false
});

module.exports = Relation;