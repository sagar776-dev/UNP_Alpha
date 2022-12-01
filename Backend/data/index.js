const registrationData = require('./registration');
const parentsData = require('./parents')
const kidData = require('./kid');
const conversationData = require('./conversations');
const messageData = require('./messages');

module.exports = {
  registration: registrationData,
  parents: parentsData,
  kid: kidData,
  messages: messageData,
  conversations :conversationData
};
