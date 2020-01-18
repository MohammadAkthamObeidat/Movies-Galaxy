/* eslint-disable node/no-unsupported-features/es-syntax */
const jwt = require('jsonwebtoken');
const user = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const homePage = (req, res, next) => {
    res.send('<h1>HELLO FROM USER CONTROLLER</h1>');
};

const signToken = id => {
    // First Parameter is 'a payload' and the second is the secret.
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

// USER FUNCTIONS ****************************************************************************

// Logging Process.
const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // 1) Check if email and password exist.
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }

    // 2) Check if user exists && password is correct.
    const loginUser = await user.getUser(email, password);

    if (
        !loginUser ||
        !(await loginUser.correctPassword(password, user.password))
    ) {
        return next(new AppError('Incorrect email or password', 401));
    }

    // 3) If everything is ok, send token to client
    const token = loginUser._id;
    res.status(200).json({
        status: 'Success',
        token
    });
});

// Signing in process.
const signUp = (req, res, next) => {
    const { name, email, password, country } = req.body;
    user.addUser(
        {
            name,
            email,
            password,
            country
        },
        result => {
            const token = signToken(result._id);

            res.status(201).json({
                status: 'Success',
                token,
                data: {
                    user: result
                }
            });
        }
    );
};

// Logout the users
const logout = (req, res, next) => {
    // Delete session from the database to logout users.
    req.session.destroy(error => {
        // eslint-disable-next-line no-console
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
