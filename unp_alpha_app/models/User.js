class Users {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
// const Users = ( {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     username:{
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     password:{
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     role:{
//         type: Sequelize.STRING,
//         allowNull: false,
//     }
// };

module.exports = Users