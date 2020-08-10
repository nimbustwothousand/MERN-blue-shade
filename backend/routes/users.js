const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
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
					if (err) return res.status(400).json({ message: err.message });
					newUser.password = hash;
					newUser.save()
						.then(user => {
							jwt.sign(
								{ id: user._id },
								process.env.JWT_SECRET,
								{ expiresIn: 86400 },
								(err, token) => {
									if (err) return res.status(400).json({ message: err.message });
									res.status(200).json({ user: { id: user._id, email: user.email }, token })
								}
							);
						});
				});
			});
		});
});

// @route POST /api/users/auth
// @desc login a user
// @access public
router.post('/auth', (req, res) => {
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
							if (err) return res.status(400).json({ message: err.message });
							res.status(200).json({
								user: {
									_id: user._id, email: user.email, createdAt: user.createdAt, updatedAt: user.updatedAt, __v: user.__v
								}, token
							})
						}
					);
				})
		});
});

// @route GET /api/users/user
// @desc get user data
// @access private
router.get('/user', auth, (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => {
			res.json(user)
		})
	// returns status 400 Bad Request if token is out of date
});

module.exports = router