/** @format */
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import state from './state';

const counterState = {
	namespaced: true,
	// as data
	state,
	// as methods
	mutations,
	actions,
	// as computed
	getters,
};

export default counterState;
