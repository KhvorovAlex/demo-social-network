import React from 'react'
import css from './Post.module.css'

function Post({ message, likesCount }) {
	return (	
		<div className={css.item}>
			<img src="https://www.asdorural.com/upload/resize_cache/iblock/23a/1170_1063_2/23ad1cde8221351dc15fcb631d1a89cd.png" alt=""/>
			<span>{message}</span>
			<div>like {likesCount}</div>
		</div>
	)
}

export default Post
