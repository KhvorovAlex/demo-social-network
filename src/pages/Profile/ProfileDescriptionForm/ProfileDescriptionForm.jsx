import React from 'react'
import { Form, Field } from 'react-final-form'

import './../ProfileDescription/ProfileDescription.css'


function ProfileDescriptionForm ({ userProfile, saveProfile, toggleEditMode }) {

	const onSubmit = async (profile) => {
		let result = await saveProfile(profile)				
		if (result !== true) {
			result = result[0].split('->').slice(-1)
			result = result[0].substring(0, result[0].length - 1).toLowerCase()	
			return { contacts: {
						[result] : 'Invalid URL format' 
					}
			}
		}
		toggleEditMode()
	}

	return (
		<Form
			initialValues={userProfile}
			onSubmit={onSubmit}			
			render ={({ handleSubmit, submitting, pristine, values  }) => (
				<form onSubmit={handleSubmit}>
					<div className="avatar__description">
						<div className="avatar__descriptionItem">
							<h3><b>Full name: </b></h3>
							<Field 
								name="fullName"
								render={({ input, meta }) => (								
									<input 
										{...input} 
										placeholder="Full name"/>														
								)}
							/>
						</div>
						<div className="avatar__descriptionItem">
							<h3><b>About me: </b></h3>
							<Field 
								name="aboutMe"							
								render={({ input, meta }) => (
									<input 
										{...input} 
										placeholder="About me"/>
								)}
							/>	
						</div>
						<div className="avatar__descriptionItem">
							<h3><b>lookingForAJob: </b></h3>
							<Field 
								name="lookingForAJob" 																			
								render={({ input }) => (								
									<input 
										{...input} 
										type="checkbox" 
										checked={input.value ? input.value : false}/>														
								)} 
							/>
						</div>			
						<div className="avatar__descriptionItem">
							<h3><b>lookingForAJobDescription: </b></h3>
							<Field 
								name="lookingForAJobDescription" 
								render={({ input }) =>(
									<input 
										{...input} 
										placeholder="Description for a job" 
										disabled={!values.lookingForAJob}/>
								)}							
							/>
						</div>		
						<div className="avatar__descriptionItem">
							<h3><b>Contacts:</b></h3>
							{Object.keys(userProfile.contacts).map( contact => 
								<div className="avatar__descriptionList" key={contact}>
									<h4><b>{contact}: </b></h4>
									<Field	
										name={`contacts.${contact}`}
										render={({ input, meta }) => (
											<>
											<input {...input} placeholder={contact} className={meta.submitError && "input__error"}/>
												{meta.submitError &&
													<span> {meta.submitError} </span>}
											</>											
										)}
									/>								
								</div>
							)}
						</div>
					</div>
					<button
						className="btn btn-outline-secondary btn-sm"  
						disabled={submitting || pristine}
					>save
					</button>
				</form>
			)}
		/>
	)
}

export default ProfileDescriptionForm
