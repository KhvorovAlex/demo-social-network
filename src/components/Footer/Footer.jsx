import React from 'react'
import { Container, Row, Col } from 'bootstrap-4-react'
import'./Footer.css'

function Footer() {
	return (
		<footer>
			<Container>
				<Row>
					<Col>
						<div className="footer__title">
							<span>Welcome to the demo-social-network it-kamasutra!</span>
							<span>developed be Khvorov Alexandr</span>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
