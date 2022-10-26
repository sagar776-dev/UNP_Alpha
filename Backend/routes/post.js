const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const registrationData = data.registration;

router
  .route("/post/search")
  .post(async (req, res) => {
    try {
      let message = await registrationData.registerParent(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({error: error});
    }
  })
  .get(async (req, res) => {
    res.status(404).json(e);
  });

  router
  .route("/signup/kid")
  .post(async (req, res) => {
    try {
      let message = await registrationData.registerKid(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({error: error});
    }
  })
  .get(async (req, res) => {
    res.status(404).json(e);
  });


  

router.route("/getAllUsers").get(async (req, res) => {
  let data = await registrationData.viewAllUsers();
  res.send(data);
});

// router.route("/getParentById/:id").get(async (req, res) => {
//   let data = await registrationData.viewParentById(req.params.id);
//   res.send(data);
// });

//Creates a new post
router.post("/login", async (req, res) => {});

module.exports = router;
