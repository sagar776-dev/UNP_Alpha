const config = require("../config/settings.json");
const jwt = require("jsonwebtoken");
const parent = require("../model/parent");

exports.validateUser = (req, res, next) => {
  //console.log(req.header);
  // const token = req.header("Authorization");
  // if (token) {
  //   jwt.verify(token, config.key, (err, decoded) => {
  //     if (err) {
  //       res.status(401);
  //       res.send("Invalid Token");
  //     } else {
  //       console.log(decoded, "at decoded");
  //       req.usr = decoded;
  //       next();
  //     }
  //   });
  // } else {
  //   res.send("No token");
  // }
  next();
};

exports.authorizeUser = (req, res, next) => {
  // let data = this.getDataFromToken(req.header("Authorization"));
  // let parentData = parent.findOne({ where: { username: data.username } });
  // if (!parentData.isEmailVerified) {
  //   res.send({ Error: "Please verify your Email" });
  // } else {
  //   next();
  // }
  next();
};

exports.getDataFromToken = (authToken) => {
  //console.log(req.header);
  //const token = req.header("Authorization");
  //console.log(jwt.decode(authToken));
  return jwt.decode(authToken);
};
