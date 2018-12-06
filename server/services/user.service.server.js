module.exports = function(app) {

  const userModel = require('../model/user/user.model.server');

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
    // Declare user and grab it from the request.body
    // const user = req.body; 
    // client side is sending request to server
    // user._id = Math.random().toString();
    // users.push(user);
    // for server, response back to the client the user
    // res.json(user); 
    // send user object as a json format
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
