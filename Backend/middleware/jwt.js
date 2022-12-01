const config = require("../config/settings.json");
const jwt = require("jsonwebtoken");
const parent = require("../model/parent");

exports.validateUser = (req, res, next) => {
  console.log(req.header);
  const token = req.header("Authorization");
  console.log("validate User ", token);
  if (token) {
    jwt.verify(token, config.key, (err, decoded) => {
      if (err) {
        res.status(401);
        res.json({ Error: "Invalid Token" });
        return;
      } else {
        console.log(decoded, "at decoded");
        req.usr = decoded;
      }
    });
  } else {
    res.json({ Error: "Invalid Token" });
    return;
  }
  next();
};

exports.authorizeUser = async (req, res, next) => {
  let data = await this.getDataFromToken(req.header("Authorization"));
  console.log(data);
  if (data.type === "parent") {
    let parentData = await parent.findOne({ where: { email: data.id } });
    console.log("authorize User ", parentData);
    if (!parentData.isEmailVerified) {
      res.json({ Error: "Please verify your Email" });
      return;
    }
  }
  next();
};

exports.getDataFromToken = (authToken) => {
  // console.log(req.header);
  // const token = req.header("Authorization");
  console.log(jwt.decode(authToken));
  return jwt.decode(authToken);
};
