const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect(
        'mongodb+srv://mohamad:mao712199677@movies-galaxy-ibktx.mongodb.net/test?retryWrites=true&w=majority'
    )
    .then(result => {
        app.listen(9000)
    })
    .catch(error => {
        console.log('ERROR CONNECTION TO DATABASE :', error);
    });

    /* const db = mongoose.connection;

    db.on("error", function () {
        console.log("mongoose connection error");
    });

    db.once("open", function () {
        console.log("mongoose connected successfully...");
    }); */
};
