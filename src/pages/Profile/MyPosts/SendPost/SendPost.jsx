import React from 'react'
import css from './SendPost.module.css'
import { Field, Form } from 'react-final-form'
 
function SendPost({ addPost }) {

	const onSubmit = (value) => {
		addPost(value.newPostText)
		return value.newPostText = ''
	}

	return (
		<div className={css.post__send}>
			<Form 
				onSubmit={onSubmit}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Field 
							component='textarea' 
							name='newPostText'	
							rows={4}
							cols={50}				
						/>	
						<div>
							<button className="btn btn-primary">Опубликовать</button>
						</div>
					</form>
				)}
			/>	
		</div>
	)
}

export default SendPost
