const MONGODB_URI = 'mongodb+srv://mohamad:mao712199677@movies-galaxy-ibktx.mongodb.net/movies-galaxy?retryWrites=true&w=majority';
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
// Middleware function to use 'req' parameters.
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes.
const moviesRoutes = require("./routes/moviesRoutes.js");
const tvShowsRoutes = require("./routes/tvShowsRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const authRoutes = require("./routes/authRoutes.js")
// Use routes.
app.use('/movies', moviesRoutes);
app.use('/shows', tvShowsRoutes);
app.use('/user',userRoutes);
app.use(authRoutes);

// Import Session Middleware
const session = require("express-session");
// Import this 3rd party library to store session in mongo DataBase.
const MongoDBStore = require("connect-mongodb-session")(session);
// Storing session in mongoDB.
const mongoStore = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
// Using session
app.use(session({ 
    secret: 'mohammadAkthamObeidat', 
    resave: false, 
    saveUninitialized: false,
    store: mongoStore 
}));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT} ^.^ ******`));
