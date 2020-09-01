import React from 'react'
import './DialogBody.css'
import DoneAllIcon from '@material-ui/icons/DoneAll'

function DialogBody({ id, body, senderName, senderId, viewed, addedAt, userId, deleteMessage }) {
	return (
		<div className="dialog__item">

			<div className="dialog__itemTitle">
				<span className="dialog__userName">
					{userId === senderId ? 'Вы' : senderName}
				</span>
				<span className="dialog__publicDate">
					{addedAt}
				</span>
				<span className={"dialog__viewed" + (viewed ? " viewed" : "")}>
					<DoneAllIcon />	
				</span>		
			</div>

			<div className="dialog__itemText">
				{body}
			</div>

			<span 
				className="dialog_messageDel"
				onClick={() => deleteMessage(id)}
			>
				удалить
			</span>
		</div>
	)
}

export default DialogBody
