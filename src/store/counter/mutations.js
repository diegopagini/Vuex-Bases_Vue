/** @format */

export const increment = (state) => {
	state.count++;
	state.lastMutation = 'increment';
};

export const decrement = (state) => {
	state.count--;
	state.lastMutation = 'decrement';
};

export const incrementBy = (state, value) => {
	state.count += value;
	state.lastMutation = 'incrementBy';
	state.lastRandomInt = value;
};

export const setLoading = (state, value) => {
	state.isLoading = value;
};
