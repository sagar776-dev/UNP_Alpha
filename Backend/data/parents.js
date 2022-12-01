const axios = require("axios");
const parent = require('../model/parent');



const serachParentByLocation = async (postData) => {
  try {
    let parentInfo = await parent.findOne({ where: { location: postData.location } });
    if (!parentInfo) throw 'Could not find parent of that location!'
    return parentInfo
  } catch (error) {
    return error
  }
};

const serachAllParentByLocation = async (postData) => {
  try {
    console.log("reached here123 ", postData)
    let parentInfo = await parent.findAll({ where: { location: postData.location } });
    console.log("parentsInfo", parentInfo)
    if (!parentInfo) throw 'Could not find parent of that location!'
    return parentInfo
  } catch (error) {
    return error
  }
};
const sendEmail = async (emailId, subject, body) => {
  mailOptions.subject = subject;
  mailOptions.text = body;
  mailOptions.to = emailId;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.mail.yahoo.com",
    // port: 465,
    // secure: false,
    auth: {
      user: "alphaunp@gmail.com",
      pass: "vafjjfdkkzhialba",
    },
  });
  let res = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const verifyEmail = async (email, token) => { 
  let data = await parent.findOne({where: { email: email }});
  if(data.token === token){
    data.isEmailVerified = true;
    await data.save();
    return "Email Verified";
  } else{
    return "Something went wrong!!";
  }
};


module.exports = {
    serachParentByLocation,
    serachAllParentByLocation,
    verifyEmail,
    sendEmail
};
