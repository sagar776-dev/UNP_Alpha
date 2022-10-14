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

module.exports = {
    validateParent,
    validateKid,
    validateCreds
}
