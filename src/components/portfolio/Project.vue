<template>
	<div class="bg-slate-100 pt-36 dark:bg-dark">
		<div class="container">
			<Heading>
				<template #title>Projects</template>
				<template #sub> <div class="dark:text-white">Project Terbaru</div> </template>
				<template #desc> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ad fuga ipsum animi nesciunt architecto. </template>
			</Heading>

			<div class="flex w-full flex-wrap justify-center px-4 pb-32">
				<div class="p-4 md:w-1/2 xl:w-1/3">
					<div class="mb-5 overflow-hidden rounded-md shadow-md">
						<img src="@/assets/images/portfolio/landingPage404.jpg" alt="Landing Page" class="w-full" />
					</div>

					<h3 class="text-xl font-semibold text-dark dark:text-white">Landing Page</h3>
					<p class="secondary-desc text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias minus commodi excepturi! Alias, at.</p>
				</div>

				<div class="p-4 md:w-1/2 xl:w-1/3">
					<div class="mb-5 overflow-hidden rounded-md shadow-md">
						<img src="@/assets/images/portfolio/landingPage404.jpg" alt="Landing Page" class="w-full" />
					</div>

					<h3 class="text-xl font-semibold text-dark dark:text-white">Landing Page</h3>
					<p class="secondary-desc text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias minus commodi excepturi! Alias, at.</p>
				</div>

				<div class="p-4 md:w-1/2 xl:w-1/3">
					<div class="mb-5 overflow-hidden rounded-md shadow-md">
						<img src="@/assets/images/portfolio/landingPage404.jpg" alt="Landing Page" class="w-full" />
					</div>

					<h3 class="text-xl font-semibold text-dark dark:text-white">Landing Page</h3>
					<p class="secondary-desc text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias minus commodi excepturi! Alias, at.</p>
				</div>

				<div class="p-4 md:w-1/2 xl:w-1/3">
					<div class="mb-5 overflow-hidden rounded-md shadow-md">
						<img src="@/assets/images/portfolio/landingPage404.jpg" alt="Landing Page" class="w-full" />
					</div>

					<h3 class="text-xl font-semibold text-dark dark:text-white">Landing Page</h3>
					<p class="secondary-desc text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias minus commodi excepturi! Alias, at.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Heading from '@/components/Heading.vue';
</script>
