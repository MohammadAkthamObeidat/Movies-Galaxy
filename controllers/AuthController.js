const user = require('../models/User');

const homePage = (req, res, next) => {
  res.send('<h1>HELLO FROM USER CONTROLLER</h1>');
};

// USER FUNCTIONS ****************************************************************************

// Get one user.
const login = (req, res, next) => {
  user.getUser(req.body, result => {
    console.log('RESULT FROM LOGIN RESPONSE: ', result);
    // res.json(result);
    res.status(200).json({
      status: 'Success',
      data: {
        user: result
      }
    });
  });
};

// Add new user to database.
const signUp = (req, res, next) => {
  user.addUser(req.body, result => {
    console.log('RESULT FROM SIGN UP RESPONSE: ', result);
    // res.json(result);
    res.status(200).json({
      status: 'Success',
      data: {
        user: result
      }
    });
  });
};

// Logout the users
const logout = (req, res, next) => {
  // Delete session from the database to logout users.
  req.session.destroy(error => {
    console.log(error);
    // redirect user to the home page after logging out.
    res.redirect('/');
  });
};

// Exporting Methods.
module.exports = {
  homePage,
  login,
  signUp,
  logout
};
