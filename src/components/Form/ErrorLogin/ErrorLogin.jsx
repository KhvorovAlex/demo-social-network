import React from 'react'
import './ErrorLogin.css'

function ErrorLogin({ errorText }) {
	return (
		<div className="error-login">
			<span className="error-login__text">{errorText}</span>
		</div>
	)
}

export default ErrorLogin
