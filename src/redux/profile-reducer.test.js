import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profile-reducer';

const state = {
	postsData: [
		{id: 1, message: 'Привет, как дела?', likesCount: 10},
		{id: 2, message: 'Я отправил тебе пропсы', likesCount: 2},
		{id: 3, message: 'Попробуй прочитай', likesCount: 15},
	]
}


test('Пост добавлен', () => {
	const action = addPostActionCreator('sanya, privet!')

	const newState = profileReducer(state, action)

	expect(newState.postsData.length).toBe(4);
})

test('Текст поледне добавленного поста', () => {
	const action = addPostActionCreator('sanya, privet!')

	const newState = profileReducer(state, action)

	expect(newState.postsData[3].message).toBe('sanya, privet!');
})

test('Пост удален', () => {
	const postId = 3

	const action = deletePostActionCreator(postId)
	const newState = profileReducer(state, action)

	expect(newState.postsData.length).toBe(2)
})

  