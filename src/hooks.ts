import { deLocalizeUrl } from '$lib/paraglide/runtime';
import type { Transport } from '@sveltejs/kit';

export const reroute = (request: { url: string | URL; }) => deLocalizeUrl(request.url).pathname;

export const transport: Transport = {};
