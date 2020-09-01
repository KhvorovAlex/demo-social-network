export const getUsersSelector = (state) => {
	return state.usersPage.users
}

export const getPageSizeSelector = (state) => {
	return state.usersPage.pageSize
}

export const getTotalCountUsersSelector = (state) => {
	return state.usersPage.totalCountUsers
}

export const getCurrentPageSelector = (state) => {
	return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state) => {
	return state.usersPage.isFetching
}

export const getRequestInProgressSelector = (state) => {
	return state.usersPage.requestInProgress
}