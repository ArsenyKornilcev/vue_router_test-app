<template>
	<router-view></router-view>
	<ul>
		<team-item
			v-for="team in teams"
			:key="team.id"
			:name="team.name"
			:member-count="team.members.length"
			:team-id="team.id"></team-item>
	</ul>
</template>

<script>
	import TeamItem from "./TeamItem.vue";

	export default {
		name: "TeamList",
		components: {
			TeamItem,
		},
		inject: ["teams"],
	};
</script>

<style scoped></style>
