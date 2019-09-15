import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const LOGIN = "LOGIN";
const SET_EMAIL = "SET_EMAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SET_FAVORITES = "SET_FAVORITES";
const SET_PLAYLIST = "SET_PLAYLIST";
const LOGOUT = "LOGOUT";


const state = {
	isLoggedIn: !!localStorage.getItem("token"),
	email: '',
	favourites: [],
	playlist: [],
}

const mutations = {
	[LOGIN](state) {
		state.pending = true;
	},
	[SET_EMAIL](state, action) {
		state.email = action;
	},
	[SET_FAVORITES](state, action) {
		state.favourites.push(action);
	},
	[SET_PLAYLIST](state, action) {
		state.playlist.push(action);
	},
	[LOGIN_SUCCESS](state, action) {
		state.isLoggedIn = true;
		state.email = action;
		state.pending = false;
	},
	[LOGOUT](state) {
		state.isLoggedIn = false;
	},
}


const actions = {
	setEmail({ commit }, event) {
		commit(SET_EMAIL, event);
	},
	setFavourites({ commit }, event) {
		commit(SET_FAVORITES, event);
	},
	setPlaylist({ commit }, event) {
		commit(SET_PLAYLIST, event);
	},
	setLogin({ commit }, creds) {
		commit(LOGIN);

		return new Promise(resolve => {
			setTimeout(() => {
				localStorage.setItem("token", "JWT");
				commit(LOGIN_SUCCESS);
				resolve();
			}, 1000);
		});
	},
	logout({ commit }) {
		localStorage.removeItem("token");
		commit(LOGOUT);
	}
}

const getters = {
	isLoggedIn: state => state.isLoggedIn,
	getEmail: state => state.email,
	getFavourites: state => state.favourites,
	getPlaylist: state => state.playlist,
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

