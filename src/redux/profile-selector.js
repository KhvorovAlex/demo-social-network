export const getUserProfileSelector = (state) => {
	return state.profilePage.userProfile
}

export const getUserProfileStatusSelector = (state) => {
	return state.profilePage.status
}

export const getIsFetchingSelector = (state) => {
	return state.profilePage.isFetching
}


