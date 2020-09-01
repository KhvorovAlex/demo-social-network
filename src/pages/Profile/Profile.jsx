import React from 'react'
import css from './Profile.module.css'

import MyPostsContainer from './MyPosts/MyPostsContainer'
import MyAvatar from './MyAvatar/MyAvatar'
import MyBackground from './MyBackground/MyBackground'
import Preloader from '../../components/Preloader/Preloader'
import MyStatusHook from './MyStatus/MyStatusHook'
import ProfileDescription from './ProfileDescription/ProfileDescription'
import ProfileDescriptionForm from './ProfileDescriptionForm/ProfileDescriptionForm'
import SendMessageToUser from '../../components/SendMessageToUser/SendMessageToUser'

const Profile = ({ isAuth, match, sendMessage, userProfile, status, updateStatus, isFetching, saveUserAvatar, isOwner, toggleEditMode, editMode, saveProfile }) => {
		
	return (
		<>
			{ !userProfile || isFetching
				? <Preloader/> 
				: 	<div className={css.profile}>
						<MyBackground />
						
						<div className={css.profile__body}>
							<MyAvatar 
								userProfile={userProfile} 
								saveUserAvatar={saveUserAvatar} 
								isOwner={isOwner}/>

							<MyStatusHook 
								status={status} 
								updateStatus={updateStatus}
								isOwner={isOwner}/>

							{isOwner && 
								<button 
									className="btn btn-outline-secondary btn-sm" 
									onClick={toggleEditMode}
								>
									Редактировать
								</button>}							

							{editMode 
								? <ProfileDescriptionForm 
										userProfile={userProfile} 
										saveProfile={saveProfile} 
										toggleEditMode={toggleEditMode}/>
								: <ProfileDescription 
										userProfile={userProfile}/>}

							{(isAuth && !isOwner) && <SendMessageToUser 
											sendMessage={sendMessage}
											userId={match.params.userId}/>}
							
							{isOwner && <MyPostsContainer />}
						</div>
					</div>
			}
		</>
	)
}

export default Profile
