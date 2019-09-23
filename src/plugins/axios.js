import Axios from 'axios';

export default {
	install(Vue, { store }) {
		const axios = Axios.create({
			baseURL: 'http://localhost:4000/api'
		});

		axios.interceptors.request.use(
			config => {
				config.headers.authorization = store.state.token;
				return config;
			}
		);

		axios.interceptors.response.use(
			async response => response.data,
			async error => {
				if (error.response) {
					const { status } = error.response;
					if (status === 401) {
						await store.dispatch('setLogout');
					} else if (status === 419) {
						await store.dispatch('refresh')
							.then(() => {
								// axios.request(error.config)
								store.dispatch('getProfile')
								store.dispatch('getAlbums')
							});
					}
				} else {
					throw new Error(error.message || 'error.network');
				}
			}
		);
		store.subscribe((mutation) => {
			if (mutation.type === 'setToken') {
				window.$cookies.set('token', mutation.payload);
			}
		});
		const api = {
			profile: {
				get: () => axios.get('/profile'),
				put: data => axios.put('/profile', data)
			},
			albums: {
				get: () => axios.get('/albums'),
				put: ({ id, payload }) => axios.put(`/albums/${id}`, payload)
			},
			auth: {
				post: () => axios.post('/auth/signin'),
				patch: data => axios.patch('/auth/refresh', data),
				signout: () => axios.post('/auth/signout'),
				signup: data => axios.post('/auth/signup', data)
			},
		};

		Vue.prototype.$axios = axios;
		Vue.prototype.$api = api;
		store.$axios = axios;
		store.$api = api;
	}
};
