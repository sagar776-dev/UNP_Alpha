const e = require("express");

const validateParent = (parent) => {
    
};

const validateKid = (kid) => {};

const validateCreds = (creds) => {
  let username = creds.username.trim();
  let password = creds.password.trim();
  if (
    !username ||
    !password ||
    username.length === 0 ||
    password.length === 0
  ) {
    throw "Empty username or password";
  } else if (username.length < 8) {
    throw "Username should be atleast 8 characters long";
  } else if (password.length < 8) {
    throw "Password should be atleast 8 characters long";
  }
};

let checkId = (id, varName) => {
  if (!id) throw `Error: You must provide a ${varName}`;
  if (typeof id !== "string") throw `Error:${varName} must be a string`;
  id = id.trim();
  if (id.length === 0)
    throw `Error: ${varName.toString()} cannot be an empty string or just spaces`;
  if (!ObjectId.isValid(id)) throw `Error: Invalid ${varName}`;
  return id;
};

let checkString = (strVal, varName) => {
  varName = varName.trim();
  if (!strVal) throw `Error: You must supply a ${varName}!`;
  if (typeof strVal !== "string") throw `Error: ${varName} must be a string!`;
  strVal = strVal.trim();
  if (strVal.length === 0)
    throw `Error: ${varName} cannot be an empty string or string with just spaces`;
  if (!isNaN(strVal))
    throw `Error: ${strVal} is not a valid value for ${varName} as it only contains digits`;
  return strVal;
};

module.exports = {
    validateParent,
    validateKid,
    validateCreds,
    checkId,
    checkString
}
