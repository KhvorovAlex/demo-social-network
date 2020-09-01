import React from 'react'
import userPhoto from '../../../assets/img/user-logo.png'
import './MyAvatar.css'

function MyAvatar({ userProfile, saveUserAvatar, isOwner}) {

	const uploadAvatarImg = (e) => {
		if (e.target.files.length) {
			const img = e.target.files[0]
			saveUserAvatar(img)			
		}
	}

	return (
		<div className="profile__avatar">

			<div className="avatar">
				<div className="avatar__img">
					<img 
						src={userProfile.photos.large || userPhoto} 
						alt="Фото профиля"
					/>
				</div>	
				
				{isOwner && 
					<div className="input-group">				
						<span className="file-input btn btn-outline-secondary btn-sm btn__file">
							Загрузить аватар...
							<input type="file" onChange={uploadAvatarImg} />
							</span>
					</div>
				}
			</div>		

		</div>
	)
}

export default MyAvatar
