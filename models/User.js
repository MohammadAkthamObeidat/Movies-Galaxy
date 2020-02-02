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
        minlength: 8,
        select: false
    },
    passwordChangedAt: Date,
    country: {
        type: String,
        required: [true, 'Your Country Here!'],
        trim: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    movies_watch_list: {
        type: Array,
        required: false
    },
    movies_watched_list: {
        type: Array,
        required: false
    },
    shows_watch_list: {
        type: Array,
        required: false
    },
    shows_watched_list: {
        type: Array,
        required: false
    }
});

// ENCRYPTION AND COMPARING USER DATA METHODS *****************************************************************************************************

// Encryption the password using bcrypt package.
// eslint-disable-next-line node/no-unsupported-features/es-syntax
userSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) {
        return next();
    }
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Method to compare inserted password from user with his password in database.
// Calling this method only done using methods names in this file.
// eslint-disable-next-line node/no-unsupported-features/es-syntax
userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changedTimestamp;
    }

    // False means NOT changes.
    return false;
};
// eslint-disable-next-line new-cap
const User = new mongoose.model('User', userSchema);

// AUTHENTICATION METHODS *************************************************************************************************************************

// Get one user.
// eslint-disable-next-line no-unused-vars
const getUser = (email, password) => {
    return User.findOne({ email }).select('+password');
};

// Get current user.
const getCurrentUser = id => {
    return User.findById(id);
};

const getUserById = (id, callback) => {
    User.findById({ _id: id }, (error, data) => {
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

// MOVIES METHODS *********************************************************************************************************************************

// Add new movie to watch list.
const addMovieToWatchList = (userID, newMovie, callback) => {
    console.log('newMovie :', newMovie);
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                movies_watch_list: newMovie
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
    console.log('USER ID :', userID);
    console.log('MOVIE ID:', movieID);
    User.updateOne(
        { _id: userID },
        {
            $pull: { movies_watch_list: { id: movieID } }
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
                movies_watched_list: newMovie
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
const deleteMovieFromWatchedList = (userID, newWatchedlist, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $pull: {
                movies_watched_list: { id: newWatchedlist.id }
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

// TV SHOWS METHODS ******************************************************************************************************************************

// Add new show to watch list.
const addShowToWatchList = (userID, newShow, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                shows_watch_list: newShow
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
const deleteShowFromWatchList = (userID, newWatchlist, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $pull: {
                shows_watch_list: { id: newWatchlist.id }
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
                shows_watched_list: newShow
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
const deleteShowFromWatchedList = (userID, newWatchedlist, callback) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $pull: {
                shows_watched_list: { id: newWatchedlist.id }
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
    getCurrentUser,
    addUser,
    getUserById,
    addMovieToWatchList,
    deleteMovieFromWatchList,
    addMovieToWatchedList,
    deleteMovieFromWatchedList,
    addShowToWatchList,
    deleteShowFromWatchList,
    addShowToWatchedList,
    deleteShowFromWatchedList
};
