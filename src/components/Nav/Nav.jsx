import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Nav.module.css'
import NewMessage from '../NewMessage/NewMessage'


function Nav({ links }) {
	return (
		<nav className={css.main_nav}>
			{links.map( link => 
				<div key={link.linkName} className={css.item}>
					<NavLink 
						to={'/' + link.linkTo}
						className={css.item_link}
						activeClassName={css.active}
					>
						<span>{link.linkName} </span>
						{link.linkName === 'Dialogs' ? <NewMessage /> : null}
					</NavLink>
				</div>
			)}		
		</nav>	
	)
}

export default Nav
