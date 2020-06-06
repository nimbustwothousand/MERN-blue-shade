const router = require('express').Router();

// @route /api
// @desc basic response to GET request at root
router.get('/', (req, res) => {
	res.send('GET request made to /api/')
})

// @route /api/shoes
const shoes = require('./shoes')
router.use('/shoes', shoes);

// @route /api/posts
const posts = require('./posts')
router.use('/posts', posts);

module.exports = router;