export const getIsAuthSelector = (state) => {
	return state.auth.isAuth
}

export const getUserIdSelector = (state) => {
	return state.auth.id
}

export const getLoginSelector = (state) => {
	return state.auth.login
}

export const getCaptchaSelector = (state) => {
	return state.auth.captcha
}