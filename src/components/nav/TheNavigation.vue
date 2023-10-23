<template>
	<header>
		<nav>
			<ul>
				<li>
					<router-link to="/teams">Teams</router-link>
				</li>
				<li>
					<router-link to="/users">Users</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "TheNavigation",
		methods: {

		},
	};
</script>

<style scoped>
	header {
		width: 100%;
		height: 5rem;
		background: #00565c;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	a {
		border: 1px solid transparent;
		transition: 0.3s ease;
		padding: 8px 16px;
		text-decoration: none;
		color: #fff;
		background: #00909b;
	}
	a:hover {
		border-color: aqua;
	}
	a:active {
		background: #00565c;
		color: #fff;
	}
</style>
