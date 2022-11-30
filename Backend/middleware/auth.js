const { TIME } = require("sequelize");
const config = require("../config/settings.json");

exports.validateTimeForKidAccess = (req, res, next) => {
    //console.log(Date.now());
    let currentDate = new Date();
    console.log("hours ", currentDate.getHours());
    if(currentDate.getHours() >= 16){
        res.send({Error: "Account locked!! No screen time after 8!!"});
        return;
    } else{
        next();
    }
  };

  



