module.exports = function(app) {

  const userModel = require('../model/user/user.model.server');
  const LocalStrategy = require('passport-local').Strategy;
  const passport = require('passport');
  const bcrypt = require('bcrypt-nodejs');

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


  // Function serializeUser method to store an encrypted representation of the user in a cookie - maintain session information for the currently logged in user
  function serializeUser(user, done) {
    done(null, user);
  }

  // Function deserializeUser retrieves the currently logged in user from the encrypted cookie created in serializeUser
  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function(user) {
        done(null, user); 
      },
      function(err) {
        done(err, null);
      }
    );
  }

  passport.use(new LocalStrategy(localStrategy));

  async function localStrategy(username, password, done) {
    const data = await userModel.findUserByUsername(username);
    if(data && bcrypt.compareSync(password, data.password)) {
      return done(null, data); // If there is data, then send back the data 
    } else {
      return done(null, false); // Else send back false
    }
  };

  // LoggedIn
  app.post('/api/loggedIn', loggedIn);

  // Login - authenticate to check: if works, login else don't
  app.post('/api/login', passport.authenticate('local'), login);
  
  // Create User
  app.post('/api/user', createUser);

  // Get User By Id
  app.get('/api/user/:uid', findUserById);

  // Get User
  app.get('/api/user', findUser);

  // Update User
  app.put('/api/user', updateUser);

  // LoggedOut
  app.post('/api/logout', logout);

  // User Registration
  app.post('/api/register', register);

  //get: grab information from the server
  //post: create new information
  //put: update information
  //delete

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : "0");
  }

  function logout(req, res) {
    req.logout();
    res.send(200); // AKA Success!
  }

  // Register function is async because once the user is created in the databse, then the login() is run to set to the current user

  async function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    const data = await userModel.createUser(user);
    // Ask about these two following lines
    // How req and res make sense with response to register?
    req.login(data, function(err) { 
      res.json(data);               
    });
  }

  async function createUser(req, res) {
    var user = req.body;
    const data = await userModel.createUser(user);
    res.json(data);
  }

  async function findUserById(req, res) {
    const userId = req.params['uid'];
    const data = await userModel.findUserById(userId);
    res.json(data);
  }

  async function findUser(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];

    if(username && password) {
      const data = await userModel.findUserByCredentials(username, password);
      res.json(data);
      return;
    }

    if(username) {
      const data = await userModel.findUserByUsername(username);
      res.json(data);
      return;
    }
  }

  async function updateUser(req, res) {
    const user = req.body;
    const uid = user._id;
    const data = await userModel.updateUser(uid, user);
    res.json(data);
  }

};
