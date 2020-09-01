// import React from 'react'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { addPostActionCreator } from './../../../redux/profile-reducer'

const mapStateTopProps = (state) => ({
	profilePage: state.profilePage
})

const mapDispatchTopProps = (dispatch) => ({
	addPost: (newPostText) => {
		const action = addPostActionCreator(newPostText)
		dispatch(action)
	}
})

export default connect(mapStateTopProps, mapDispatchTopProps)(MyPosts)