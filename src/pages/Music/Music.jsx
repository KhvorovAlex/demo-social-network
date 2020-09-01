import React from "react"

// All route props (match, location and history) are available to User
function Music(props) {
  return (	
	<div className="music">
		<h1>Hello {props.match.params.musicName}!</h1>
		<ul>
 			<li className="music__style">{1}</li>
			<li className="music__style">{2}</li>
		</ul>
	</div>
  )
}

export default Music