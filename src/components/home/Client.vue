<template>
	<div class="bg-slate-800 pt-36 pb-32 dark:bg-slate-100">
		<div class="container">
			<Heading>
				<template #title>Clients</template>
				<template #sub> <div class="text-white dark:text-dark">Yang Pernah Bekerjasama</div> </template>
				<template #desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, minus. </template>
			</Heading>

			<div class="w-full px-4">
				<div class="flex flex-wrap items-center justify-center">
					<a href="#" class="mx-4 max-w-[50px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100 lg:mx-6 xl:mx-8">
						<img src="@/assets/images/clients/google.svg" alt="google" class="w-full" />
					</a>
					<a href="#" class="mx-4 max-w-[50px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100 lg:mx-6 xl:mx-8">
						<img src="@/assets/images/clients/youtube.svg" alt="youtube" class="w-full" />
					</a>
					<a href="#" class="mx-4 max-w-[50px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100 lg:mx-6 xl:mx-8">
						<img src="@/assets/images/clients/whatsapp.svg" alt="whatsapp" class="w-full" />
					</a>
					<a href="#" class="mx-4 max-w-[50px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100 lg:mx-6 xl:mx-8">
						<img src="@/assets/images/clients/instagram.svg" alt="instagram" class="w-full" />
					</a>
					<a href="#" class="mx-4 max-w-[50px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 dark:opacity-100 lg:mx-6 xl:mx-8">
						<img src="@/assets/images/clients/snapchat.svg" alt="snapchat" class="w-full" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Heading from '@/components/Heading.vue';
</script>
