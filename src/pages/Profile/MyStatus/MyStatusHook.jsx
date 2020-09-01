import React from 'react'
import './MyStatus.css'

function MyStatusHook ({ status, updateStatus, isOwner}) {

	const [editMode, setEditMode] = React.useState(false)
	const [localStatus, setStatus] = React.useState(status)

	React.useEffect(() => {
		setStatus(status)
	}, [status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		updateStatus(localStatus)
	}

	const onStatusChange = (event) => {
		setStatus(event.target.value)
	}

	return (
		<div className="profileStatus">

			<>
				{!editMode && 
					<>
						<b>Status: </b>
						<span 
							onClick={isOwner ? activateEditMode : null}
						>
							{localStatus || '-----'}
						</span>	
					</>				
				}
			</>

			<>
				{editMode && 
					<>
						<b>Status: </b>
						<input 
							autoFocus={true}
							onChange={onStatusChange}
							onBlur={deactivateEditMode}
							value={localStatus} 
						/>	
					</>				
				}
			</>

		</div>
	)
}

export default MyStatusHook
