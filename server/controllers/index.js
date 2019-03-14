var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      res.send(); //marissa's guess, put models.get(req?) in send
    }, 
    
    // a function which handles posting a message to the database
    post: function (req, res) {
      res.send('send some info back here!');
      //needs to send models.post the info in the request. 
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

