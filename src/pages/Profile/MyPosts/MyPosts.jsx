import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post'
import SendPost from './SendPost/SendPost'

function MyPosts({ profilePage, addPost }) {
	return (
		<div className={css.profile__posts}>
			<SendPost
				addPost={addPost}/>

			<div className={css.posts}>
				{profilePage.postsData.map( post => 
					<Post
						key={'postKey_' + post.id}
						postId={post.id}
						message={post.message}
						likesCount={post.likesCount}
					/>
				)}
			</div>		
		</div>
	)
}

export default MyPosts
