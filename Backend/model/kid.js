const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const kid = sequelize.define("kid", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    age:{
        type: Sequelize.TINYINT,
        allowNull: false,
    },
    gender:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    street:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    school:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    grade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    ethnicity:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    location:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    flag:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    userid:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    
},
{
    tableName: "kid",
    timestamps: false
})

module.exports = kid;