// Import MongoDB.
const mongoose = require("mongoose");

// Create User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
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
let User = new mongoose.model("User", userSchema);


// USER FUNCTIONS ****************************************************************************


// Get one user.
let getUser = (user, cb) => {
    console.log('USER SIGN UP : ', user)
    User.find(user, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
};

// Add new user to database.
let addUser = (newUser, cb) => {
    User.create(newUser, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
};


// MOVIES FUNCTIONS ****************************************************************************



// Add new movie to watch list.
let addMovieToWatchList = (userID, newMovie, cb) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'movies_list.watch_list': newMovie
            }
        },
        (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(data);
            }
        }
    );
};

// Delete movie from watch list.
let deleteMovieFromWatchList = (userID, movieID, cb) => {
    User.update(
        {
            _id: userID
        },
        {
            $pull: {
                'movies_list.watch_list': {
                    _id: movieID
                }
            }
        })
}

// Add new movie to watched list.
let addMovieToWatchedList = (userID, newMovie, cb) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'movies_list.watched_list': newMovie
            }
        },
        (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(data);
            }
        }
    );
};

// Delete movie from watched list.
let deleteMovieFromWatchedList = (userID, movieID, cb) => {
    User.update(
        {
            _id: userID
        },
        {
            $pull: {
                'movies_list.watched_list': {
                    _id: movieID
                }
            }
        })
}


// TV SHOWS FUNCTIONS ****************************************************************************


// Add new show to watch list.
let addShowToWatchList = (userID, newShow, cb) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'shows_list.watch_list': newShow
            }
        },
        (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(data);
            }
        }
    );
};

// Delete show from watch list.
let deleteShowFromWatchList = (userID, showID, cb) => {
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
        })
}

// Add new show to watched list.
let addShowToWatchedList = (userID, newShow, cb) => {
    User.findOneAndUpdate(
        {
            _id: userID
        },
        {
            $push: {
                'shows_list.watched_list': newShow
            }
        },
        (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(data);
            }
        }
    );
};

// Delete show from watched list.
let deleteShowFromWatchedList = (userID, showID, cb) => {
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
        })
}

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
    deleteShowFromWatchedList,
};
