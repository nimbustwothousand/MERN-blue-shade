const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	slug: {
		type: String,
		lowercase: true,
		unique: true
	},
	title: {
		type: String,
		required: true
	},
	excerpt: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
}, { timestamps: true });

module.exports = Post = mongoose.model('Post', PostSchema);