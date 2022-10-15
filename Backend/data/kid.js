const axios = require("axios");
const kid = require('../model/kid');



const serachKidByFilters = async (postData) => {
  try {
    let parentInfolocation = await kid.findOne({ where: { location: postData.location } });
    let parentInfograde = await kid.findOne({ where: { grade: postData.location } });
    let parentInfogender = await kid.findOne({ where: { location: postData.location } });
    let parentInfoschool = await kid.findOne({ where: { location: postData.location } });
    let finalresult = parentInfolocation + parentInfograde + parentInfogender + parentInfoschool
    if (!finalresult) throw 'Could not find parent of that location!'
    return finalresult
  } catch (error) {
    return error
  }
};


module.exports = {
    serachKidByFilters,
    
};
