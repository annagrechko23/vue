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
		updateUser(state, payload) {
			console.log(state, payload)
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
			commit('setAlbums', data);
		},
		async getProfile({ commit }) {
			const data = await this.$api.profile.get();
			console.log(data)
			commit('setUser', data);
		},
		async updateProfile({ commit }, payload) {
			const data = await this.$api.profile.put();
			console.log(data)
			commit('updateUser', payload);
		},
		async login({ commit }) {
			commit('login');
			const data = await this.$api.auth.post()
			commit('setToken', data.token);
			window.$cookies.set('token', data.token);
			this.$router.push("/playlist");
		},
		async refresh({ commit }) {
			const data = await this.$api.auth.patch()
			commit('setToken', data.token);
			window.$cookies.set('token', data.token);
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
		user: state => state.user
	}
});

