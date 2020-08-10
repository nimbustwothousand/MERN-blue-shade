import React from 'react'

const Hamburger = React.forwardRef((props, ref) => {
	return (
		<button
			onClick={props.onClick}
			className={props.className}
			ref={ref}
			type="button"
			aria-label="Menu"
			aria-controls="navigation"
			aria-expanded={props.open}
		>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
		</button>
	)
})

export default Hamburger
