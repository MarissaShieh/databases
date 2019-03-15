var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

// connection.connect(function(err){
//   if (err) {
//     console.log(err);
//     throw err;
//   } else {
//     connection.query('SELECT * FROM messages', (err, messages, all) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(messages);
//     });

//   }
// });

connection.connect();


module.exports = connection;