<template>
	<div id="portfolio">
		<div class="bg-slate-100 pt-36 dark:bg-dark">
			<div class="container">
				<Heading>
					<template #title>Portfolio</template>
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

		<div class="bg-slate-800 pt-36 pb-32 dark:bg-slate-100">
			<div class="container">
				<Heading>
					<template #title>Blogs</template>
					<template #sub>
						<div class="text-white dark:text-dark">Tulisan Terkini</div>
					</template>
					<template #desc>
						<div class="mx-auto max-w-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nam totam tempora. Quisquam odit molestiae explicabo, quibusdam dolorum praesentium accusantium?</div>
					</template>
				</Heading>

				<div class="flex flex-wrap justify-center">
					<div class="mb-8 w-full px-4 md:w-1/2 xl:w-1/4">
						<div class="overflow-hidden rounded-xl bg-slate-700 shadow-lg dark:bg-slate-100">
							<img src="@/assets/images/blogs/1.jpg" alt="programming" class="w-full" />
							<div class="py-8 px-6">
								<h3 class="mb-3 truncate">
									<a href="#" class="text-xl font-semibold text-white transition duration-300 hover:text-primary dark:text-dark">Tips Belajar Programmer</a>
								</h3>
								<p class="secondary-desc mb-6 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est hic voluptatibus quidem necessitatibus aperiam!</p>

								<a href="#" class="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white transition duration-300 hover:opacity-80 hover:shadow-xl">Baca Selengkapnya</a>
							</div>
						</div>
					</div>

					<div class="mx-auto mb-8 w-full px-4 md:w-1/2 xl:w-1/4">
						<div class="overflow-hidden rounded-xl bg-slate-700 shadow-lg dark:bg-slate-100">
							<img src="@/assets/images/blogs/2.jpg" alt="programming" class="w-full" />
							<div class="py-8 px-6">
								<h3 class="mb-3 truncate">
									<a href="#" class="text-xl font-semibold text-white transition duration-300 hover:text-primary dark:text-dark">Tips Belajar Programmer</a>
								</h3>
								<p class="secondary-desc mb-6 text-base">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores blanditiis sint, voluptatibus modi id praesentium totam cupiditate excepturi libero rem deserunt atque error aperiam?
								</p>

								<a href="#" class="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white transition duration-300 hover:opacity-80 hover:shadow-xl">Baca Selengkapnya</a>
							</div>
						</div>
					</div>

					<div class="mx-auto mb-8 w-full px-4 md:w-1/2 xl:w-1/4">
						<div class="overflow-hidden rounded-xl bg-slate-700 shadow-lg dark:bg-slate-100">
							<img src="@/assets/images/blogs/1.jpg" alt="programming" class="w-full" />
							<div class="py-8 px-6">
								<h3 class="mb-3 truncate">
									<a href="#" class="text-xl font-semibold text-white transition duration-300 hover:text-primary dark:text-dark">Tips Belajar Programmer</a>
								</h3>
								<p class="secondary-desc mb-6 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam!</p>

								<a href="#" class="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white transition duration-300 hover:opacity-80 hover:shadow-xl">Baca Selengkapnya</a>
							</div>
						</div>
					</div>

					<div class="mx-auto mb-8 w-full px-4 md:w-1/2 xl:w-1/4">
						<div class="overflow-hidden rounded-xl bg-slate-700 shadow-lg dark:bg-slate-100">
							<img src="@/assets/images/blogs/2.jpg" alt="programming" class="w-full" />
							<div class="py-8 px-6">
								<h3 class="mb-3 truncate">
									<a href="#" class="text-xl font-semibold text-white transition duration-300 hover:text-primary dark:text-dark">Tips Belajar Programmer</a>
								</h3>
								<p class="secondary-desc mb-6 text-base">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit dolore deserunt dolorem dicta, ad tempore exercitationem nobis laboriosam dolores mollitia error minima numquam enim.
								</p>

								<a href="#" class="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white transition duration-300 hover:opacity-80 hover:shadow-xl">Baca Selengkapnya</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Heading from '@/components/Heading.vue';
</script>
