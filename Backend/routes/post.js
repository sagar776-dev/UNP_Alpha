const { Route } = require("express");
const express = require("express");
const router = express.Router();


//Gives all the post avaliable
router.get("/", async (req, res) => {
  //connect with the database
  //create a read operation to get all the details
});


//Creates a new post
router.post("/", async (req, res) => {
    //connect with the database
    //create a write operation to add new post
  });
  



module.exports = router;