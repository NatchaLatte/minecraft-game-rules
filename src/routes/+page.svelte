<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Navbar from '$lib/components/Navbar.svelte';
	import ContentList from '$lib/components/ContentList.svelte';
</script>

<svelte:head>
	<title>{m.game_rule()} | Minecraft</title>
</svelte:head>

<Navbar />
<ContentList />
