const { Route } = require("express");
const express = require("express");
const router = express.Router();
//const Message = require("../models/MongoDB/Message");
const data = require("../data/index");

const messageData = data.messages;

router
  .route("/byconversation/:id")
  .get(async (req, res) => {
    try {
        // console.log("reached here in routes >>>>>>", req.params.id);
          let message = await messageData.getbyConversationid(req.params.id);
          res.send({ message: message });
        } catch (error) {
          console.log(error);
          res.send({error: error});
        }
    })

  router.post("/", async (req, res) => {
    try{
        let message = await messageData.postMessage(req.body);
        res.send({ message: message });
    }
    catch(error)
    {
        res.send({error: error});
    }
  });

  module.exports = router;