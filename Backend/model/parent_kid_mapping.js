const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Parent_kid_mapping = sequelize.define("parent_kid_mapping", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    parent_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kid_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }   
}, {
    tableName: "parent_kid_mapping",
    timestamps: false
})

module.exports = Parent_kid_mapping;