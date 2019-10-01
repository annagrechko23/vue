import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		token: '',
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
		setAlbums(state, data) {
			state.albums = data;
		},
		setUser(state, data) {
			state.user = data;
		},
		favorites(state, data) {
			state.albums = data;
		},
		updateUser(state, payload) {
			state.user = payload;
		},
		setToken(state, data) {
			state.token = data;
		},
		logout(state) {
			state.token = '';
		},
	},

	actions: {
    async init({ commit, dispatch }) {
      const token = window.$cookies.get("token");
      if (token) {
        commit('setToken', token);
        await Promise.all([
          dispatch('getAlbums'),
          dispatch('getProfile')
        ]);
      }
      this.subscribe(({ type, payload }) => {
        switch (type) {
          case 'setToken':
            window.$cookies.set('token', payload);
            break;
          case 'logout':
            window.$cookies.remove('token');
            break;
        }
      });
    },
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
		async login({ commit, dispatch }) {
			const { token, ...user } = await this.$api.auth.signin();
			await Promise.all([
				 commit('setToken', token),
				 commit('setUser', user),
				 dispatch('getAlbums'),
			]);
			this.$router.push({
        path: '/playlist',
        meta: {
          requiresAuth: true,
        }
      });
		},
		async signup({ commit, dispatch }, payload) {

      const { token, ...user } = await this.$api.auth.signup();
			commit('setToken', token);
      commit('setUser', user);
      dispatch('getAlbums');
			this.$router.push("/playlist");
		},
		async refresh({ commit }) {
			const { token } = await this.$api.auth.refresh();
			commit('setToken', token);
		},
		async changeEmail({ commit }, payload) {
			const user = await this.$api.profile.put(payload);
			commit('updateUser', user);
		},
		async getFavourites({ commit, state }, payload) {
			state.albums = state.albums.map((element, index) => {
				if (element.id === payload.id) {
					this.$api.albums.put({
						id: payload.id,
						payload: payload,
					})
					return { ...state.albums[index], favourite: payload.favourite };
				}
				return element
			});
			commit('favorites', state.albums);

    },
		async logout({ commit }) {
			await this.$api.auth.signout()
			commit('logout');
		}
	},
	getters: {
		isAuth: state => Boolean(state.token),
		favourites: state => state.albums.filter(al => al.favourite)
	},

});

