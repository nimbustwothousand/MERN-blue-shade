const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
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
					newUser.save()
						.then(user => {
							jwt.sign(
								{ id: user._id },
								process.env.JWT_SECRET,
								{ expiresIn: 86400 },
								(err, token) => {
									if (err) throw err;
									res.status(200).json({ user: { id: user._id, email: user.email }, token })
								}
							);
						});
				});
			});
		});
});

// @route POST /api/users/login
// @desc authenticates a user
// @access public
router.post('/login', (req, res) => {
	const { email, password } = req.body;
	// all fields must be entered
	if (!email || !password) {
		return res.status(400).json({ message: 'Please enter all fields.' });
	}
	User.findOne({ email })
		.then(user => {
			if (!user) return res.status(400).json({ message: "User does not exist" });

			//validate password
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

					jwt.sign(
						{ id: user._id },
						process.env.JWT_SECRET,
						{ expiresIn: 86400 },
						(err, token) => {
							if (err) throw err;
							res.status(200).json({ user: { id: user._id, email: user.email }, token })
						}
					);
				})
		});
});
module.exports = router