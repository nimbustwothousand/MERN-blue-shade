const mongoose = require('mongoose');

const ShoeSchema = new mongoose.Schema({
	brand: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	sizes: {
		type: Array,
		required: false
	}
}, { timestamps: true });

module.exports = Shoe = mongoose.model('Shoe', ShoeSchema)