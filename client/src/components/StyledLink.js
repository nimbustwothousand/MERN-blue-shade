import React from 'react'
import { Link } from 'react-router-dom'

const StyledLink = (props) => {
	return (
		<Link to={props.href} className="link">
			<span>{props.children}</span>
		</Link>
	)
}

export default StyledLink
