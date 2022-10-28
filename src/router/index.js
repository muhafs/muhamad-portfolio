import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ProtfolioPage from '@/pages/ProtfolioPage.vue';

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
		path: '/protfolio',
		name: 'protfolio',
		component: ProtfolioPage,
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
