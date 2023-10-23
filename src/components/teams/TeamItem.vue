<template>
	<li>
		<h3>{{ name }}</h3>
		<div class="team-members">{{ memberCount }} Members</div>
		<router-link :to="teamMemberLink">View Members</router-link>
	</li>
</template>

<script>
	export default {
		name: "TeamItem",
		props: ["name", "memberCount", "teamId"],
		computed: {
			teamMemberLink() {
				return {
					name: "team-members",
					params: {
						teamId: this.teamId,
					},
					query: {
						sort: "abc",
					},
				};
			},
		},
	};
</script>

<style scoped>
	li {
		margin: 1rem 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 12px;
		padding: 1rem;
	}
	h3 {
		margin: 0.5rem 0;
	}
	.team-members {
		margin-bottom: 10px;
	}
	a {
		padding: 6px 18px;
		background: #004a68;
		color: #fff;
		text-decoration: none;
	}
</style>
