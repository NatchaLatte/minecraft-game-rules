<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';
	let { children } = $props();
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

{@render children()}
