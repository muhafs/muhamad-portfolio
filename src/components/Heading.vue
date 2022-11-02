<template>
	<div class="w-full px-4">
		<div class="mx-auto mb-16 text-center">
			<h4 class="mb-2 text-lg font-semibold text-primary sm:text-2xl lg:text-3xl">
				<slot name="title"></slot>
			</h4>

			<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
				<slot name="sub"></slot>
			</h2>

			<p class="secondary-desc text-base md:text-lg">
				<slot name="desc"></slot>
			</p>
		</div>
	</div>
</template>
