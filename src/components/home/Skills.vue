<template>
	<div class="bg-slate-800 pt-36 pb-32 dark:bg-slate-100">
		<div class="container">
			<Heading>
				<template #title>Skills</template>
				<template #sub> <div class="text-white dark:text-dark">Yang Saya Kuasai</div> </template>
				<template #desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, minus. </template>
			</Heading>

			<div class="w-full px-4">
				<div class="flex flex-wrap items-center justify-center gap-12">
					<HTML class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
					<CSS class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
					<JavaScript class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
					<SCSS class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
					<Vue class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
					<PHP class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
					<Laravel class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
					<MySQL class="h-16 w-16 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Heading from '@/components/Heading.vue';
	import HTML from '../Icons/HTML.vue';
	import CSS from '../Icons/CSS.vue';
	import JavaScript from '../Icons/JavaScript.vue';
	import SCSS from '../Icons/SCSS.vue';
	import Vue from '../Icons/Vue.vue';
	import PHP from '../Icons/PHP.vue';
	import Laravel from '../Icons/Laravel.vue';
	import MySQL from '../Icons/MySQL.vue';
</script>
