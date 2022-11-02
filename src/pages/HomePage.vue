<template>
	<div id="home">
		<Hero />

		<Client />

		<Contact />
	</div>
</template>

<script setup>
	import Hero from '@/components/home/Hero.vue';
	import Client from '@/components/home/Client.vue';
	import Contact from '@/components/home/Contact.vue';
</script>
