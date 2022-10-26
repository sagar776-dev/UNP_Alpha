const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Parent = sequelize.define("parent", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    location:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    distance:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    // phone:{
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    // age:{
    //     type: Sequelize.TINYINT,
    //     allowNull: false,
    // },
    // gender:{
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    // isEmailVerified:{
    //     type: Sequelize.BOOLEAN,
    //     allowNull: false,
    // },
    // userid:{
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    // }
    
}, {
    tableName: "post",
    timestamps: false
})

module.exports = Parent;