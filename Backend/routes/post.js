const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");
const { getCurrentDate } = require("../util/helper");

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

  router.route("/generateics").get(async (req, res) => {
    const fs = require("fs");
    var currentdate = new Date();
    var date1= currentdate.toISOString().replace('-','').replace('-','').replace('.','').replace('.','').replace(':','').replace(':','').replace('Z','').substring(0,15); 
  //  var date1= +currentdate.getFullYear().toLocaleString()+ (currentdate.getMonth()+1).toLocaleString();
 const data='BEGIN:VCALENDAR\n'+
 'VERSION:2.0\n'+
 'BEGIN:VTIMEZONE\n'+
 'TZID:Europe/Berlin\n'+
 'X-LIC-LOCATION:Europe/Berlin\n'+
 'BEGIN:DAYLIGHT\n'+
 'TZNAME:CEST\n'+
 'DTSTART:'+date1+'\n'+  //19700329T020000
 'BEGIN:STANDARD\n'+
 'TZOFFSETFROM:+0200\n'+
 'TZOFFSETTO:+0100\n'+
 'TZNAME:CET\n'+
 'DTSTART:19701025T030000\n'+
 'RRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=10\n'+
 'END:STANDARD\n'+
 'END:VTIMEZONE\n'+
 'BEGIN:VEVENT\n';
// //'DTSTAMP:20140107T121503Z';\n'
fs.writeFile(__dirname +"/sample.ics", data, { flag: 'w' } ,(err) => {
   if (err) {console.log(err.message); throw err;}
   console.log("Completed!");
});

    res.sendFile(__dirname + "/sample.ics");
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
