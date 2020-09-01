import React from 'react'
import { Form, Field } from 'react-final-form'

function SendMessage({ addMessage }) {

	const onSubmit = (value) => {		
		addMessage(value.newMessage)
		return value.newMessage = ''
	}

	return (	
		<Form 
			onSubmit={onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Field name='newMessage' component='textarea'/>
					<button>add post</button>
				</form>
			)}
		/>
	)
}

export default SendMessage
