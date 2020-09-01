import React from 'react'
import css from './MyBackground.module.css'

import userBg from './../../../assets/img/user-bg.jpg'

function MyBackground() {
	return (
		<div className={css.profile__bg}>
				<img src={userBg} alt="Фон профиля"/>
		</div>
	)
}

export default MyBackground
