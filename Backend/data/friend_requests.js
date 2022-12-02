const axios = require("axios");
const hash = require("crypto-js");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const sequelize = require("../util/database");

const userData = require("../data/registration");

const helper = require("../util/helper");
const validation = require("../util/validation");

const users = require("../model/users");
const kid = require("../model/kid");
const Parent = require("../model/parent");
const Relation = require("../model/relation");
const config = require("../config/settings.json");

const Sequelize = require("sequelize");

const { QueryTypes } = require("sequelize");

const sendRequest = async (request) => {
  let parentData = await Parent.findOne({where: { id: request.to }});
  console.log("Parent Data ",parentData.first_name);
  await Relation.create({
    from: request.from,
    to: request.to,
    status: "P",
    since: null,
    toName: parentData.first_name + " " + parentData.last_name,
    fromName: request.fromName,
  });

  let requestCreated = await Relation.findOne({
    where: { from: request.from, to: request.to },
  });
  if (!requestCreated) throw "Problem sending the friend request";
  return "Friend request sent successfully";
};

const acceptRequest = async (req) => {
  let request = await Relation.findOne({
    where: { from: req.from, to: req.to },
  });
  request.status = "A";
  request.since = helper.getCurrentDate();
  await request.save();
  return "Friend request accepted";
};

const rejectRequest = async (req) => {
  let request = await Relation.findOne({
    where: { from: req.from, to: req.to },
  });
  request.status = "R";
  request.since = null;
  await request.save();
  return "Friend request rejected";
};

const getAllRequests = async (id) => {
  let requests = await sequelize.query(
    `SELECT r.from, r.to, r.status, p.first_name, p.last_name, p.location, r.status FROM relation r, parent p
     where r.to = ${id} and p.id=r.from and r.status='P'`,
    { type: QueryTypes.SELECT }
  );
  
  return requests;
};

const getAllFriends = async (id) => {
  let res = [];
  let requests1 = await sequelize.query(
    `SELECT r.from, r.to, r.status, p.first_name, p.last_name, p.location, r.status FROM relation r, parent p
     where r.to = ${id} and p.id=r.to and r.status='A'`,
    { type: QueryTypes.SELECT }
  );
  let requests2 = await sequelize.query(
    `SELECT r.from, r.to, r.status, p.first_name, p.last_name, p.location, r.status FROM relation r, parent p
     where r.from = ${id} and p.id=r.from and r.status='A'`,
    { type: QueryTypes.SELECT }
  );
  res = res.concat(requests1)
  res = res.concat(requests2);
  return res;
};

const getAllParentsByLocation = async (location, email) => {
  let parent = await Parent.findOne({ where: { email: email } });
  let parents = await Parent.findAll({ where: { location: location } });
  let user = await Parent.findOne({ where: { email: email } });
  let friends = await getAllFriends(email);
  let requests = await getAllRequests(parent.id);

  for (let friend of friends) {
    if (friend.status === "P") {
      friend.status = "Pending";
    }
    if (friend.status === "A") {
      friend.status = "Accepted";
    }
    if (friend.status === "R") {
      friend.status = "Blocked";
    }
  }

  friendMap = {};
  for (let friend of friends) {
    friendMap["friend"];
  }

  // for (let parent of parents) {
  //   for (let request of requests) {
  //   }
  // }
  return { parents: parents, requests: requests };
};

module.exports = {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getAllRequests,
  getAllFriends,
  getAllParentsByLocation,
};
