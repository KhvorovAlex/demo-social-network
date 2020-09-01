import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../../components/Form/LoginForm/LoginForm'

import './Login.css'

function Login({ loginUser, isAuth, captcha }) {
	return (
		<div className="login">
			{isAuth 
				? <Redirect to='/profile'/>
				: <LoginForm loginUser={loginUser} captcha={captcha}/>
			}
			<div className="login__info">
				<h3 className="login__infoTitle">Тестовые Email и Password</h3>
				<p>Вы можете воспользоваться данной социальной сетью, которая размещена на хостинге github. Регистрация не нужна! Просто введите данные тестового аккаунта:</p>
				<span><b>Email: free@samuraijs.com</b></span>
				<span><b>Password: free</b></span>
			</div>	
		</div>
	)
}



export default Login
