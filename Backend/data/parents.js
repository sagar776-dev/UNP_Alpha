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


module.exports = {
    serachParentByLocation,
    serachAllParentByLocation
};
