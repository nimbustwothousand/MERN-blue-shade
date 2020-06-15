const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// @route POST /api/users
// @desc register a new user
// @access public
router.post('/', (req, res) => {
	const { email, password, passwordConfirm } = req.body;
	// all fields must be entered
	if (!email || !password || !passwordConfirm) {
		return res.status(400).json({ message: 'Please enter all fields.' });
	}
	// passwords must match
	if (password !== passwordConfirm) {
		return res.status(400).json({ message: 'Passwords must match.' })
	}

	// check for duplicates
	User.findOne({ email })
		.then(user => {
			if (user) return res.status(400).json({ message: 'A user with that email already exists.' });
			// if no duplicates, register
			const newUser = new User({
				email,
				password
			});

			//create salt and hash
			bcrypt.genSalt(12, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser.save().then(user => {
						res.status(200).json({ user: { id: user._id, email: user.email } })
					})
				})
			})
		})
});

module.exports = router