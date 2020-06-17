import React from 'react';

const Loading = () => {
	return (
		<main id="wrapper" className="page loading">
			<div>
				<div className="spinner">
					<div className="bounce1"></div>
					<div className="bounce2"></div>
					<div className="bounce3"></div>
				</div>
				<p className="loading__text">
					Preparing Blue Shades...
				</p>
			</div>
		</main>
	)
}

export default Loading
