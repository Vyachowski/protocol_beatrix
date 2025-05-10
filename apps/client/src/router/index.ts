import AppInitializer from "@/components/AppInitializer.vue";
import AppLayout from "@/layouts/AppLayout.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "root",
			component: AppLayout,
			children: [
				{
					path: "",
					name: "home",
					component: AppInitializer,
				},
			],
		},
		{
			path: "/sign-in",
			name: "sign-in",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AuthView.vue"),
		},
	],
});

export default router;
