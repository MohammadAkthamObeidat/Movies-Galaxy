/* eslint-disable no-undef */
// Import MongoDB.
const mongoose = require('mongoose');
// Import Validator 3rd party Package.
const validator = require('validator');
// Import Bcrypt 3rd party Package.
const bcrypt = require('bcryptjs');
// Create User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Tell Us Your Name!'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please Provide Your Email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please Provide a Valid Email!!']
    },
    password: {
        type: String,
        required: [true, 'Please Provide a Password!'],
        minlength: 8
    },
    country: {
        type: String,
        required: [true, 'Your Country Here!'],
        trim: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    movies_list: {
        watch_list: [],
        watched_list: []
    },
    shows_list: {
        watch_list: [],
        watched_list: []
    }
});

// Encryption the password.
// eslint-disable-next-line node/no-unsupported-features/es-syntax
userSchema.pre('save', async function(next) {
    // ONly run this function if password was actually modified
    if (!this.isModified('password')) {
        return next();
    }
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
// eslint-disable-next-line new-cap
const User = new mongoose.model('User', userSchema);

// USER FUNCTIONS ****************************************************************************

// Get one user.
const getUser = (user, callback) => {
    User.find(user, (error, data) => {
        if (error) {
            callback(error);
        } else {
            callback(data);
        }
    });
};

// Add new user to database.
const addUser = (newUser, callback) => {
    User.create(newUser, (error, data) => {
        if (error) {
            callback(error);
        } else {
            callback(data);
        }
    });
};

// MOVIES FUNCTIONS ****************************************************************************

// Add new movie to watch list.
const addMovieToWatchList = (userID, newMovie, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'movies_list.watch_list': newMovie
            }
        },
        (error, data) => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        }
    );
};

// Delete movie from watch list.
const deleteMovieFromWatchList = (userID, movieID, callback) => {
    User.update(
        { _id: userID },
        {
            'movies_list.watch_list': movieID
        },
        {
            $pull: {
                'movies_list.$.watch_list': {
                    id: movieID
                }
            }
        },
        (error, data) => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        }
    );
};

// Add new movie to watched list.
const addMovieToWatchedList = (userID, newMovie, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'movies_list.watched_list': newMovie
            }
        },
        (error, data) => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        }
    );
};

// Delete movie from watched list.
const deleteMovieFromWatchedList = (userID, movieID, callback) => {
    User.update(
        {
            _id: userID
        },
        {
            $pull: {
                'movies_list.watched_list': {
                    id: movieID
                }
            }
        },
        (error,
        data => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        })
    );
};

// TV SHOWS FUNCTIONS ****************************************************************************

// Add new show to watch list.
const addShowToWatchList = (userID, newShow, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'shows_list.watch_list': newShow
            }
        },
        (error, data) => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        }
    );
};

// Delete show from watch list.
const deleteShowFromWatchList = (userID, showID, callback) => {
    User.update(
        {
            _id: userID
        },
        {
            $pull: {
                'shows_list.watch_list': {
                    _id: showID
                }
            }
        },
        (error,
        data => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        })
    );
};

// Add new show to watched list.
const addShowToWatchedList = (userID, newShow, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'shows_list.watched_list': newShow
            }
        },
        (error, data) => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        }
    );
};

// Delete show from watched list.
const deleteShowFromWatchedList = (userID, showID, callback) => {
    User.update(
        {
            _id: userID
        },
        {
            $pull: {
                'shows_list.watched_list': {
                    _id: showID
                }
            }
        },
        (error,
        data => {
            if (error) {
                callback(error);
            } else {
                callback(data);
            }
        })
    );
};

// Exporting Methods.
module.exports = {
    getUser,
    addUser,
    addMovieToWatchList,
    deleteMovieFromWatchList,
    addMovieToWatchedList,
    deleteMovieFromWatchedList,
    addShowToWatchList,
    deleteShowFromWatchList,
    addShowToWatchedList,
    deleteShowFromWatchedList
};
