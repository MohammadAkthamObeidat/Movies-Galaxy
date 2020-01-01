const mongoose = require("mongoose");

// all code here is an illustration example of what you need to do
// change the code corresponsdingly with what we want to do.
// change all code here, we need different schema for the Users

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

let getUsers = cb => {
    Users.find({}, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
};

let addUser = (repo, cb) => {
    Users.create(repo, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
};

let updateUser = (id, updatedStatus, cb) => {
    Users.updateOne(
        { _id: id },
        { $set: { status: updatedStatus } },
        (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(data);
            }
        }
    );
};

let deleteUser = (id, cb) => {
    Users.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};
