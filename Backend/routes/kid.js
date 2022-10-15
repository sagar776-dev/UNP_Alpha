const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const kidsData = data.kid;

router
  .route("/filters")
  .get(async (req, res) => {
    try {
    console.log("reached here")
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
