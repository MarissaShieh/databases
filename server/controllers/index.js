var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('controller got it');
      models.messages.get((err, messages) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).json(messages);
        }
      });
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

