// Import MongoDB.
const mongoose = require("mongoose");

// Create User Schema
const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    country: String,
    age: Number,
    movies_list: {
        watch_list: [],
        watched_list: []
    }
});
let Users = new mongoose.model("users", usersSchema);

// Get one user.
let getUser = (id, cb) => {
    Users.find({ _id: id }, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
};

// Add new user to database.
let addUser = (newUser, cb) => {
    Users.create(newUser, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
};

// Add new movie to watch list.
let addToWatchList = (id, newMovie, cb) => {
    Users.findOneAndUpdate(
        {
            _id: id
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


// Add new movie to watched list.
let addToWatchedList = (id, newMovie, cb) => {
    Users.findOneAndUpdate(
        { 
            _id: id 
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

module.exports = {
    getUser,
    addUser,
    addToWatchList,
    addToWatchedList,
};
