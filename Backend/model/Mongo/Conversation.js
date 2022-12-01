const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    flag:{
        type: Boolean
    }
  },
  { timestamps: true }
);
const conversations=mongoose.model("Conversation", ConversationSchema);
module.exports = conversations
