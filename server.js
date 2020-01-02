// Import Middleware
const cors = require("cors");
const bodyParser = require('body-parser');
const express = require("express");
// Call EXPRESS method and store it in 'app' variable.
const app = express();
// Import Database connection code.
const connectToDb = require("./database/DBconnection.js");
connectToDb();
// Use middleware.
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
// Import routes.
const moviesRoutes = require("./routes/moviesRoutes.js");
const tvShowsRoutes = require("./routes/tvShowsRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
// Use routes.
app.use('/movie', moviesRoutes);
app.use('/tv-shows', tvShowsRoutes);
app.use('/user', userRoutes);

routes(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

module.exports = router;