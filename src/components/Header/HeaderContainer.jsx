import React from 'react'
import Header from './Header'
import { logoutUser } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { getIsAuthSelector, getLoginSelector } from '../../redux/auth-selector'

class HeaderContainer extends React.Component {	

	render(){
		return <Header {...this.props} />
	}	
}

const mapStateToProps = (state) => ({
	isAuth: getIsAuthSelector(state),
	login: getLoginSelector(state)
})

const mapDispatchToProps = {
	logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
