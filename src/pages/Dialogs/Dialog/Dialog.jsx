import React from 'react'
import DialogBody from './DialogBody/DialogBody'
import SendMessageToUser from '../../../components/SendMessageToUser/SendMessageToUser'


function Dialog(props) {
	return (
		<div className="dialog__container">		
			<div className="dialog">				
				{props.dialog.map(
					(dialog, index) => <DialogBody 
											key={dialog.id + index} 
											{...dialog}
											deleteMessage={props.deleteMessage}
											userId={props.authoraizedUserId}/>
				)}					
			</div>		

			<SendMessageToUser 
						userId={props.match.params.userId} 
						sendMessage={props.sendMessage}/>
		</div>
	)
}

export default Dialog
