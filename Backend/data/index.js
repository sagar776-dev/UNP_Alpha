const registrationData = require('./registration');
const parentsData = require('./parents')
const kidData = require('./kid');
const friend_requests = require('./friend_requests');
const conversationData = require('./conversations');
const messageData = require('./messages');

module.exports = {
  registration: registrationData,
  parents: parentsData,
  kid: kidData,
  relation: friend_requests
  messages: messageData,
  conversations :conversationData
};
