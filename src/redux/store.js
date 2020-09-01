import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {

	dispatch(action){
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._renderEntireTree(this._state)
	},

	_renderEntireTree() {
		console.log('Changed STATE')
	},

	subscribe(observer) {
		this._renderEntireTree = observer
	},

	getState() {
		return this._state
	},

	_state: {
		dialogsPage: {
			dialogsData: [
				{name: 'Димыч', id: 1},
				{name: 'Андрей', id: 2},
				{name: 'Валера', id: 3},
				{name: 'Вадос', id: 4},
				{name: 'Света', id: 5},
			],
			dialogsMessage: [
				{id: 1, message: 'Хах'},
				{id: 2, message: 'Как дела Мэн?'},
				{id: 3, message: 'Ты чего молчишь друже?'},
				{id: 4, message: 'Ну и ладно... я пошел гулять один'},
			],
			newDialogsTextValue: ''
		},
		profilePage: {
			postsData: [
				{id: 1, message: 'Привет, как дела?', likesCount: 10},
				{id: 2, message: 'Я отправил тебе пропсы', likesCount: 2},
				{id: 3, message: 'Попробуй прочитай', likesCount: 15},
			],
			newPostTextValue: ''
		},
		sidebar: {}
	}
}

export default store

window.store = store