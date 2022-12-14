<template>
	<div class="bg-slate-100 pt-36 dark:bg-dark">
		<div class="container">
			<Heading>
				<template #title>Projects</template>
				<template #sub> <div class="dark:text-white">Project Terbaru</div> </template>
				<template #desc> Beberapa karya saya selama belajar koding </template>
			</Heading>

			<div class="flex w-full flex-wrap justify-center px-4 pb-32">
				<div class="p-4 md:w-1/2 xl:w-1/3" v-for="project in projects" :key="project.title">
					<div class="mb-5 h-[200px] w-full overflow-hidden rounded-md shadow-lg">
						<img :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
					</div>

					<h3 class="text-xl font-semibold text-dark dark:text-white">{{ project.title }}</h3>
					<p class="secondary-desc text-base">{{ project.desc }}</p>

					<a :href="project.source" class="text-md mt-4 inline-block rounded-md bg-primary py-2 px-4 font-medium text-white transition duration-300 hover:opacity-80 hover:shadow-xl"> source <Code class="inline h-4 w-4" /> </a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Heading from '@/components/Heading.vue';
	import Code from '@/components/Icons/Code.vue';
	import { ref } from 'vue';

	// Import images
	import LandingPage404 from '@/assets/images/portfolio/landingPage404.jpg';
	import Blog from '@/assets/images/portfolio/blog-1.png';
	import Restaurant from '@/assets/images/portfolio/restaurant-1.png';
	import Travel from '@/assets/images/portfolio/travel-2.png';
	import Library from '@/assets/images/portfolio/library-1.png';
	import POS from '@/assets/images/portfolio/pos-2.png';

	const projects = ref([
		{
			image: Library,
			title: 'Library Application',
			desc: 'sistem perpustakaan untuk pemijaman buku',
			source: 'https://github.com/muhamadhaspin/library-project',
		},
		{
			image: POS,
			title: 'POS Application',
			desc: 'sistem point of sale untuk mengelola akunting',
			source: 'https://github.com/muhamadhaspin/point-of-sale',
		},
		{
			image: Blog,
			title: 'Blog Application',
			desc: 'sistem blog untuk menulis postingan',
			source: 'https://github.com/muhamadhaspin/blog_application',
		},
		{
			image: Travel,
			title: 'Travel Application',
			desc: 'aplikasi untuk booking travel',
			source: 'https://github.com/muhamadhaspin/hayyah',
		},
		{
			image: Restaurant,
			title: 'Restaurant Orders Application',
			desc: 'aplikasi untuk memesan makanan',
			source: 'https://github.com/muhamadhaspin/vue3-restaurant',
		},
	]);
</script>
