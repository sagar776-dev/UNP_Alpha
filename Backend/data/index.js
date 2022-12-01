const registrationData = require('./registration');
const parentsData = require('./parents')
const kidData = require('./kid');
const friend_requests = require('./friend_requests');

module.exports = {
  registration: registrationData,
  parents: parentsData,
  kid: kidData,
  relation: friend_requests
};
