<template>
	<header class="bg-transparent navbar-fixed top-0 left-0 w-full flex items-center z-50">
		<div class="container">
			<div class="flex items-center justify-between relative">
				<div class="px-4">
					<router-link to="/" class="font-bold text-lg text-primary block py-6">muhamadhaspin</router-link>
				</div>

				<div class="flex items-center px-4">
					<button @click="burgerActive = !burgerActive" type="button" class="block absolute right-4 lg:hidden" :class="{ 'hamburger-active': burgerActive }">
						<span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
						<span class="hamburger-line transition duration-300 ease-in-out"></span>
						<span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
					</button>

					<nav class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none" :class="{ hidden: !burgerActive }">
						<ul class="block lg:flex">
							<li class="group">
								<router-link :to="{ name: 'home' }" class="flex text-base text-dark py-2 mx-8 group-hover:text-primary transition">Home</router-link>
							</li>
							<li class="group">
								<router-link :to="{ name: 'protfolio' }" class="flex text-base text-dark py-2 mx-8 group-hover:text-primary transition">Portfolio</router-link>
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

	const burgerActive = ref(false);
</script>
