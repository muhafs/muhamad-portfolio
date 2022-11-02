<template>
	<header class="navbar-fixed dark: top-0 left-0 z-50 flex w-full items-center bg-transparent dark:bg-slate-800 dark:bg-opacity-80">
		<div class="container">
			<div class="relative flex items-center justify-between">
				<div class="px-4">
					<router-link to="/" class="block py-6 text-lg font-bold text-primary">muhamadhaspin</router-link>
				</div>

				<div class="flex items-center px-4">
					<button @click="burgerActive = !burgerActive" type="button" class="absolute right-4 block lg:hidden" :class="{ 'hamburger-active': burgerActive }">
						<span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
						<span class="hamburger-line transition duration-300 ease-in-out"></span>
						<span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
					</button>

					<nav
						class="absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-md dark:shadow-slate-800 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent lg:dark:shadow-none"
						:class="{ hidden: !burgerActive }"
					>
						<ul class="block lg:flex">
							<li class="group">
								<router-link :to="{ name: 'home' }" class="mx-8 flex py-2 text-base text-dark transition group-hover:text-primary dark:text-white">Home</router-link>
							</li>
							<li class="group">
								<router-link :to="{ name: 'portfolio' }" class="mx-8 flex py-2 text-base text-dark transition group-hover:text-primary dark:text-white">Portfolio</router-link>
							</li>

							<li class="mx-8 flex items-center justify-center">
								<div class="mt-3 flex items-center gap-3 lg:mt-0">
									<span class="text-sm text-slate-800 dark:text-slate-300">Light</span>

									<label>
										<input type="checkbox" class="hidden" v-model="isDark" @click="toggleDark()" />
										<div class="flex h-5 w-9 cursor-pointer items-center rounded-full p-1 transition duration-300" :class="[isDark ? 'bg-primary' : 'bg-slate-500']">
											<div class="h-3 w-3 rounded-full bg-white transition duration-300" :class="{ 'translate-x-4': isDark }"></div>
										</div>
									</label>

									<span class="text-sm text-slate-800 dark:text-slate-300">Dark</span>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { ref } from 'vue';
	import { useDark, useToggle } from '@vueuse/core';

	const burgerActive = ref(false);

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>
