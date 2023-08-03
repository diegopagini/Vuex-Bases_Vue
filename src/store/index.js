/** @format */
import { createStore } from 'vuex';

import counterState from './counter';

export default createStore({
	modules: {
		counter: counterState,
	},
});
