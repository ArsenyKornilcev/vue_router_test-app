<template>
	<section>
		<h2>{{ teamName }}</h2>
		<ul>
			<user-item
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role">
			</user-item>
		</ul>
		<router-link :to="nextTeamURL">Go to next team</router-link>
	</section>
</template>

<script>
	import UserItem from "../users/UserItem.vue";

	export default {
		name: "TeamMembers",
		components: { UserItem },
		data() {
			return {
				teamId: "",
				teamName: "",
				members: [],
			};
		},
		inject: ["users", "teams"],
		methods: {
			loadTeamMembers(route) {
				if (!route.params.teamId) {
					return
				}

				this.teamId = route.params.teamId;
				// Получаем нужную команду
				const currentTeam = this.teams.find(
					(team) => team.id == this.teamId
				);

				// Актуализируем название команды
				this.teamName = currentTeam.name;

				// Получаем все id членов команды
				const teamMemberIds = currentTeam.members;

				// Актуализируем членов команды
				this.members = this.users.filter((user) =>
					teamMemberIds.includes(user.id)
				);
			},
		},
		computed: {
			nextTeamURL() {
				let computedPart = "";
				const currentId = parseInt(this.teamId.substring(1));
				const lastId = parseInt(this.teams[this.teams.length - 1].id.substring(1));
				const firstId = parseInt(this.teams[0].id.substring(1));

				if (currentId < lastId) {
					computedPart = currentId + 1;
				} else {
					computedPart = firstId;
				}

				return "/teams/t" + computedPart;
			},
		},
		created() {
			this.loadTeamMembers(this.$route);
		},
		watch: {
			$route(newRoute) {
				this.loadTeamMembers(newRoute);
			}
		}
	};
</script>

<style>
	section {
		margin: 2rem auto;
		max-width: 40rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		border-radius: 12px;
	}
	h2 {
		margin: 0.5rem 0;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
</style>
