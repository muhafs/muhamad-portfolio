<template>
	<div class="w-full px-4">
		<div class="mx-auto text-center mb-16">
			<h4 class="font-semibold text-lg sm:text-2xl lg:text-3xl text-primary mb-2">
				<slot name="title"></slot>
			</h4>

			<h2 class="font-bold text-3xl text-dark mb-4 sm:text-4xl lg:text-5xl">
				<slot name="sub"></slot>
			</h2>

			<p class="secondary-desc text-base md:text-lg">
				<slot name="desc"></slot>
			</p>
		</div>
	</div>
</template>
