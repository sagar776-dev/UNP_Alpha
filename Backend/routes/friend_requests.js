const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const jwt = require("../middleware/jwt");

const relationsData = data.relation;

router.route("/getAllRequests/:id").get(async (req, res) => {
  try {
    let id = req.params.id;
    let requests = await relationsData.getAllRequests(id);
    res.json({ requests: requests });
  } catch (error) {
    res.status(404).send({ error: error });
  }
});

router.route("/getAllFriends/:email").get(async (req, res) => {
  try {
    let email = req.params.email;
    let requests = await relationsData.getAllFriends(email);
    res.json({ requests: requests });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error });
  }
});

router.route("/getParentsNearby/:location&:email").get(async (req, res) => {
  try {
    console.log(req.params.location + " " + req.params.email);
    let jwtData = jwt.getDataFromToken(req);
    let result = await relationsData.getAllParentsByLocation(
      req.params.location,
      jwtData.id
    );
    let friends = await relationsData.getAllFriends(req.params.email);
    result.friends = friends;
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error });
  }
});

router.route("/sendRequest").post(async (req, res) => {
  try {
    let requestInfo = await relationsData.sendRequest(req.body);
    res.json({ message: requestInfo });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
});

router.route("/acceptRequest").post(async (req, res) => {
  try {
    let requestInfo = await relationsData.acceptRequest(req.body);
    res.json({ message: requestInfo });
    return;
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router.route("/rejectRequest").post(async (req, res) => {
  try {
    let requestInfo = await relationsData.rejectRequest(req.body);
    res.json({ message: requestInfo });
    return;
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

module.exports = router;
