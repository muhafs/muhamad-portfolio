<template>
	<NavBar />

	<router-view v-slot="{ Component, route }" mode="out-in">
		<transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
			<component :is="Component" class="absolute top-0 left-0 w-full h-full" />
		</transition>
	</router-view>
</template>

<script setup>
	import NavBar from '@/components/NavBar.vue';
</script>

<style></style>
