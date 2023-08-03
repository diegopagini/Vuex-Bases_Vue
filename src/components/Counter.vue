<!-- @format -->

<template>
	<h1>Counter - Vuex</h1>
	<h2>Direct access: {{ $store.state.counter.count }}</h2>
	<h2>Computed: {{ countComputed }}</h2>

	<button
		:disabled="isLoading"
		@click="onIncrement"
	>
		+1
	</button>
	<button
		:disabled="isLoading"
		@click="onIncrementBy"
	>
		random
	</button>
	<button
		:disabled="isLoading"
		@click="onDecrement"
	>
		-1
	</button>
	<div>{{ $store.state.isLoading ? 'loading...' : '' }}</div>

	<h2>mapState {{ count }}</h2>
	<h2>lastMutation {{ lastMutation }}</h2>
	<h2>lastRandomInt {{ lastRandomInt }}</h2>

	<h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
	import { mapState, mapActions } from 'vuex';

	export default {
		name: 'counter-component',
		methods: {
			onIncrement() {
				this.$store.commit('counter/increment');
			},
			onDecrement() {
				this.$store.commit('counter/decrement');
			},
			// ...mapActions('counter', ['incrementRandomInt']),
			...mapActions('counter', {
				onIncrementBy: 'incrementRandomInt',
			}),
		},
		computed: {
			countComputed() {
				return this.$store.state.counter.count;
			},
			// ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
			...mapState({
				count: (state) => state.counter.count,
				lastMutation: (state) => state.counter.lastMutation,
				lastRandomInt: (state) => state.counter.lastRandomInt,
				isLoading: (state) => state.counter.isLoading,
			}),
		},
	};
</script>
