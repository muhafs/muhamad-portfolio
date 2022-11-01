import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import PortfolioPage from '@/pages/PortfolioPage.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: PortfolioPage,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
