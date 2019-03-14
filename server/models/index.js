var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) { //callback was inputted by Marissa
      //db.connection
      //connect to the database
      //tell the database what info we want (select messages.text from messages)
      //^if it's a callback, once you get those results, send it back to controllers
    }, 
    
    // a function which can be used to insert a message into the database
    post: function () {
      //connect to database
      //INSERT new message into messages table
      //^need username, message's text, and roomname from controller
      //pass to callback from controller that there is no error
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

