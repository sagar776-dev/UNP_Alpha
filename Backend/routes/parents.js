const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const parentsData = data.parents;

router
  .route("/location")
  .get(async (req, res) => {
    try {
      let message = await parentsData.serachParentByLocation(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({error: error});
    }
  })

  router
  .route("/location/all")
  .get(async (req, res) => {
    try {
      // console.log('reached here1')
      let message = await parentsData.serachAllParentByLocation(req.body);
      // console.log("There is the message", message)
      res.send({ message: message });
    } catch (error) {
      res.send({error: error});
    }
  });
//  .get(async (req, res) => {
//    res.status(404).json(e);
//  });


router
  .route("/sendemail")
  .post(async (req, res) => {
    try {
      let data = req.body;
      let res = parentsData.sendEmail(data.mailId, data.subject, data.body);
      res.json({"message": "Email sent"});
    } catch (error) {
      res.send({error: error});
    }
  });


module.exports = router;
