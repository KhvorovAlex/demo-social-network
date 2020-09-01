import { getAuthUserData } from "./auth-reducer"

const INIT_SUCCESS = 'INIT_SUCCESS'

let initialState = {
	init: false,
	navLinkMenu: [
		{linkName: 'Profile', linkTo: 'profile'},
		{linkName: 'Dialogs', linkTo: 'dialogs'},
		{linkName: 'News', linkTo: 'news'},
		{linkName: 'Setting', linkTo: 'setting'},
		{linkName: 'Users', linkTo: 'users'}
	]
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case INIT_SUCCESS:
			return {
				...state,
				init: true
			}

		default:
			return state
	}
}

export const setInit = () => ({type: INIT_SUCCESS})

export const initApp = () => (dispatch) => {
	const promise = dispatch(getAuthUserData())
	Promise.all([promise])
		.then(() => {
			dispatch(setInit())
		})
	
}

export default appReducer