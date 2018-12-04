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

  function createUser(req, res) {
    // Declare user and grab it from the request.body
    // const user = req.body; 
    // client side is sending request to server
    // user._id = Math.random().toString();
    // users.push(user);
    // for server, response back to the client the user
    // res.json(user); 
    // send user object as a json format
    var user = req.body;
    userModel.createUser(user).then(
      (data) => {
        res.json(data);
      }
    )
  }

  function findUserById(req, res) {
    const userId = req.params['uid'];
    let user = selectUserById(userId);
    res.json(user);
  }

  function findUser(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];

    if(username && password) {
      let user;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          user = users[i];
        }
      }
      res.json(user);
      return;
    }

    if(username) {
      let user;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          user = users[i];
        }
      }
      res.json(user);
      return;
    }
  }

  function selectUserById(uid) {
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === uid) {
				return users[x];
			}
    }
  }

  function updateUser(req, res) {
    const user = req.body;
		const oldUser = selectUserById(user._id);
		const index = users.indexOf(oldUser);
		users[index] = user;
    res.json(user)
  }

};