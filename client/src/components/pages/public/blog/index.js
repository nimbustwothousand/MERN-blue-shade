import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import axios from '../../../../utils/axios'
import Loading from '../../../Loading'
import Post from './Post'
import Hero from './Hero'

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
				<section id="hero">
					<Hero />
				</section>
				<section id="post-grid">
					{
						state.posts.map(post => <Post key={post._id} post={post} />)
					}
				</section>
			</>
		)
	}
}

export default Blog
