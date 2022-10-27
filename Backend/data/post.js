const axios = require("axios");
const hash = require("crypto-js");

const users = require('../model/users');
const parent = require('../model/parent');
const kid = require('../model/kid');
const parent_kid = require('../model/parent_kid_mapping');

const config = require('../config/settings.json');
// const { post } = require("../routes/serach");
const Parent = require("../model/parent");
const Parent_kid_mapping = require("../model/parent_kid_mapping");




let registerParent = async (postData) => {
  console.log(postData);
  let user = await users.findOne({ where: { username: postData.email } });
  console.log(user);
  if(user !== null){
    throw "Username "+postData.email+" already exists";
  }

  await users.create({
    username: postData.email,
    password: postData.password
  })

  let userInserted = await users.findOne({ where: { username: postData.email } });

  await parent.create({
   first_name: postData.first_name,
   last_name: postData.last_name,
   email:  postData.email,
   phone: postData.phone,
   age: postData.age,
   gender: postData.gender,
   isEmailVerified: false,
   userid: userInserted.id
  })

  return "Parent registered succussefully";
};



let registerKid = async (postData) => {
  console.log(postData);

  let user = await users.findOne({ where: { username: postData.username } });
  console.log(user);
  if(user !== null){
    throw "Username "+postData.username+" already exists";
  }

  await users.create({
    username: postData.username,
    password: postData.password
  })

  let userInserted = await users.findOne({ where: { username: postData.username } });

  await kid.create({
   first_name: postData.first_name,
   last_name: postData.last_name,
   username: postData.username,
   age: postData.age,
   gender: postData.gender,
   userid: userInserted.id
  })

  let kidInserted = await kid.findOne({ where: { username: postData.username } });
  let parentInserted = await parent.findOne({ where: { email: postData.email } });

  await Parent_kid_mapping.create({
    parent_id: parentInserted.id,
    kid_id: kidInserted.id
  })

  return "Kid registered succussefully";
};

let login = async (postData) => {
  console.log(postData);

  let data = await users.findOne({ where: { username: postData.username } });

  if(data === null){
    throw "User does not exist";
  } else if(data.password !== postData.password){
    throw "Invalid password";
  }

  return "Welcome "+postData.username+"!";
};

let viewParentById = (id) =>{
  let data = parent.findOne({ where: { email: id } });
  return data;
}

let viewAllUsers = () =>{
  return parent.findAll();
}

encryptAES = (text) => {
  return hash.AES.encrypt(text, config.key).toString();
};

module.exports = {
  registerParent,
  registerKid,
  login,
  viewAllUsers,
  viewParentById
};
