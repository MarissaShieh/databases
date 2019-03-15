var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
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
      console.log(req.body);
      models.messages.post(req.body, (err) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      })
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, users) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).json(users);
        }
      });
    },

    post: function (req, res) {
      models.users.post(req.body, (err) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      })
    }
  }
};