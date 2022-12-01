const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const conversationData = data.conversations;

router
   .route("/byusers/:id")
   .get(async (req, res) =>
   {
    try {
        // console.log("reached here in routes >>>>>>", req.params.id);
          let message = await conversationData.getConversationbyid(req.params.id);
          res.send({ message: message });
        } catch (error) {
          console.log(error);
          res.send({error: error});
        }
    })

router   
    .route("/")
    .post(async (req,res)=>{
      try{
        console.log("here");
        let message = await conversationData.postConversation(req.body.senderId, req.body.receiverId);
        res.send({message : message});
      }catch(err){
        console.log(err);
        res.send({error:err});
      }
    }
    )
   

module.exports = router;
