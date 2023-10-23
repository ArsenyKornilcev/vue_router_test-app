<template>
	<div class="content">
		<button @click="confirmInput">Back</button>
		<ul>
			<user-item
				v-for="user in users"
				:key="user.id"
				:name="user.fullName"
				:role="user.role"></user-item>
		</ul>
	</div>
</template>

<script>
	import UserItem from "./UserItem.vue";

	export default {
		name: "UserList",
		components: {
			UserItem,
		},
		inject: ["users"],
		methods: {
			confirmInput() {
				this.$router.push("/teams");
			},
		},
	};
</script>

<style scoped>
	.content {
		margin-top: 30px;
	}
	button {
		padding: 8px 16px;
		font-weight: bold;
		border: 1px solid transparent;
		background: #e9e9e9;
		transition: .3s ease;
		cursor: pointer;
	}
	button:hover {
		background: #dddddd;
		border: 1px solid #222
	}
</style>
