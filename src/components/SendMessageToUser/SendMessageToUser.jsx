import React from 'react'
import { Form, Field } from 'react-final-form'

function SendMessageToUser({ userId, sendMessage}) {

	const onSubmit = (value) => {	
		sendMessage(userId, value.newMessage)
		return value.newMessage = ''
	}

	return (	
		<Form 
			onSubmit={onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Field name='newMessage' component='textarea'/>
					<div>
						<button className="btn btn-outline-primary btn-sm">Написать сообщение</button>
					</div>
				</form>
			)}
		/>
	)
}

export default SendMessageToUser
