const router = require('express').Router();
const User = require('../models/User');

// @route POST /api/users */
// @desc register a new user
// @access public
router.post('/', (req, res) => {
	res.json({ message: "register" })
});

module.exports = router