const router = require('express').Router();
const auth = require('../middleware/auth');
const Shoe = require('../models/Shoe');

// @route GET /api/shoes
// @desc get all shoes
// @access public
router.get('/', (req, res) => {
	Shoe.find()
		.then(shoes => {
			res.json(shoes)
		})
});

// @route POST /api/shoes/new
// @desc create new shoes
// @access private
router.post('/new', auth, (req, res) => {
	const newShoes = new Shoe({
		brand: req.body.brand,
		category: req.body.category,
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		color: req.body.color,
		sizes: req.body.sizes
	});
	newShoes.save().then(shoes => {
		res.json(shoes);
	}).catch(err => { res.json(err) })
});

// @route DEL /api/shoes/:id
// @desc delete shoes by id
// @access private
router.delete('/:id', auth, (req, res) => {
	Shoe.findById(req.params.id)
		.then(shoes => shoes.remove()
			.then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }))
});

module.exports = router