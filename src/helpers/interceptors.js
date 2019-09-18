import Vue from "vue";
import axios from 'axios';
import router  from '../routes';
import store from '../store.js';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

const instance = axios.create({
	baseURL: 'http://localhost:4000/api',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		withCredentials: true,
		'Authorization': window.$cookies.get("token")
	}
});
// instance.interceptors.request.use(request => {
//
//
// 	// Get token from auth.js store
// 	const token = store.state.token
// 	console.log(request.headers.common)
// 	// Update token axios header
// 	if (token) {
// 		request.headers.common['Authorization'] = token
// 	}
// 	return request
// });
instance.interceptors.response.use(undefined, (error) => {
	console.log(error.response.data)
	if (error.response && error.response.status === 401) {

		// router.replace('/login');
		router.push({ path: 'login' })
	}
	if (error != null && error.response.status == 419) {

		console.log(error.response.data[0].msg)
		// Logout user if token refresh didn't work or user is disabled
		// if (error.config.url == '/api/albums' || error.response.data[0].msg == 'Token Expired Error') {
		//
		// 	store.dispatch('setLogout');
		// 	// router.push({ name: 'root' });
		// 	// return new Promise((resolve, reject) => {
		// 	// 	reject(error);
		// 	// });
		// }


		return new Promise((resolve, reject) => {
			instance.patch('/auth/refresh')
			.then((response) => {
				const { token } = store.state.token;
				// New request with new token
				const config = error.config;
				config.headers['Authorization'] = `Bearer ${token}`;

				return new Promise((resolve, reject) => {
					axios.request(config).then(response => {
						resolve(response);
					}).catch((error) => {
						reject(error);
					})
				});

			})
			.catch((error) => {
				return new Promise((resolve, reject) => {
					reject(error);
				});
			});
		})
	}
	return Promise.reject(error.response.data);
});

// instance.interceptors.response.use((res) => {
//
// 	return Promise.resolve(res);
// }, (error) => {
// 	if (error != null && error.response.status == 419) {
//
//
// 		// Logout user if token refresh didn't work or user is disabled
// 		if (error.config.url == '/api/albums' || error.response.message == 'Account is disabled.') {
//
// 			console.log('blg')
// 			// window.$cookies.remove("token")
// 			router.push({ name: 'root' });
// 			return new Promise((resolve, reject) => {
// 				reject(error);
// 			});
// 		}
//
//
// 		return new Promise((resolve, reject) => {
// 			instance.patch('/auth/refresh')
// 			.then((response) => {
// 				const { token } = response.data;
// 				// New request with new token
// 				const config = error.config;
// 				config.headers['Authorization'] = `Bearer ${token}`;
//
// 				return new Promise((resolve, reject) => {
// 					axios.request(config).then(response => {
// 						resolve(response);
// 					}).catch((error) => {
// 						reject(error);
// 					})
// 				});
//
// 			})
// 			.catch((error) => {
// 				return new Promise((resolve, reject) => {
// 					reject(error);
// 				});
// 			});
// 		})
// 	}
// 	if (error != null && error.response.status == 401) {
// 		console.log('blg')
// 		store.dispatch('setLogout');
// 		// window.location = '/login';
//
// 	}
// 	return Promise.reject(error);
// })

export default instance