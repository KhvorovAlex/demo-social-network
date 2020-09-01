import React from 'react'
import Dialogs from './Dialogs'
import { addMessage, getDialogs } from './../../redux/dialogs-reducer'
import { withAuthRedirect } from '../../components/HOC/withAuthRedirect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getDialogsMessageSelector, getDialogsDataSelector } from '../../redux/dialogs-selector'
import Preloader from '../../components/Preloader/Preloader'

class DialogsAPIContainer extends React.Component {	

	componentDidMount(){		
		this.props.getDialogs(false)		
	}

	render(){
		if (this.props.isFetching) {
			return <Preloader />
		}
		return <Dialogs {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	dialogsMessage: getDialogsMessageSelector(state),
	dialogsData: getDialogsDataSelector(state),
	isFetching: state.dialogsPage.isFetching	
})

const mapDispatchToProps = {
	addMessage,
	getDialogs
}



export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(DialogsAPIContainer)