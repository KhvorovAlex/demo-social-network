import React from 'react'
import  ErrorLogin from '../ErrorLogin/ErrorLogin'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

function LoginForm({ loginUser, captcha }) {

	const onSubmit = async (value) => {		
		const {email, password, remember, captcha} = value
		const errorText = await loginUser(email, password, remember, captcha)	
		if(errorText) {
			return { [FORM_ERROR]: errorText }
		}		
	}

	const onValidate = values => {	
		const errors = {}
		if (!values.email) {
			errors.email = 'Поле обязательно для заполнения'
		}
		if (!values.password) {
			errors.password = 'Поле обязательно для заполнения'
		}		
		return errors
	}

	const required = value => ( !value ? 'Заполните капчу' :  undefined)

	return (
		<Form
			onSubmit={onSubmit}
			validate={onValidate}
			render={({ handleSubmit, submitting, submitError }) => (
				<form className="main-form" onSubmit={handleSubmit}>
					<Field name="email" type="email" >
						{({ input, meta }) => (
							<div className="main-form__inputBody">
								<input {...input} placeholder="Email"/>
								{meta.error && meta.touched && <span className="main-form__inputError">{meta.error}</span>}
							</div>
						)}
					</Field>

					<Field name="password" type="password">
						{({ input, meta }) => (
							<div className="main-form__inputBody">
								<input {...input} placeholder="Password"/>
								{meta.error && meta.touched && <span className="main-form__inputError">{meta.error}</span>}
							</div>
						)}
					</Field>

					<Field name="remember" type="checkbox">
						{({ input, meta }) => (
							<div className="main-form__inputBody">								
								<label>
									<input {...input} />
									Remember me
								</label>
								{meta.error && meta.touched && <span className="main-form__inputError">{meta.error}</span>}
							</div>
						)}
					</Field>

					{captcha && 
						<div className="main-form__captcha">
							<img src={captcha} alt="captcha"/>
							<Field name="captcha" type="text" validate={required}>
								{({ input, meta }) => (
									<div>
										<input {...input} />
										{meta.error && meta.touched && <span className="main-form__inputError">{meta.error}</span>}
									</div>	
								)}
							</Field>
						</div>						
					}				

					<div className="main-from__submitWrapper">						
						<button className="btn btn-primary" type="submit" disabled={submitting}>
							Login
						</button>
						{submitError && <ErrorLogin errorText={submitError}/>}
					</div>									
				</form>
			)}
		/>
	)
}

export default LoginForm
