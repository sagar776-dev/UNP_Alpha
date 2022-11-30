const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const kidsData = data.kid;

router
  .route("/filters")
  .post(async (req, res) => {
    try {
      let message = await kidsData.serachKidByFilters(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({error: error});
    }
  })
  .get(async (req, res) => {
    res.status(404).json(e);
  });



module.exports = router;
