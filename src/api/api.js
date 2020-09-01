import axios from 'axios'

const axiosInst = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '5ba345f8-29a4-4d9f-83bf-efaa59c593a9'
	}
})

export const usersAPI = {
	
	getUsers(currentPage = 1, pageSize = 10){
		return axiosInst
				.get(`users?page=${currentPage}&count=${pageSize}`)
				.then(response => response.data)
	},

	getUserProfile(userId){
		console.warn('Этот метод устаревший, используйте более новый метод из profileAPI')
		return profileAPI.getProfile(userId)
	},

	followUser(userId){
		return axiosInst
				.post(`follow/${userId}`)
				.then(response => response.data)
	},
	
	unfollowUser(userId){
		return axiosInst
				.delete(`follow/${userId}`)
				.then(response => response.data)
	}
}

export const profileAPI = {
	getProfile(userId){
		return axiosInst.get(`profile/${userId}`)
				.then(response => response.data)
	},

	getStatus(userId){
		return axiosInst.get(`profile/status/${userId}`)
	},

	editStatus(newStatus){
		return axiosInst.put(`profile/status`, {status: newStatus})
	},

	saveAvatar(img){
		const data = new FormData()
		data.append('image', img)
		return axiosInst.put(`profile/photo`, data)
	},

	saveProfile(profile){
		return axiosInst.put(`profile`, profile)
	}
}

export const authAPI = {

	me(){
		return axiosInst
				.get(`auth/me`)
				.then(response => response.data)
	},

	login(email, password, rememberMe, captcha){
		return axiosInst.post(`auth/login`, {email, password, rememberMe, captcha})
	},

	logout(){
		return axiosInst.delete(`auth/login`)
	}
}

export const securityAPI = {
	сaptcha(){
		return axiosInst.get(`security/get-captcha-url`)			
	}
}

export const dialogsAPI = {
	allDialogs(){
		return axiosInst.get(`dialogs`)			
	},

	dialogs(userId){
		return axiosInst.get(`dialogs/${userId}/messages`)			
	},

	startChatting(userId){
		return axiosInst.put(`dialogs/${userId}`)		
	},

	sendMessage(userId, body){
		return axiosInst.post(`dialogs/${userId}/messages`, {body})			
	},

	newMessages(){
		return axiosInst.get(`dialogs/messages/new/count`)			
	},

	deleteMessage(messageId){
		return axiosInst.delete(`dialogs/messages/${messageId}`)			
	}
}



