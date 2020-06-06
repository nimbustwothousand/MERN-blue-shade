const router = require('express').Router();
const Shoe = require('../models/Shoe');

// @route GET /api/shoes
// @desc get all shoes
router.get('/', (req, res) => {
	Shoe.find()
		.then(shoes => {
			res.json(shoes)
		})
});

// @route POST /api/shoes/new
// @desc create new shoes
router.post('/new', (req, res) => {
	const newShoes = new Shoe({
		name: req.body.name,
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
router.delete('/:id', (req, res) => {
	Shoe.findById(req.params.id)
		.then(shoes => shoes.remove()
			.then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }))
});

module.exports = router