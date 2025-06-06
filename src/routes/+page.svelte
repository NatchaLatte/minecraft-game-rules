<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Navbar from '$lib/components/Navbar.svelte';
	import ContentList from '$lib/components/ContentList.svelte';
</script>

<svelte:head>
	<title>{m.game_rule()} | Minecraft</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="เว็บไซต์รวบรวมและแปลกฎเกมของไมน์คราฟต์" />
</svelte:head>

<Navbar />
<ContentList />
