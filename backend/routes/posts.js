const router = require('express').Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');

// @route GET /api/posts */
// @desc get all posts
// @access public
router.get('/', (req, res) => {
	Post.find()
		.then(posts => {
			res.json(posts)
		})
});

// @route POST /api/posts/new
// @desc create new blog post
// @access private
router.post('/new', auth, (req, res) => {
	const newPost = new Post({
		title: req.body.title,
		excerpt: stringTruncate(req.body.body),
		body: req.body.body,
		slug: req.body.slug
	});
	newPost.save().then(post => {
		res.json(post);
	}).catch(err => { res.json(err) })
});

stringTruncate = (str) => {
	if (str.trim().length > 50) {
		return str.substring(0, 50);
	} else {
		return str;
	}
};

// @route DEL /api/posts/:id
// @desc delete a post by id
// @access private
router.delete('/:id', auth, (req, res) => {
	Post.findById(req.params.id)
		.then(post => post.remove()
			.then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }))
});

module.exports = router