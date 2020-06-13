const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const tutor = Boolean(req.body.tutor);
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const timezone = req.body.timezone;
    const subject = req.body.subject;
    const contacts = req.body.contacts;

    const newUser = new User({ 
        tutor,
        username,
        firstname,
        lastname,
        timezone,
        subject,
        contacts
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;