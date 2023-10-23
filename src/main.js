import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import TeamList from "@/components/teams/TeamList";
import UserList from "@/components/users/UserList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/nav/NotFound";
import TeamFooter from "@/components/teams/TeamFooter";
import UserFooter from "@/components/users/UserFooter";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: "/teams",
		},
		{
			name: "teams",
			path: "/teams",
			components: {
				default: TeamList,
				footer: TeamFooter,
			},
			children: [
				{
					name: "team-members",
					path: ":teamId",
					component: TeamMembers,
					props: true,
				},
			],
		},
		{
			path: "/users",
			components: {
				default: UserList,
				footer: UserFooter,
			},
		},
		{
			path: "/:notFound(.*)",
			component: NotFound,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		console.log(to, from, savedPosition);
		if (savedPosition) {
			return savedPosition;
		}

		return {
			left: 0,
			top: 0,
		};
	},
});
const app = createApp(App);

app.use(router);
app.mount("#app");
