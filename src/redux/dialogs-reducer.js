import { dialogsAPI } from '../api/api'

const ADD_MESSAGE = 'dialogs-reducer/ADD_MESSAGE'
const DELETE_MESSAGE = 'dialogs-reducer/DELETE_MESSAGE'
const ADD_DIALOG = 'dialogs-reducer/ADD_DIALOG'
const SET_ALL_ACTIVE_DIALOGS = 'dialogs-reducer/SET_ALL_ACTIVE_DIALOGS'
const TOGGLE_IS_FETCHING = 'dialogs-reducer/TOGGLE_IS_FETCHING'
const SET_NEW_MESSAGES_SUCCESS = 'dialogs-reducer/SET_NEW_MESSAGES_SUCCESS'

let initialState = {
	isFetching: true,
	dialogsData: [],
	dialogsMessage: [],
	newMessages: 0
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {

		case ADD_MESSAGE:
			return {
				...state,
				dialogsMessage: [...state.dialogsMessage, action.newMessageBody]
			}

		case DELETE_MESSAGE:
			return {
				...state,
				dialogsMessage: state.dialogsMessage.filter(m => m.id !== action.messageId)
			}

		case ADD_DIALOG:
			return {
				...state,
				dialogsMessage: [...state.dialogsMessage, ...action.dialog]
			}

		case SET_ALL_ACTIVE_DIALOGS:
			return {
				...state,
				dialogsData: action.allDialogs
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case SET_NEW_MESSAGES_SUCCESS:
			return {
				...state,
				newMessages: action.count
			}

		default:
			return state

	}
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})
export const deleteMessageSuccess = (messageId) => ({type: DELETE_MESSAGE, messageId})
export const addDialog = (dialog, userId) => ({type: ADD_DIALOG, dialog, userId})
export const setDialogs = (allDialogs) => ({type: SET_ALL_ACTIVE_DIALOGS, allDialogs})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setNewMessagesSuccess = (count) => ({type: SET_NEW_MESSAGES_SUCCESS, count})

export const getDialogs = (isFetching) => {
	return async (dispatch) => {
		const response = await dialogsAPI.allDialogs()	
		const newMessages = await dialogsAPI.newMessages()
		dispatch(setDialogs(response.data))
		dispatch(setNewMessagesSuccess(newMessages.data))
		dispatch(toggleIsFetching(isFetching))
	}
}

export const deleteMessage = (messageId) => {
	return async (dispatch) => {
		const response = await dialogsAPI.deleteMessage(messageId)		
		if (response.data.resultCode === 0) {
			dispatch(deleteMessageSuccess(messageId))
		}
	}
}

export const addDialogUser = (userId) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true))
		const response = await dialogsAPI.dialogs(userId)	
		dispatch(addDialog(response.data.items, userId))
		dispatch(toggleIsFetching(false))
	}
}

export const sendMessage = (userId, body) => {
	return async (dispatch) => {
		const response = await dialogsAPI.sendMessage(userId, body)
		const refreshDialog = await	dialogsAPI.startChatting(userId)
		if (response.data.resultCode === 0 && refreshDialog.data.resultCode === 0){
			dispatch(addMessage(response.data.data.message))
		}
	}
}

export default dialogsReducer