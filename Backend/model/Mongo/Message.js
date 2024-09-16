const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
    flag: {
        type: Boolean,
      },
  },
  { timestamps: true }
);
const messages=mongoose.model("Message", MessageSchema);
module.exports = messages
