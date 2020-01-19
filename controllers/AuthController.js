const promise = require('bluebird');
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
        !(await loginUser.correctPassword(password, loginUser.password))
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

// Protect the routes that only available for authenticated users.
const protectRoutes = catchAsync(async (req, res, next) => {
    // 1) Get the token and check if it's there.
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(
            new AppError('Your not logged in!! please login to get access'),
            401
        );
    }
    // 2) Token verification if token payload has not manipulated by malicious 3rd party.
    const decoded = await promise.promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
    );
    // 3) Check if user still exists.
    const currentUser = await user.getCurrentUser(decoded.id);
    if (!currentUser) {
        return next(
            new AppError(
                'The token belonging to this user dose no longer exists',
                401
            )
        );
    }
    // 4) Check if user changed password after token was issued.
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(
            new AppError(
                'User recently changed his password! please login again.',
                401
            )
        );
    }
    // 5) If everything is okay then grant access to protected route.
    req.user = currentUser;
    next();
});

// Exporting Methods.
module.exports = {
    homePage,
    login,
    signUp,
    logout,
    protectRoutes
};
