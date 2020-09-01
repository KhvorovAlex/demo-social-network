import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getProfileUserThunkCreator, getProfileStatus, updateStatus, saveUserAvatar, saveProfile } from '../../redux/profile-reducer' 
import { withRouter } from 'react-router-dom'
import { getUserProfileSelector, getUserProfileStatusSelector, getIsFetchingSelector } from '../../redux/profile-selector'
import { getIsAuthSelector, getUserIdSelector } from '../../redux/auth-selector'
import { toggleIsFetching } from '../../redux/users-reducer'
import { sendMessage } from '../../redux/dialogs-reducer'

class ProfileContainer extends React.Component {
	
	state = {
		editMode: false
	}

	toggleEditMode = () => {		
		this.setState({editMode: !this.state.editMode})
	}

	loadProfile(){
		let userId = this.props.match.params.userId 
		if (!userId){
			userId = this.props.authoraizedUserId

			if (!userId) {
				this.props.history.push('/login')
				return
			}
		}
		
		this.props.getProfileUserThunkCreator(userId)
		this.props.getProfileStatus(userId)		
	}

	componentDidMount(){
		this.loadProfile()
	}

	componentDidUpdate(prevProps){		
		if(this.props.match.params.userId !== prevProps.match.params.userId) {
			this.loadProfile()				
		}
		if(this.props.authoraizedUserId !== prevProps.authoraizedUserId) {
			this.loadProfile()				
		}
	}

	render(){
		return <Profile 
					{...this.props}				
					isOwner={!this.props.match.params.userId}
					toggleEditMode={this.toggleEditMode}
					editMode={this.state.editMode}/>
		}
}

const mapStateToProps = (state) => ({
	userProfile: getUserProfileSelector(state),
	status: getUserProfileStatusSelector(state),
	isAuth: getIsAuthSelector(state),
	authoraizedUserId: getUserIdSelector(state),
	isFetching: getIsFetchingSelector(state)
})

const mapDispatchToProps = {
	getProfileUserThunkCreator,
	getProfileStatus,
	updateStatus,
	toggleIsFetching,
	saveUserAvatar,
	saveProfile,
	sendMessage
}

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)