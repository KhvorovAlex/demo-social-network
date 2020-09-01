import React from 'react'
import './Dialogs.css'
import DialogsUser from './DialogsUser/DialogsUser'

function Dialogs({ dialogsData }) {

	return (
		<div className="dialogs">
			<h2 className="dialogs__title">Сообщения</h2>	
			
			<div className="dialogs__items">
				{dialogsData.map( user => 
					<DialogsUser
							key={'userId_' + user.id}
							{...user}/>)}
			</div>			
		</div>
	)
}

export default Dialogs
