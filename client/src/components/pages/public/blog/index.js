import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import axios from '../../../../utils/axios';
import Loading from '../../../Loading';
import Post from './Post';

const Blog = () => {
	const [state, setState] = useState({
		loading: true,
		posts: []
	});
	useEffect(() => {
		axios.get('/api/posts').then(res => {
			setState(state => ({
				...state,
				loading: false,
				posts: res.data
			}));

		})
	}, [])
	if (state.loading) {
		return (<Loading />)
	} else {
		return (
			<>
				<Helmet>
					<title>Blog</title>
				</Helmet>
				<div className="blog">
					<h1 className="page-header">Blog</h1>
					<section id="post-grid">
						{
							state.posts.map(post => <Post key={post._id} post={post} />)
						}
					</section>
				</div>
			</>
		)
	}
}

export default Blog
