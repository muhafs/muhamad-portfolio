import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import PortfolioPage from '@/pages/PortfolioPage.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
		meta: {
			enterClass: 'animate__animated animate__fadeInLeft',
			leaveClass: 'animate__animated animate__fadeOutRight',
		},
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: PortfolioPage,
		meta: {
			enterClass: 'animate__animated animate__fadeInRight',
			leaveClass: 'animate__animated animate__fadeOutLeft',
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
