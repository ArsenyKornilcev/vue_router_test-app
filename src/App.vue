<template>
	<the-navigation></the-navigation>
	<main>
		<div class="container">
			<router-view></router-view>
		</div>
	</main>
	<footer>
		<router-view name="footer"></router-view>
	</footer>
</template>

<script>
	import TheNavigation from "./components/nav/TheNavigation.vue";

	export default {
		name: "App",

		components: {
			TheNavigation,
		},

		data() {
			return {
				teams: [
					{
						id: "t1",
						name: "Frontend Engineers",
						members: ["u1", "u2"],
					},
					{
						id: "t2",
						name: "Backend Engineers",
						members: ["u1", "u2", "u3"],
					},
					{
						id: "t3",
						name: "Client Consulting",
						members: ["u4", "u5"],
					},
				],
				users: [
					{
						id: "u1",
						fullName: "Andrew Tate",
						role: "Engineer",
					},
					{
						id: "u2",
						fullName: "Tristan Tate",
						role: "Engineer",
					},
					{
						id: "u3",
						fullName: "Oleg Miami",
						role: "Engineer",
					},
					{
						id: "u4",
						fullName: "Vladimir Putin",
						role: "Consultant",
					},
					{
						id: "u5",
						fullName: "Alex Say",
						role: "Consultant",
					},
				],
			};
		},

		methods: {
		},

		provide() {
			return {
				teams: this.teams,
				users: this.users,
			};
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}
	html {
		font-family: sans-serif;
	}
	body {
		margin: 0;
	}
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 5vw;
	}
</style>
