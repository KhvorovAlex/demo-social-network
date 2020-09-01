import React from 'react'
import Pagination from '../../components/Pagination/Pagination'
import User from './User/User'

function Users (props) {
	return (
		<div>		
			
			{props.users.map( u =>
				<User 
					user={u} 
					requestInProgress={props.requestInProgress}
					unfollow={props.unfollow}	
					follow={props.follow}
					key={u.id}
				/>
			)}

			<Pagination 
				totalCountUsers={props.totalCountUsers} 
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onChangePage={props.onChangePage}
				pageRangeDisplayed={5}
			/>

		</div>
	)
	
}

export default Users
