import React from 'react'
import './DialogContainer.css'
import Preloader from '../../../components/Preloader/Preloader'
import { connect } from 'react-redux'
import { addDialogUser, sendMessage, deleteMessage } from '../../../redux/dialogs-reducer'
import { getDialogSelector } from '../../../redux/dialogs-selector'
import { getUserIdSelector } from '../../../redux/auth-selector'
import Dialog from './Dialog'

export class DialogCotainer extends React.Component {

	componentDidMount(){
		if (this.props.dialog.length === 0) {
			const userId = this.props.match.params.userId	
			this.props.addDialogUser(userId)
		}			
	}

	render() {		
		if (this.props.isFetching) {
			return <Preloader />
		}					
		return <Dialog {...this.props} />				
	}
}

const mapStateToProps = (state, props) => ({
	isFetching: state.dialogsPage.isFetching,
	dialog: getDialogSelector(state, props),
	authoraizedUserId: getUserIdSelector(state)
})

const mapDispatchToProps = {
	addDialogUser,
	sendMessage,
	deleteMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogCotainer) 
