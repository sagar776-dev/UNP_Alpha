const { Route } = require("express");
const express = require("express");
const { kid } = require("../data/index");
const router = express.Router();
const data = require("../data/index");

const parentsData = data.parents;
const kidsData = data.kid;

router
  .route("/location")
  .get(async (req, res) => {
    try {
      let message = await parentsData.serachParentByLocation(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({ error: error });
    }
  })
  .get(async (req, res) => {
    res.status(404).json(e);
  });

router.route("/location/all").get(async (req, res) => {
  try {
    console.log("reached here1");
    let message = await parentsData.serachAllParentByLocation(req.body);
    console.log("There is the message", message);
    res.send({ message: message });
  } catch (error) {
    res.send({ error: error });
  }
});

router.route("/sendemail").post(async (req, res) => {
  try {
    let data = req.body;
    let res = parentsData.sendEmail(data.mailId, data.subject, data.body);
    res.json({ message: "Email sent" });
  } catch (error) {
    res.send({ error: error });
  }
});

router.route("/getparent/:id").get(async (req, res) => {
  try {
    let result = await parentsData.serachParentById(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }
});

router.route("/updateparent/:id").post(async (req, res) => {
  try {
    let result = await parentsData.updateParentById(req.params.id, req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }
});

router.route("/getkids/:id").get(async (req, res) => {
  try {
    console.log("getkids");
    let result = await kidsData.getKids(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }
});

router.route("/updatekid/:id").post(async (req, res) => {
  try {
    let result = await kidsData.updateKidById(req.params.id, req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }
});

router.route("/lockkid/:id").get(async (req, res) => {
  try {
    let res = parentsData.lockKidAccount(req.params.id);
    res.json(res);
  } catch (e) {
    res.send({ error: e });
  }
});

router.route("/unlockkid/:id").get(async (req, res) => {
  try {
    let res = parentsData.unlockKidAccount(req.params.id);
    res.json(res);
  } catch (e) {
    res.send({ error: e });
  }
});

module.exports = router;
