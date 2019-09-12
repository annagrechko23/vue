import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const LOGIN = "LOGIN";
const SET = "SET";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";


const state = {
	isLoggedIn: !!localStorage.getItem("token"),
	email: "",
}

const mutations = {
	[LOGIN](state) {
		state.pending = true;
	},
	[SET](state) {
	console.log(state)
		state.email = state;
	},
	[LOGIN_SUCCESS](state) {
		state.isLoggedIn = true;
		state.pending = false;
	},
	[LOGOUT](state) {
		state.isLoggedIn = false;
	}
}


const actions = {
	login({ commit }, creds) {
	  console.log("login...", creds);
		commit(LOGIN);
		commit(SET, creds);
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
	isLoggedIn: state => {
		return state.isLoggedIn
	},
	getEmail: state => {
		return state.email
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

