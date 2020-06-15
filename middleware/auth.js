const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
	const token = req.header('x-auth-token');
	if (!token) {
		res.status(401).json({ message: 'No token, authorisation denied.' })
	};
	//verify token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// add user from payload
		req.user = decoded;
		next();
	} catch (error) {
		res.status(400).json({ message: 'Token is not valid.' })
		next();
	}
}
module.exports = auth;