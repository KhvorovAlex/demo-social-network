import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from './Users'
import { toggleInRequestProgress, getUsersThunkCreator, onChangePageThunkCreator, unfollowThunkCreator, followThunkCreator } from '../../redux/users-reducer'
import Preloader from '../../components/Preloader/Preloader'
import { getUsersSelector, getRequestInProgressSelector, getIsFetchingSelector, getPageSizeSelector, getTotalCountUsersSelector, getCurrentPageSelector } from '../../redux/users-selector'


class UsersAPIComponent extends React.Component {
	componentDidMount(){
		const {currentPage, pageSize} = this.props
		this.props.getUsersThunkCreator(currentPage, pageSize)
	}

	onChangePage = (page) => {
		this.props.onChangePageThunkCreator(page, this.props.pageSize)
	}

	render(){
		return (
			<>
				{this.props.isFetching 
					? <Preloader />
					: <Users totalCountUsers={this.props.totalCountUsers}
							 pageSize={this.props.pageSize}
							 currentPage={this.props.currentPage}
							 users={this.props.users}
							 onChangePage={this.onChangePage}
							 follow={this.props.followThunkCreator}
							 unfollow={this.props.unfollowThunkCreator}
							 requestInProgress={this.props.requestInProgress}
							 toggleInRequestProgress={this.props.toggleInRequestProgress}/>
				}
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	users: getUsersSelector(state),
	pageSize: getPageSizeSelector(state),
	totalCountUsers: getTotalCountUsersSelector(state),
	currentPage: getCurrentPageSelector(state),
	isFetching: getIsFetchingSelector(state),
	requestInProgress: getRequestInProgressSelector(state)
})

const mapDispatchToProps = {
	toggleInRequestProgress,
	getUsersThunkCreator,
	onChangePageThunkCreator,
	unfollowThunkCreator,
	followThunkCreator
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(UsersAPIComponent)