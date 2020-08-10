import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import axios from '../../../../utils/axios'
import Loading from '../../../Loading'
import Shoe from './Shoe'
import Hero from './Hero'

const Shop = () => {
	const [state, setState] = useState({
		loading: true,
		shoes: []
	});
	useEffect(() => {
		axios.get('/api/shoes').then(res => {
			setState(state => ({
				...state,
				loading: false,
				shoes: res.data
			}));

		})
	}, [])
	if (state.loading) {
		return (<Loading msg="Loading..." />)
	} else {
		return (
			<>
				<Helmet>
					<title>Shop</title>
				</Helmet>
				<section id="hero">
					<Hero />
				</section>
				<section id="shoe-grid">
					{
						state.shoes.map(shoe => <Shoe key={shoe._id} shoe={shoe} />)
					}
				</section>

			</>
		)
	}
}

export default Shop
