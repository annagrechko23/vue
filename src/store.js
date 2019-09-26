import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		token: window.$cookies.get("token"),
		favourites: [],
		playlist: [],
		albums: [],
		profile: [],
		user: {
			email: '',
			id: '',
			image: '',
			name: '',
			surnname: ''
		}
	},

	mutations: {
		login(state) {
			state.pending = true;
		},
		setAlbums(state, data) {
			state.albums = data;
		},
		setUser(state, data) {
			state.user = data;
		},
		favorites(state, data) {
			state.albums = state.albums.map((element, index) => {
				if (element.id === data.id) {
					this.$api.albums.put({
						id: data.id,
						payload: data,
					})
					return { ...state.albums[index], favourite: data.favourite };
				}
				return element
			});
		},
		updateUser(state, payload) {
			state.user = payload;
		},
		setToken(state, data) {
			state.token = data;
		},
		loginSuccess(state, action) {
			state.token = true;
			state.email = action;
			state.pending = false;
		},
		logout(state) {
			state.token = false;
		},
	},

	actions: {
		async getAlbums({ commit }) {
			const data = await this.$api.albums.get();
			if (!data) return;
			commit('setAlbums', data);
		},
		async getProfile({ commit }) {
			const data = await this.$api.profile.get();
			if (!data) return;
			commit('setUser', data);
		},
		async updateProfile({ commit }, payload) {
			await this.$api.profile.put(payload);
			commit('updateUser', payload);
		},
		async login({ commit }) {
			commit('login');
			const data = await this.$api.auth.post();
			commit('setToken', data.token);
			this.$router.push("/playlist");
		},
		async refresh({ commit }) {
			const data = await this.$api.auth.patch();
			commit('setToken', data.token);
		},
		async changeEmail({ commit }, payload) {
			await this.$api.profile.put(payload);
			commit('updateUser', payload);
		},
		async getFavourites({ commit }, payload) {
			commit('favorites', payload);
		},
		async setLogout({ commit }) {
			await this.$api.auth.post()
			window.$cookies.remove('token');
			commit('logout');
		}
	},
	getters: {
		isAuth: state => Boolean(state.token),
		setAlbums: state => state.albums,
		user: state => state.user,
		favourites: state => state.albums.filter(al => al.favourite)
	},

});
store.subscribe((mutation) => {
	if (mutation.type === 'setToken') {
		window.$cookies.set('token', mutation.payload);
	}
});