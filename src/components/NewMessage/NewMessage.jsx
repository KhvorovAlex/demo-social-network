import React from 'react'
import { connect } from 'react-redux'
import './NewMessage.css'


class NewMessage extends React.Component {
	render(){
		if(this.props.newMessages) {
			return <span className="newMessage"> новых: {this.props.newMessages}</span>
		}
		return null
	}	
}

const mapStateToProps = (state) => ({
	newMessages: state.dialogsPage.newMessages
})

export default connect(mapStateToProps, null)(NewMessage)
