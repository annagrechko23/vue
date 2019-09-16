import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


const instance = axios.create({
	baseURL: 'http://localhost:4000/api',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'authorization': localStorage.getItem("token")
	}
});

Vue.use(Vuex);

const LOGIN = "LOGIN";
const SET_EMAIL = "SET_EMAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SET_FAVORITES = "SET_FAVORITES";
const SET_PLAYLIST = "SET_PLAYLIST";
const LOGOUT = "LOGOUT";
const SET_ALBUMS = "SET_ALBUMS";


const state = {
	isLoggedIn: !!localStorage.getItem("token"),
	email: '',
	favourites: [],
	playlist: [],
	albums: [],
}

const mutations = {
	[LOGIN](state) {
		state.pending = true;
	},
	[SET_EMAIL](state, action) {
		state.email = action;
	},
	[SET_ALBUMS](state, action) {
		state.albums = action;
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
	setAlbums({ commit }) {
		instance.get('/albums/')
			.then(function (response) {
				commit(SET_ALBUMS, response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	},
	setFavourites({ commit }, event) {
		commit(SET_FAVORITES, event);
	},
	setPlaylist({ commit }, event) {
		commit(SET_PLAYLIST, event);
	},
	async setLogin({ commit }, creds) {
		commit(LOGIN);
		await instance.post('/auth/signin')
			.then(function (response) {
				const { token } = response.data;

				localStorage.setItem("token", token);
				commit(LOGIN_SUCCESS);
			})
			.catch(function (error) {
				console.error(error);
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
	getAlbums: state => state.albums,
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

