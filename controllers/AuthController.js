const user = require('../models/User');

homePage = (req, res, next) => {
    res.send(
        '<h1>HELLO FROM USER CONTROLLER</h1>'
    )
}

// USER FUNCTIONS ****************************************************************************


// Get one user.
login = (req, res, next) => {
    user.getUser(req.body, result => {
        console.log('RESULT FROM LOGIN RESPONSE: ', result);
        res.json(result);
    });
};

// Add new user to database.
signUp = (req, res, next) => {
    user.addUser(req.body, result => {
        console.log('RESULT FROM SIGN UP RESPONSE: ', result);
        res.json(result);
    });
};

// Logout the users
logout = (req, res, next) => {
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
}