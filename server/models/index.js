var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, messages) => {
        if (err) {
          callback(err);
        } else {
          callback(err, messages);
        }
      });
    }, 

    // a function which can be used to insert a message into the database
    post: function (newMessage, callback) {
      var newInfoArr = [];
      for (var key in newMessage) {
        newInfoArr.push(JSON.stringify(newMessage[key]))
      }
      var newInfoStr = newInfoArr.join(', ');
      db.query(`INSERT INTO messages (username, message, roomname) values (${newInfoStr})`, (err)=>{
        if (err) {
          console.log('REASON FOR PROBLEM',err);
          callback(err);
        }
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * from user', (err, users) => {
        if (err) {
          callback(err);
        } else {
          callback(err, users);
        }
      });
    },

    post: function (username, callback) {
      var usernameStr;
      for (var key in username) {
        usernameStr = username[key]
      }
      db.query(`INSERT INTO messages (username) values (${usernameStr})`, (err) => {
        if (err) {
          callback(err);
        }
      });
    }
  }
};