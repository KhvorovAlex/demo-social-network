export const getDialogsMessageSelector = (state) => {
	return state.dialogsPage.dialogsMessage
}

export const getDialogsDataSelector = (state) => {
	return state.dialogsPage.dialogsData
}

export const dialogItemSelector = (state) => {
	return state.dialogsPage.dialogsMessage
}

export const getDialogSelector = (state, props) => {
	return state.dialogsPage.dialogsMessage.filter( dialog => Number(dialog.recipientId) === Number(props.match.params.userId))	 
}