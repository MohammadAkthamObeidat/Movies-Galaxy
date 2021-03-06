/* eslint-disable no-console */
// Import Mongoose.
const mongoose = require('mongoose');
// Database Connection URI
const DB_URI =
    'mongodb+srv://mohamad:mao712199677@movies-galaxy-ibktx.mongodb.net/movies-galaxy?retryWrites=true&w=majority';

module.exports = function() {
    mongoose.connect(DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    const db = mongoose.connection;

    db.on('error', function() {
        console.log('mongoose connection error');
    });

    db.once('open', function() {
        console.log('mongoose connected successfully...');
    });
};
