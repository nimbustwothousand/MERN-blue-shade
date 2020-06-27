import React, { useEffect, useState } from 'react';
import axios from '../../../../utils/axios';
import Loading from '../../../Loading';
import Shoe from './Shoe';

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
		return (<Loading />)
	} else {
		return (
			<main id="wrapper" className="page shop">
				Shop component
				<section id="shoe-grid">
					{
						state.shoes.map(shoe => <Shoe key={shoe._id} shoe={shoe} />)
					}
				</section>
			</main>
		)
	}
}

export default Shop
