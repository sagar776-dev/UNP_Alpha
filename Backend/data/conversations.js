const { Route } = require("express");
const conversations = require('../model/Mongo/Conversation');

const getConversationbyid = async (id) => {
    try {
    //console.log("reached here in routes >>>>>>", id)
      //let message = await Conversation.serachKidByFilters(req.body);
      const conversation = await conversations.find({
        members: { $in: [id] },
        flag: false
      });

      r= conversation;//.filter(word => word.includes(a=>a.id===2));

      result= []
      for(var i in r)
      {        
        result.push({_id:i,members:data[i]});
      }
      
      return (result);
    } catch (error) {
      return(error);
    }
  };

  const postConversation = async (id,id2) => {
    const newConversation = new conversations({
      members: [id,id2],
      flag: false
    });
  console.log(newConversation);
    try {
      const savedConversation = await newConversation.save();
      return(savedConversation);
    } catch (err) {
      console.log(err);
      return(err);
    }



    // try {
    // //console.log("reached here in routes >>>>>>", id)
    //   //let message = await kidsData.serachKidByFilters(req.body);
    //     res1= {
    //     id:1,
    //     //profilePicture: "person/1.jpeg",
    //     username: "Safak Kocaoglu"
    //   };        
    //     res2= {
    //     id:2,
    //     //profilePicture: "person/1.jpeg",
    //     username: "Safak Kocaoglu"
    //   }; 
    //     res3= {
    //     id:3,
    //     //profilePicture: "person/1.jpeg",
    //     username: "Safak Kocaoglu"
    //   };
    //   res4= {
    //     id:4,
    //     //profilePicture: "person/1.jpeg",
    //     username: "Safak Kocaoglu"
    //   };
    //   data= [[res1,res2],[res2,res3],[res3,res4]];
    //   r= data;//.filter(word => word.includes(a=>a.id===2));
    //   // console.log(data);
    //   result= []
    //   for(var i in r)
    //   {        
    //     result.push({_id:i,members:data[i]});
    //   }
      
  };

module.exports = {
    getConversationbyid,
    postConversation
};
