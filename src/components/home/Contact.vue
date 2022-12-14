<template>
	<div class="pt-36 pb-32 dark:bg-dark">
		<div class="container">
			<Heading>
				<template #title>Contact</template>
				<template #sub> <div class="dark:text-white">Hubungi Kami</div> </template>

				<template #desc> silahkan hubungi saya lewat form kontak di bawah ini jika ada yang ingin di kepoin, hehe </template>
			</Heading>

			<form @submit.prevent="sendEmail()">
				<div class="mx-auto w-full lg:w-2/3">
					<div class="mb-8 w-full px-4">
						<label for="name" class="text-base font-bold text-primary">Nama</label>
						<input id="name" type="text" class="mt-2 w-full rounded-md bg-slate-200 p-3 text-dark transition duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" v-model="form.name" />
					</div>

					<div class="mb-8 w-full px-4">
						<label for="email" class="text-base font-bold text-primary">Email</label>
						<input id="email" type="email" class="mt-2 w-full rounded-md bg-slate-200 p-3 text-dark transition duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" v-model="form.email" />
					</div>

					<div class="mb-8 w-full px-4">
						<label for="message" class="text-base font-bold text-primary">Pesan</label>
						<textarea id="message" class="mt-2 h-32 w-full rounded-md bg-slate-200 p-3 text-dark transition duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" v-model="form.message"></textarea>
					</div>

					<div class="w-full px-4">
						<button type="submit" class="w-full rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg">Kirim</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
	import Heading from '@/components/Heading.vue';
	import axios from 'axios';
	import swal from 'sweetalert';
	import { reactive } from 'vue';

	const form = reactive({
		name: '',
		email: '',
		message: '',
	});

	const sendEmail = () => {
		if (!form.name || !form.email || !form.message) {
			swal({
				title: 'Oops!',
				text: 'Sepertinya ada yang kurang nih!',
				icon: 'warning',
				button: {
					text: 'coba lagi!',
				},
				timer: 5000,
			});

			return;
		}

		axios
			.post('https://formspree.io/f/xaykrzve', form)
			.then((res) => {
				form.name = '';
				form.email = '';
				form.message = '';

				swal({
					title: 'Horray!',
					text: 'Terimakasih telah menghubungi saya!',
					icon: 'success',
					button: {
						text: 'selesai!',
					},
					timer: 5000,
				});
			})
			.catch((err) => {
				swal({
					title: 'Oops!',
					text: 'Sepertinya ada yang salah!',
					icon: 'error',
					button: {
						text: 'tutup!',
					},
					timer: 5000,
				});
			});
	};
</script>
