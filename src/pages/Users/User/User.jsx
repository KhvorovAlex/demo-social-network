import React from 'react'
import userPhoto from '../../../assets/img/user-logo.png'
import { NavLink } from 'react-router-dom'
import './User.css'

function User({ user, requestInProgress, follow, unfollow }) {
	return (
		<div className="user">
			<div className="user_avatar">
				<NavLink to={'/profile/' + user.id} >
					<img 
						className="avatar_img"
						src={user.photos.small ? user.photos.small : userPhoto} 
						alt={user.name}/>
				</NavLink>

				
				<div className="user_body">
					<div className="user_name">
						<span><b>Name: </b> {user.name}</span>
					</div>
					{user.status && 
						<div className="user_status">
							<span><b>status: </b>{user.status}</span>
						</div>
					}						
				</div>	
			</div>
			{user.followed 
				?   <button								
						disabled={requestInProgress.some(id => id === user.id)} 
						onClick={() => {unfollow(user.id)}}
						type="button"
						className="btn btn-secondary"
					>
						UNFOLLOW
					</button>						
				:   <button									
						disabled={requestInProgress.some(id => id === user.id)} 
						onClick={() => {follow(user.id)}}
						type="button"
						className="btn btn-primary"
					>
						FOLLOW
					</button>
			}
		</div>
	)
}

export default User
