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

// BlogSchema.pre('validate', function (next) {
// 	if (!this.slug) {
// 		this.slugify();
// 	}

// 	next();
// });

// PostSchema.methods.slugify = function () {
// 	this.slug = encodeURI(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
// };

// PostSchema.methods.toJSON = function (user) {
// 	return {
// 		slug: this.slug,
// 		title: this.title,
// 		excerpt: this.excerpt,
// 		body: this.body,
// 		createdAt: this.createdAt,
// 		updatedAt: this.updatedAt
// 	};
// };

module.exports = Post = mongoose.model('Post', PostSchema);