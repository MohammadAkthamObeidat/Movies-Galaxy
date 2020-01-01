const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect("mongodb://localhost/Movies-Galaxy", { useNewUrlParser: true });
    const db = mongoose.connection;

    db.on("error", function () {
        console.log("mongoose connection error");
    });

    db.once("open", function () {
        console.log("mongoose connected successfully...");
    });
};
