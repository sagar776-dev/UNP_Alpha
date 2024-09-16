const axios = require("axios");
const parent = require("../model/parent");
const nodemailer = require("nodemailer");

let mailOptions = {
  from: "alphaunp@gmail.com",
  to: "",
  subject: "",
  text: "",
};

const serachParentByLocation = async (postData) => {
  try {
    let parentInfo = await parent.findOne({
      where: { location: postData.location },
    });
    if (!parentInfo) throw "Could not find parent of that location!";
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const serachParentEmailByName = async (postData) => {
  try {
    let parentInfo = await parent.findOne({
      where: { first_name: postData.name },
    });
    if (!parentInfo) throw "Could not find parent of that name!";
    return parentInfo.email;
  } catch (error) {
    return error;
  }
};

const serachParentPhoneByEmail = async (postData) => {
  try {
    let parentInfo = await parent.findOne({ where: { email: postData.email } });
    if (!parentInfo) throw "Could not find parent of that name!";
    return parentInfo.phone;
  } catch (error) {
    return error;
  }
};

const serachParentById = async (id) => {
  try {
    let parentInfo = await parent.findOne({ where: { id: id } });
    if (!parentInfo) throw "Could not find parent of that id!";
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const updateParentById = async (id, body) => {
  try {
    let parentInfo = await parent.update(
      body,
      {where: {id:id}}
    );
    if (!parentInfo) throw "Could not update parent of that id!";
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const serachAllParentByLocation = async (postData) => {
  try {
    console.log("reached here123 ", postData);
    let parentInfo = await parent.findAll({
      where: { location: postData.location },
    });
    console.log("parentsInfo", parentInfo);
    if (!parentInfo) throw "Could not find parent of that location!";
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const lockKidAccount = async (kidId) => {
  console.log();
  try {
    let kidInfo = await kid.findOne({
      where: { parent_id: parentInfo.id },
    });
    kidInfo.flag = false;
    await kidInfo.save();
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const unlockKidAccount = async (kidId) => {
  console.log();
  try {
    let kidInfo = await kid.findOne({
      where: { parent_id: parentInfo.id },
    });
    kidInfo.flag = true;
    await kidInfo.save();
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const sendEmail = async (emailId, subject, body) => {
  mailOptions.subject = subject;
  mailOptions.text = body;
  mailOptions.to = emailId;
  const transporter = nodemailer.createTransport({
    service: "gmail",
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
  let data = await parent.findOne({ where: { email: email } });
  if (data.token === token) {
    data.isEmailVerified = true;
    await data.save();
    return "Email Verified";
  } else {
    return "Something went wrong!!";
  }
};

module.exports = {
  serachParentByLocation,
  serachAllParentByLocation,
  serachParentEmailByName,
  serachParentPhoneByEmail,
  verifyEmail,
  sendEmail,
  lockKidAccount,
  unlockKidAccount,
  serachParentById,
  updateParentById
};
