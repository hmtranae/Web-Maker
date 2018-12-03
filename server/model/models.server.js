
var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds251022.mlab.com:51022/heroku_rd2z6q6h'; // use yours
  // Your connection string is found on Heroku's add-on mLab
}

var mongoose = require("mongoose"); // Import Mongoose library
var db = mongoose.connect(connectionString, { useNewUrlParser: true }); // Connect server with db
module.exports = db; // Export this file