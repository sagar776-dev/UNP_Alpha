const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Message = sequelize.define("message", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sender:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    receiver:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
   
    
})

module.exports = Message;