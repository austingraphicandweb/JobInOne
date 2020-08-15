const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
const passport = require("./passport/index");
const JobController = require('./controllers/jobcontroller');
const UserController = require('./controllers/userController');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		secret: 'hi', //pick a random string to make the hash that is generated secure
		resave: false, //required
		saveUninitialized: false //required
	})
)
app.use(passport.initialize())
app.use(passport.session())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/jobinone",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
// Send every request to the React app
// Define any API routes before this runs
app.use(JobController);
app.use(UserController);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});