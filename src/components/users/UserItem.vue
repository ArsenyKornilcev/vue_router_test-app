<template>
	<li>
		<h3>{{ name }}</h3>
		<div class="role" :class="roleClass">{{ role }}</div>
	</li>
</template>

<script>
	export default {
		name: "UserItem",
		props: ["name", "role"],
		computed: {
			roleClass() {
				if (this.role === "Engineer") {
					return "role--engineer";
				}
				if (this.role === "Consultant") {
					return "role--consultant";
				}
				return "";
			},
		},
	};
</script>

<style scoped>
	li {
		margin: 1rem 0;
		border: 1 solid #ccc;
		padding: 1rem;
		border: 3px solid #e7e7e7
	}
	h3 {
		margin: 0.5rem 0;
	}
	.role {
		border-radius: 40px;
		background: #ccc;
		color: #252525;
		padding: 0.25rem 1rem;
		display: inline-block;
	}
	.role--engineer {
		background-color: blue;
		color: #fff;
	}
	.role--consultant {
		background-color: #af003a;
		color: #fff;
	}
</style>
