import React from 'react';

const Loading = ({ msg = "Preparing Blue Shades..." }) => {
	return (
		<main id="wrapper" className="page loading">
			<div>
				<div className="spinner">
					<div className="bounce1"></div>
					<div className="bounce2"></div>
					<div className="bounce3"></div>
				</div>
				<p className="loading__text">
					{msg}
				</p>
			</div>
		</main>
	)
}

export default Loading
