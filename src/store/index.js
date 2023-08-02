/** @format */
import getRandomInt from '@/helpers/getRandomInt';
import { createStore } from 'vuex';

export default createStore({
	state: {
		count: 1,
		lastMutation: 'none',
		isLoading: false,
		lastRandomInt: 0,
	},
	mutations: {
		increment(state) {
			state.count++;
			state.lastMutation = 'increment';
		},
		decrement(state) {
			state.count--;
			state.lastMutation = 'decrement';
		},
		incrementBy(state, value) {
			state.count += value;
			state.lastMutation = 'incrementBy';
			state.lastRandomInt = value;
		},
		setLoading(state, value) {
			state.isLoading = value;
		},
	},
	actions: {
		async incrementRandomInt({ commit }) {
			commit('setLoading', true);
			const randomInt = await getRandomInt();
			commit('incrementBy', randomInt);
			commit('setLoading', false);
		},
	},
});
