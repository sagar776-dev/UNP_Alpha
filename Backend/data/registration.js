const axios = require("axios");
const hash = require("crypto-js");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const users = require("../model/users");
const parent = require("../model/parent");
const kid = require("../model/kid");
const parent_kid = require("../model/parent_kid_mapping");

const config = require("../config/settings.json");
const { post } = require("../routes/serach");
const Parent = require("../model/parent");
const Parent_kid_mapping = require("../model/parent_kid_mapping");

let registerParent = async (postData) => {
  console.log(postData);
  let user = await users.findOne({ where: { username: postData.email } });
  console.log(user);
  if (user !== null) {
    throw "Username " + postData.email + " already exists";
  }

  await users.create({
    username: postData.email,
    password: encryptAES(postData.password),
    role: "parent",
  });

  let userInserted = await users.findOne({
    where: { username: postData.email },
  });

  await parent.create({
    first_name: postData.first_name,
    last_name: postData.last_name,
    email: postData.email,
    phone: postData.phone,
    age: postData.age,
    gender: postData.gender,
    isEmailVerified: false,
    userid: userInserted.id,
  });

  return "Parent registered succussefully";
};

let registerKid = async (postData) => {
  console.log(postData);

  let user = await users.findOne({ where: { username: postData.username } });
  console.log(user);
  if (user !== null) {
    throw "Username " + postData.username + " already exists";
  }

  await users.create({
    username: postData.username,
    password: encryptAES(postData.password),
    role: "kid",
  });

  let userInserted = await users.findOne({
    where: { username: postData.username },
  });

  await kid.create({
    first_name: postData.first_name,
    last_name: postData.last_name,
    username: postData.username,
    age: postData.age,
    gender: postData.gender,
    userid: userInserted.id,
  });

  let kidInserted = await kid.findOne({
    where: { username: postData.username },
  });
  let parentInserted = await parent.findOne({
    where: { email: postData.email },
  });

  await Parent_kid_mapping.create({
    parent_id: parentInserted.id,
    kid_id: kidInserted.id,
  });

  return "Kid registered succussefully";
};

let login = async (postData) => {
  console.log(postData);

  let data = await users.findOne({ where: { username: postData.username } });
  let decryptedpassword = decryptAES(data.password);
  if (data === null) {
    throw "User does not exist";
  } else if (decryptedpassword !== postData.password) {
    throw "Invalid username/password";
  }
  let token;
  try {
     token = jwt.sign({ id: postData.username }, config.key.toString(), {
      expiresIn: 86400,
    });
  } catch (e) {
    console.log();
  }

  let message = {
    message: "Welcome " + postData.username + "!",
    username: postData.username,
    accessToken: token,
    role: data.role,
  };

  return message;
};

let viewParentById = async (id) => {
  let data = await parent.findOne({ where: { email: id } });
  return data;
};

let viewAllUsers = async () => {
  return await parent.findAll();
};

encryptAES = (text) => {
  return hash.AES.encrypt(text, config.key.toString()).toString();
};

decryptAES = (text) => {
  //console.log(hash.AES.decrypt(text, config.key.toString()).toString());
  return hash.AES.decrypt(text, config.key.toString()).toString(hash.enc.Utf8);
};

module.exports = {
  registerParent,
  registerKid,
  login,
  viewAllUsers,
  viewParentById,
};
