const { Route } = require("express");
const express = require("express");
const router = express.Router();
const Message =require('../model/Mongo/Message');


const getbyConversationid = async (id) => {
  try {
    const messages = await Message.find({
      conversationId: id,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
    }

const postMessage = async ()=>
{
  //new Message(req.body);
  const newMessage = JSON.parse(req.body);
  try {
    const savedMessage = await newMessage.save();
    return(JSON.stringify(savedMessage));
    //res.status(200).json(newMessage);
  } catch (err) {
    return(err);
  }
}


module.exports=
{
  getbyConversationid,
  postMessage
};