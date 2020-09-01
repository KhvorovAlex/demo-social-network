import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../../assets/img/user-logo.png'
import './DialogsUser.css'

function DialogsUser({ id, userName, photos, lastDialogActivityDate, lastUserActivityDate }) {	
	return (
		<div className="dialogs__item">
			<NavLink 
				to={'/dialogs/' + id}
				className="dialogs__itemBody"
			>
				<div className="dialogs__itemImg">
					<img className="item__img" src={photos.small ? photos.small : userPhoto} alt="user avatar"/>
				</div>	

				<div className="dialogs__itemText">
					<div className="text__userName">{userName}</div>
					<div className="text__lastVisit">
						Последний раз был в сети: <span>{lastUserActivityDate}</span>
					</div>					
				</div>

				<div className="dialogs__itemDate">
					{lastDialogActivityDate}
				</div>				
			</NavLink>
		</div>
	)
}

export default DialogsUser
