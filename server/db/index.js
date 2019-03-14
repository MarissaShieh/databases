var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

connection.connect(function(err){
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log('Connected to MySQL! -Toshi and Marissa');
  }
});

module.exports = connection;