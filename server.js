const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
const User = require("./models/User");
const passport = require("./passport/index");

const JobController = require('./controllers/jobcontroller');

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
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//back end posting user information to database
app.post("/user", (req,res) => {
  const userCreate = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  });
  userCreate.save((err) => {
    if (err){
      res.send("This did not post and you need to retry.");
    } else {
      res.send("Post successful");
    }
  })
})

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

//start with setting up the backend using CRUD routes and testing with postman to make sure everything works before plugging everything into the front end.