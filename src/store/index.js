/** @format */
import { createStore } from 'vuex';

export default createStore({
	state: {
		count: 1,
		lastMutation: 'none',
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
		},
	},
});
