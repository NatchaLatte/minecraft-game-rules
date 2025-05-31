<script lang="ts">
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('.brand', { opacity: 0, x: 100, duration: 1, stagger: 0.1 });
		gsap.from('.brand-lang', { opacity: 0, duration: 1, delay: 1.6 });
		gsap.from('.icon-lang', { rotation: 360, duration: 1 });
	});

	const toggleLanguage = () => {
		if (getLocale() === 'th-th') {
			setLocale('en');
		} else {
			setLocale('th-th');
		}
	};
</script>

<nav class="bg-black p-10 md:px-20">
	<div class="flex items-center justify-between">
		<div class="flex cursor-not-allowed items-center select-none" draggable="false">
			<span class="flex items-end font-bold text-white"
				><div class="brand text-2xl">G</div>
				<div class="brand">A</div>
				<div class="brand">M</div>
				<div class="brand">E&nbsp</div>
				<div class="brand">R</div>
				<div class="brand">U</div>
				<div class="brand">L</div>
				<div class="brand">E</div>
				<div class="brand">S</div></span
			><sup class="brand-lang relative -top-3 left-1 text-[#AAAAAA]" draggable="false"
				>{m.locale()}</sup
			>
		</div>
		<button
			type="button"
			class="pointer flex cursor-pointer font-bold text-white select-none"
			onclick={toggleLanguage}
			draggable="false"
			><div class="icon-lang">🌐</div>
			{m.language()}</button
		>
	</div>
</nav>
