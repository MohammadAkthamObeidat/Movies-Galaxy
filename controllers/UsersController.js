const express = require('express');
const user = require('../models/User');

const app = express();
app.use(express.json());

// MOVIES FUNCTIONS ****************************************************************************

// Add new movie to watch list.
const addMovieToWatchList = (req, res, next) => {
    // console.log('MOVIE :', movie);
    console.log('REQ.BODY :', req.body);
    const { userID } = req.params;
    // console.log('MOVIE :', movie);
    user.addMovieToWatchList(userID, req.body, result => {
        res.status(200).json({
            status: 'Success Adding Movie To Watchlist.',
            data: {
                movieAdded: result
            }
        });
    });
};

// Delete movie from watch list.
const deleteMovieFromWatchList = (req, res, next) => {
    const { userID } = req.params;
    const { movieID } = req.params;
    user.deleteMovieFromWatchList(userID, movieID, result => {
        res.status(204).json({
            status: 'Success Delete Movie From Watch List.',
            // eslint-disable-next-line no-undef
            data: NULL
        });
    });
};

// Add new movie to watched list.
const addMovieToWatchedList = (req, res, next) => {
    const { userID } = req.params;
    user.addMovieToWatchedList(userID, req.body, result => {
        res.status(200).json({
            status: 'Success Add Movie To Watched List.',
            data: {
                movieAdded: result
            }
        });
    });
};

// Delete movie from watched list.
const deleteMovieFromWatchedList = (req, res, next) => {
    const { userID } = req.params;
    const { movieID } = req.params;
    user.deleteMovieFromWatchedList(userID, movieID, result => {
        res.status(204).json({
            status: 'Success Delete Movie From Watch List.',
            // eslint-disable-next-line no-undef
            data: NULL
        });
    });
};

// TV SHOWS FUNCTIONS ****************************************************************************

// Add new show to watch list.
const addShowToWatchList = (req, res, next) => {
    const { userID } = req.params;
    user.addShowToWatchList(userID, req.body, result => {
        res.status(200).json({
            status: 'Complete',
            data: {
                addedShow: result
            }
        });
    });
};

// Delete show from watch list.
const deleteShowFromWatchList = (req, res, next) => {
    const { userID } = req.params;
    const { showID } = req.params;
    user.deleteShowFromWatchList(userID, showID, result => {
        //res.json(result);
        res.status(204).json({
            status: 'Success Delete Show From Watch List.',
            // eslint-disable-next-line no-undef
            data: NULL
        });
    });
};

// Add new show to watched list.
const addShowToWatchedList = (req, res, next) => {
    const { userID } = req.params;
    user.addShowToWatchedList(userID, req.body, result => {
        //res.json(result);
        res.status(200).json({
            status: 'Success add to watchedlist.',
            data: {
                addedShow: result
            }
        });
    });
};

// Delete show from watched list.
const deleteShowFromWatchedList = (req, res, next) => {
    const { userID } = req.params;
    const { showID } = req.params;
    user.deleteShowFromWatchedList(userID, showID, result => {
        //res.json(result);
        res.status(204).json({
            status: 'Success Delete Show From Watched List.',
            // eslint-disable-next-line no-undef
            data: NULL
        });
    });
};

// Exporting Methods.
module.exports = {
    addMovieToWatchList,
    deleteMovieFromWatchList,
    addMovieToWatchedList,
    deleteMovieFromWatchedList,
    addShowToWatchList,
    deleteShowFromWatchList,
    addShowToWatchedList,
    deleteShowFromWatchedList
};
