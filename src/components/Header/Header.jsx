import React from 'react'
import { Container, Row, Col } from 'bootstrap-4-react'
import css from  './Header.module.css'
import { NavLink } from 'react-router-dom'

import logo from './../../assets/img/logo.png'

function Header({ isAuth, login, logoutUser }) {
	return (
		<header>
			<Container>
				<Row>
					<Col>
						<div className={css.header__body}>
							<NavLink to="/" className={css.header__logo}>
								<img src={logo} alt="logo"/>
							</NavLink>
							<div className={css.login_block}>
								{isAuth

									?   <div className={css.login_authUser}>
											<NavLink to={'/profile'}>{login}</NavLink> 
											<span className={css.login_authUser_minus}>---</span>	 
											<button className="btn btn-primary" onClick={logoutUser}>LOGOUT</button>
										</div>

									:   <NavLink to='/login'>
											Login
										</NavLink>
								}
							</div>
						</div>
					</Col>
				</Row>
			</Container>			
		</header>
	)
}

export default Header
