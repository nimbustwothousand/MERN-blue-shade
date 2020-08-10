import React from 'react'

const Post = ({ post }) => {
	return (
		<div className="post-container">
			<div className="row">
				<div className="col-10">
					<div className="post-container__title">
						<h3>
							{post.title}
						</h3>
					</div>
					<div className="post-container__excerpt">
						{post.excerpt}[...]
					</div>
				</div>
				<div className="col-2">
					<div className="post-container__open">
						<i className="fas fa-arrow-right link" role="button"></i>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Post
