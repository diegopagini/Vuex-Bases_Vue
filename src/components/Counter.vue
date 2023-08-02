<!-- @format -->

<template>
	<h1>Counter - Vuex</h1>
	<h2>Direct access: {{ $store.state.count }}</h2>
	<h2>Computed: {{ countComputed }}</h2>

	<button @click="onIncrement">+1</button>
	<button @click="onIncrementBy">random</button>
	<button @click="onDecrement">-1</button>

	<h2>mapState {{ count }}</h2>
	<h2>lastMutation {{ lastMutation }}</h2>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'counter-component',
		methods: {
			onIncrement() {
				this.$store.commit('increment');
			},
			onDecrement() {
				this.$store.commit('decrement');
			},
			onIncrementBy() {
				this.$store.commit('incrementBy', 10);
			},
		},
		computed: {
			countComputed() {
				return this.$store.state.count;
			},
			...mapState({
				count: (state) => state.count,
				lastMutation: (state) => state.lastMutation,
			}),
		},
	};
</script>
