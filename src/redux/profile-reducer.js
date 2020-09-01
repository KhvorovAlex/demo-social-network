import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'profile-reducer/ADD_POST'
const SET_PROFILE_USER = 'profile-reducer/SET_PROFILE_USER_POST'
const SET_STATUS = 'profile-reducer/SET_STATUS'
const DELETE_POST = 'profile-reducer/DELETE_POST'
const TOGGLE_IS_FETCHING = 'profile-reducer/TOGGLE_IS_FETCHING'
const SET_PROFILE_PHOTOS = 'profile-reducer/SET_PROFILE_PHOTOS'

let postId = 0

let initialState = {
	postsData: [],
	userProfile: null,
	isFetching: false,
	status: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case ADD_POST:
			postId++
			return {
				...state,
				postsData: [...state.postsData, {id: postId, message: action.newPostText, likesCount: 0}]
			}

		case DELETE_POST:
			return {
				...state,
				postsData: state.postsData.filter( post => post.id !== action.postId )
			}

		case SET_PROFILE_USER:
			return {
				...state, userProfile: action.userProfile
			}

		case SET_STATUS:
			return {
				...state, status: action.profileStatus
			}

		case SET_PROFILE_PHOTOS:
			return {
				...state, userProfile: {...state.userProfile, photos: action.photos}
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching
			}
		
		default:
			return state
	}
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})
export const setProfileUser = (userProfile) => ({type: SET_PROFILE_USER, userProfile})
export const setStatus = (profileStatus) => ({type: SET_STATUS, profileStatus})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setProfilePhoto = (photos) => ({type: SET_PROFILE_PHOTOS, photos})

export const getProfileUserThunkCreator = (userId) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true))		
		const response = await usersAPI.getUserProfile(userId)	
		dispatch(setProfileUser(response))
		dispatch(toggleIsFetching(false))
	}
}

export const getProfileStatus = (userId) => {
	return async (dispatch) => {
		const response = await profileAPI.getStatus(userId)
		dispatch(setStatus(response.data))		
	}
}

export const updateStatus = (newStatus) => {
	return async (dispatch) => {
		const response = await profileAPI.editStatus(newStatus)
		if (response.data.resultCode === 0) {
			dispatch(setStatus(newStatus))
		}
	}
}

export const saveUserAvatar = (img) => {
	return async (dispatch) => {
		const response = await profileAPI.saveAvatar(img)	
		if (response.data.resultCode === 0) {
			dispatch(setProfilePhoto(response.data.data.photos))	
		}
	}
}

export const saveProfile = (profile) => {
	return async (dispatch) => {
		const response = await profileAPI.saveProfile(profile)
		if (response.data.resultCode === 0) {
			dispatch(setProfileUser(profile))
			return true			
		} else {
			return response.data.messages
		}
	}
}


export default profileReducer