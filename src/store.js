import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies';
import routes from "./routes";
import instance from './helpers/interceptors.js';

Vue.use(Vuex);
Vue.use(VueCookies);


const LOGIN = "LOGIN";
const SET_EMAIL = "SET_EMAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SET_FAVORITES = "SET_FAVORITES";
const SET_PLAYLIST = "SET_PLAYLIST";
const LOGOUT = "LOGOUT";
const SET_ALBUMS = "SET_ALBUMS";
const SET_PROFILE = "SET_PROFILE";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";


const state = {
	token: window.$cookies.get("token"),
	isLoggedIn: !!window.$cookies.get("token"),
	favourites: [],
	playlist: [],
	albums: [],
	profile: [],
	current: {
		firstName: '',
		email: '',
		src: '',
 }
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
	[SET_PROFILE](state, action) {
		state.profile = action;
	},
	[UPDATE_FIRST_NAME](state, action) {
		state.firstName = action;
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
	setUser({ commit }) {
		instance.get('/profile/')
			.then(function (response) {
				commit(SET_PROFILE, response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	},
	updateCurrent(state, payload) {
    Object.assing(state.current, payload)
  },
	setFavourites({ commit }, event) {
		commit(SET_FAVORITES, event);
	},
	updateFirstName({ commit }, event) {
		commit(UPDATE_FIRST_NAME, event);
	},
	setPlaylist({ commit }, event) {
		commit(SET_PLAYLIST, event);
	},
	async setLogin({ commit }) {
		commit(LOGIN);
		await instance.post('/auth/signin')
			.then(function (response) {
				const { token } = response.data;
				window.$cookies.set('token', token);

				commit(LOGIN_SUCCESS);
			})
			.catch(function (error) {
				console.error(error);
			});
	},
	refreshToken:() => {
		return new Promise((resolve, reject) => {
			instance.patch('/auth/refresh')
			.then((response) => {
				console.log(response)
				const { token } = response.data;
				window.$cookies.set('token', token);
			})
			.catch((error) =>{
				reject(error);
			})
		})
	},
	async setLogout({ commit }) {



		await instance.post('/auth/signout')
			.then(function (response) {
				const { token } = response.data;
				window.$cookies.remove('token');

				commit(LOGOUT);
			})
			.catch(function (error) {
				console.error(error);
			});
	}
}

const getters = {
	isLoggedIn: state => state.isLoggedIn,
	getEmail: state => state.email,
	getFavourites: state => state.favourites,
	getPlaylist: state => state.playlist,
	getAlbums: state => state.albums,
	getProfile: state => state.profile,
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

