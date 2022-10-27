const axios = require("axios");
const hash = require("crypto-js");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const userData = require("../data/registration");

const helper = require('../util/helper');
const validation = require('../util/validation');

const users = require("../model/users");
const kid = require("../model/kid");
const Parent = require("../model/parent");
const Relation = require("../model/relation");
const config = require("../config/settings.json");
// const { post } = require("../routes/serach");

const sendRequest = async (fromId, toId) => {
  await Relation.create({
    from: fromId,
    to: toId,
    status: "P",
    since: null,
  });

  let requestCreated = await Relation.findOne({
    where: { from: fromId, to: toId },
  });
  if (!requestCreated) throw "Problem sending the friend request";
  return "Friend request sent successfully";
};

const acceptRequest = async (fromId, toId) => {
  await Relation.create({
    from: fromId,
    to: toId,
    status: "A",
    since: helper.getCurrentDate(),
  });

  let requestCreated = await Relation.findOne({
    where: { from: fromId, to: toId },
  });
  if (!requestCreated) throw "Problem sending the friend request";
  return "Friend request sent successfully";
};

const rejectRequest = async (fromId, toId) => {};

const getAllRequests = async (email) => {
  const parentInfo = await userData.viewParentById(email);
  let requests = await Relation.findAll({ where: { location: location } });
  return requests;
};

const getAllFriends = async (email) => {
  const parentInfo = await userData.viewParentById(email);
  let requests = await Relation.findAll({ where: { location: location } });
  return requests;
};

const getAllParentsByLocation = async (location) => {
  let parents = await Parent.findAll({ where: { location: location } });
  return parents;
};

module.exports = {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getAllRequests,
  getAllFriends,
  getAllParentsByLocation,
};
