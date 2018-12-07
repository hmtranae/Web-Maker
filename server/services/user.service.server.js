module.exports = function(app) {

  const userModel = require('../model/user/user.model.server');
  const LocalStrategy = require('passport-local').Strategy;
  const passport = require('passport');

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

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

  // Create User
  app.post('/api/user', createUser);

  // Get User By Id
  app.get('/api/user/:uid', findUserById);

  // Get User
  app.get('/api/user', findUser);

  // Update User
  app.put('/api/user', updateUser);

  //get: grab information from the server
  //post: create new information
  //put: update information
  //delete

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
