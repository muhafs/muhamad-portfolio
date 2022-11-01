<template>
	<NavBar />

	<router-view v-slot="{ Component }" mode="out-in">
		<transition mode="out-in" name="fade">
			<component :is="Component" />
		</transition>
	</router-view>

	<Footer />
</template>

<script setup>
	import NavBar from '@/components/NavBar.vue';
	import Footer from '@/components/Footer.vue';
</script>

<style></style>
