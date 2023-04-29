<template>
	<div class="bg-slate-100 pt-36 dark:bg-dark">
		<div class="container">
			<Heading>
				<template #title>Projects</template>
				<template #sub> <div class="dark:text-white">Project Terbaru</div> </template>
				<template #desc> Beberapa karya saya selama belajar koding </template>
			</Heading>

			<div class="mb-10 px-8">
				<h2 class="mb-4 text-primary sm:text-2xl lg:text-3xl font-bold bg-dark dark:bg-slate-100 p-4 rounded-md">Flutter Projects</h2>

				<div class="" v-for="app in flutterApps" :key="app.source">
					<div class="mb-4">
						<h3 class="text-xl font-semibold text-dark dark:text-white">{{ app.name }}</h3>
						<p class="secondary-desc text-base">{{ app.desc }}</p>

						<a :href="app.source" class="text-md mt-4 inline-block rounded-md bg-primary py-2 px-4 font-medium text-white transition duration-300 hover:opacity-80 hover:shadow-xl"> source <Code class="inline h-4 w-4" /> </a>
					</div>

					<div class="flex w-full gap-5">
						<div class="overflow-hidden rounded-md shadow-lg" v-for="(screen, index) in app.screens" :key="index">
							<img class="object-cover" :src="screen" :alt="app.name" />
						</div>
					</div>
				</div>
			</div>

			<div class="px-8">
				<h2 class="mb-4 text-primary sm:text-2xl lg:text-3xl font-bold bg-dark dark:bg-slate-100 p-4 rounded-md">Web Projects</h2>

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

	import QuraniWelcome from '@/assets/images/flutter_app/qurani_welcome.png';
	import QuraniHomeSurah from '@/assets/images/flutter_app/qurani_home_surah.png';
	import QuraniHomeJuz from '@/assets/images/flutter_app/qurani_home_juz.png';
	import QuraniSurah from '@/assets/images/flutter_app/qurani_surah.png';

	const flutterApps = ref([
		{
			name: 'Qurani Mobile Application',
			desc: 'Flutter | GetX State Management',
			screens: [QuraniWelcome, QuraniHomeSurah, QuraniHomeJuz, QuraniSurah],
			source: 'https://github.com/muhamadhaspin/flutter_alquran',
		},
	]);

	const projects = ref([
		{
			image: Library,
			title: 'Library Application',
			desc: 'Laravel | Vue | Bootstrap | Axios',
			source: 'https://github.com/muhamadhaspin/library-project',
		},
		{
			image: POS,
			title: 'POS Application',
			desc: 'Laravel | JQuery | Bootstrap | Axios',
			source: 'https://github.com/muhamadhaspin/point-of-sale',
		},
		{
			image: Blog,
			title: 'Blog Application',
			desc: 'Laravel | Inertia | Vue | Tailwind',
			source: 'https://github.com/muhamadhaspin/blog_application',
		},
		{
			image: Travel,
			title: 'Travel Application',
			desc: 'Laravel | SCSS',
			source: 'https://github.com/muhamadhaspin/hayyah',
		},
		{
			image: Restaurant,
			title: 'Restaurant Orders Application',
			desc: 'Vue | Axios | Bootstrap',
			source: 'https://github.com/muhamadhaspin/vue3-restaurant',
		},
	]);
</script>
