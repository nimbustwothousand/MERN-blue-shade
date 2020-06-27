import React from 'react'

const Post = ({ post }) => {
	return (
		<div className="post-container">
			<div className="post-container__title">
				<h3>
					{post.title}
				</h3>
			</div>
			<div className="post-container__excerpt">
				{post.excerpt}[...]
			</div>
		</div>
	)
}

export default Post
