import React from 'react'
import './ProfileDescription.css'

function ProfileDescription({ userProfile }) {
	return (		
		<div className="avatar__description">
			
			<div className="avatar__descriptionItem">
				<h3><b>Full name: </b></h3>
				<span className="avatar__descriptionText">
					{userProfile.fullName}
				</span>
			</div>

			<div className="avatar__descriptionItem">
				<h3><b>About me: </b></h3>
				<span className="avatar__descriptionText">
					{userProfile.aboutMe || 'Hello, its me single page'}
				</span>
			</div>	

			{userProfile.lookingForAJob &&
				<div className="avatar__descriptionItem">
					<h3><b>lookingForAJobDescription: </b></h3>
					<span className="avatar__descriptionText">
						{userProfile.lookingForAJobDescription}
					</span>
				</div>				
			}
		
			{Object.values(userProfile.contacts).filter( contact => contact).length > 0 && 
				<div className="avatar__descriptionItem">
					<h3><b>Contacts:</b></h3>
					{Object.keys(userProfile.contacts).map( contact => 
						<div className="avatar__descriptionList" key={contact}>
							{userProfile.contacts[contact] &&
								<>
									<h4><b>{contact}: </b></h4>
									<span className="avatar__descriptionText">
										{userProfile.contacts[contact]}
									</span>
								</>}
						</div>
					)}
				</div>
			}
		</div>
	)
}

export default ProfileDescription
