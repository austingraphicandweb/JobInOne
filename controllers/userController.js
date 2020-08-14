const passport = require('../passport/index');
const db = require('../models');
const router = require('express').Router();

router.post("/login",  function (req, res, next) {
    next()
}, passport.authenticate("local", { successRedirect: '/' }), (req, res) => {
});


router.post('/signup', (req,res) => {
    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }).then(response => {
        res.json(response)
    }).catch((err) => {
        res.send('unable to complete the signup process');
    })
})

//this is the logout route that will redirect to the homepage
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

//user route that sends back information for the currently logged in user
router.get('/info', function(req, res) {
    console.log(req.user)
    if (req.user) {
        db.User.findOne(
            {
                _id: req.user._id
            }
        ).then(dbUser => {
            console.log(dbUser)
            res.json(dbUser)
        })
    }
})

module.exports = router;