import React from 'react'

class MyStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({editMode: true})
	}

	deactivateEditMode = () => {
		this.setState({editMode: false})
		this.props.updateStatus(this.state.status)
	}

	updateStatus = (event) => {
		this.setState({status: event.target.value})
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.status !== this.props.status){
			this.setState({status: this.props.status})
		}
	}
	
	render(){
		return (
			<div>

				<div>
					{!this.state.editMode && 
						<span onClick={this.activateEditMode}>{this.props.status || '-----'}</span>}
				</div>

				<div>
					{this.state.editMode && 
						<input 
							autoFocus={true}
							onChange={this.updateStatus}
							onBlur={this.deactivateEditMode} 
							value={this.state.status} />}
				</div>

			</div>
		)
	}
}

export default MyStatus
