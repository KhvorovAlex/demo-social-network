import { authAPI, securityAPI, dialogsAPI } from "../api/api"
import { setNewMessagesSuccess, setDialogs } from './dialogs-reducer'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_USER_URL_SUCCESS = 'auth/SET_USER_URL_SUCCESS'

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	captcha: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}

		case SET_USER_URL_SUCCESS:
			return {
				...state,
				captcha: action.captcha
			}

		default:
			return state
	}
}

export const setUserData = (id, login, email, isAuth = true, captcha = null) => ({type: SET_USER_DATA, data: {id, login, email, isAuth, captcha}})
export const setUserCaptchaSuccess = (captcha) => ({type: SET_USER_URL_SUCCESS, captcha})

export const getAuthUserData = () => {
	return async (dispatch) => {
		const response = await authAPI.me()		
		if (response.resultCode === 0) {
			const {id, login, email} = response.data
			dispatch(setUserData(id, login, email))				
		}				
	}
}

export const loginUser = (email, password, rememberMe = false, captcha = null) => {
	return async (dispatch) => {		
		const response = await authAPI.login(email, password, rememberMe, captcha)			
		if (response.data.resultCode === 0) {
			const newMessages = await dialogsAPI.newMessages()
			dispatch(getAuthUserData())			
			dispatch(setNewMessagesSuccess(newMessages.data))		
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl())				
			}
			return response.data.messages
		}
	}
}

export const getCaptchaUrl = () => {
	return async (dispatch) => {
		const response = await securityAPI.сaptcha()
		dispatch(setUserCaptchaSuccess(response.data.url))
	}
}

export const logoutUser = () => {
	return async (dispatch) => {
		const response = await authAPI.logout()		
		if (response.data.resultCode === 0) {
			dispatch(setUserData(null, null, null, false))
			dispatch(setNewMessagesSuccess(null))
			dispatch(setDialogs([]))
		}	
	}
}



export default authReducer