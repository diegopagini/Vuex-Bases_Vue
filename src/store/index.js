/** @format */
import getRandomInt from '@/helpers/getRandomInt';
import { createStore } from 'vuex';

export default createStore({
	state: {
		count: 1,
		lastMutation: 'none',
		isLoadin: false,
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
	},
	actions: {
		async incrementRandomInt(context) {
			const randomInt = await getRandomInt();
			context.commit('incrementBy', randomInt);
		},
	},
});
