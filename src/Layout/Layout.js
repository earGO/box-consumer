import React from 'react'
import {withRouter} from 'react-router-dom'

/**
 * Main application layout
 */
function Layout({children, width, maxWidth, history, ...props}) {
	const handleLogoClick = () => history.push('/')
	const year = new Date().getFullYear()


	const FooterComponent = () => {
			return (
				<div>
					<div
					>
						<p color="darkGrey" fontSize={0} align="right">
							URSiP &copy; {year}
						</p>
					</div>
				</div>
			)
	}

	return (
		<div>
			<div style={{overflow: 'hidden'}}>
				{children}
			</div>
			<FooterComponent />
		</div>
	)
}

Layout.defaultProps = {
	maxWidth: 1600,
	// Responsive breackpoints
	width: ['99%', '99%', '99%', '99%']
}

export default withRouter(Layout)
