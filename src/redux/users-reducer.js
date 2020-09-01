import { usersAPI } from "../api/api"

const FOLLOW = 'users-reducer/FOLLOW'
const UNFOLLOW = 'users-reducer/UNFOLLOW'
const SET_USERS = 'users-reducer/SET_USERS'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT_USERS = 'users-reducer/SET_TOTAL_COUNT_USERS'
const TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IN_REQUEST_PROGRESS = 'users-reducer/TOGGLE_IN_REQUEST_PROGRESS'

const initialState = {
	users: [],
	pageSize: 20, //число отображаемых пользователей
	totalCountUsers: 0, //общее число пользователей в БД
	currentPage: 1,
	isFetching: true,
	requestInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {

		case FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})
			}

		case SET_USERS:
			return {
				...state, users: action.users
			}

		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currrentPage
			}

		case SET_TOTAL_COUNT_USERS:
			return {
				...state, totalCountUsers: action.count
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching
			}

		case TOGGLE_IN_REQUEST_PROGRESS:
			return {
				...state,
				requestInProgress: action.isRequest 
					? [...state.requestInProgress, action.userId]
					: state.requestInProgress.filter(id => id !== action.userId)
			}

		default:
			return state

	}
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currrentPage) => ({type: SET_CURRENT_PAGE, currrentPage})
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleInRequestProgress = (isRequest, userId) => ({type: TOGGLE_IN_REQUEST_PROGRESS, isRequest, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		const response = await usersAPI.getUsers(currentPage, pageSize)		
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(response.items))
		dispatch(setTotalCountUsers(response.totalCount))	
	}
}

export const onChangePageThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(setCurrentPage(currentPage))
		dispatch(toggleIsFetching(true))
		const response = await usersAPI.getUsers(currentPage, pageSize)			
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(response.items))
		dispatch(setTotalCountUsers(response.totalCount))	
	}
}

export const unfollowThunkCreator = (userId) => {
	return async (dispatch) => {
		dispatch(toggleInRequestProgress(true, userId))
		const response = await usersAPI.unfollowUser(userId)		
		if (response.resultCode === 0) {
			dispatch(unfollow(userId))
		}
		dispatch(toggleInRequestProgress(false, userId))	
	}
}

export const followThunkCreator = (userId) => {
	return async (dispatch) => {
		dispatch(toggleInRequestProgress(true, userId))
		const response = await usersAPI.followUser(userId)	
		if (response.resultCode === 0) {
			dispatch(follow(userId))
		}
		dispatch(toggleInRequestProgress(false, userId))
	
	}
}

export default usersReducer