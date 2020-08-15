import React from 'react'

const Post = ({ post }) => {
	return (
		<div className="grid-item">
			<div className="grid-item-inner">
				<div className="post__title">
					<h3>
						{post.title}
					</h3>
				</div>
				<div className="post__excerpt">
					{post.excerpt}[...]
				</div>
				<div className="post__open">
					<i className="fas fa-arrow-right" role="button"></i>
				</div>
			</div>
		</div>
	)
}

export default Post
