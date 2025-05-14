<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import Swal from 'sweetalert2';

	let src = '/images/minecraft-game-rules-logo.png';
	let isAvailability = ['Yes', 'ใช่'];
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 1500,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		}
	});
	const writeClipboardText = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			await Toast.fire({
				icon: 'success',
				title: `${m.copy_to_clipboard_success()}`
			});
		} catch (error) {
			await Toast.fire({
				icon: 'error',
				title: `${m.copy_to_clipboard_unsuccess()}`
			});
		}
	};
</script>

<svelte:head>
	<title>{m.game_rules()}</title>
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<div class="mt-20">
		<img {src} alt="Minecraft Game rules" />
	</div>
	<div class="my-5">
		<button class="btn" onclick={() => setLocale('en')}>EN</button>
		<button class="btn" onclick={() => setLocale('th-th')}>TH</button>
	</div>
	<div class="overflow-x-auto rounded-2xl">
		<table class="table table-zebra">
			<thead class="text-center bg-accent text-accent-content">
				<tr>
					<th rowspan="2">{m.copy_command()}</th>
					<th rowspan="2">{m.rule_name()}</th>
					<th rowspan="2">{m.description()}</th>
					<th rowspan="2">{m.default_value()}</th>
					<th rowspan="2">{m.type()}</th>
					<th rowspan="2">{m.category()}</th>
					<th colspan="2">{m.availability()}</th>
				</tr>
				<tr>
					<th>{m.java_edition()}</th>
					<th>{m.bedrock_edition()}</th>
				</tr>
			</thead>
			<tbody class="text-center">
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.allowFireTicksAwayFromPlayer_game_rules()} ${m.allowFireTicksAwayFromPlayer_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.allowFireTicksAwayFromPlayer_game_rules()} ${m.allowFireTicksAwayFromPlayer_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.allowFireTicksAwayFromPlayer_game_rules()}</kbd></td>
					<td>{m.allowFireTicksAwayFromPlayer_description()}</td>
					<td><kbd class="kbd">{m.allowFireTicksAwayFromPlayer_default_value()}</kbd></td>
					<td>{m.allowFireTicksAwayFromPlayer_type()}</td>
					<td>{m.allowFireTicksAwayFromPlayer_category()}</td>
					<td
						class={isAvailability.includes(m.allowFireTicksAwayFromPlayer_java_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.allowFireTicksAwayFromPlayer_java_edition()}</td
					>
					<td
						class={isAvailability.includes(m.allowFireTicksAwayFromPlayer_bedrock_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.allowFireTicksAwayFromPlayer_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.announceAdvancements_game_rules()} ${m.announceAdvancements_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.announceAdvancements_game_rules()} ${m.announceAdvancements_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.announceAdvancements_game_rules()}</kbd></td>
					<td>{m.announceAdvancements_description()}</td>
					<td><kbd class="kbd">{m.announceAdvancements_default_value()}</kbd></td>
					<td>{m.announceAdvancements_type()}</td>
					<td>{m.announceAdvancements_category()}</td>
					<td
						class={isAvailability.includes(m.announceAdvancements_java_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.announceAdvancements_java_edition()}</td
					>
					<td
						class={isAvailability.includes(m.announceAdvancements_bedrock_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.announceAdvancements_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.blockExplosionDropDecay_game_rules()} ${m.blockExplosionDropDecay_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.blockExplosionDropDecay_game_rules()} ${m.blockExplosionDropDecay_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.blockExplosionDropDecay_game_rules()}</kbd></td>
					<td>{m.blockExplosionDropDecay_description()}</td>
					<td><kbd class="kbd">{m.blockExplosionDropDecay_default_value()}</kbd></td>
					<td>{m.blockExplosionDropDecay_type()}</td>
					<td>{m.blockExplosionDropDecay_category()}</td>
					<td
						class={isAvailability.includes(m.blockExplosionDropDecay_java_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.blockExplosionDropDecay_java_edition()}</td
					>
					<td
						class={isAvailability.includes(m.blockExplosionDropDecay_bedrock_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.blockExplosionDropDecay_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.commandBlockOutput_game_rules()} ${m.commandBlockOutput_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.commandBlockOutput_game_rules()} ${m.commandBlockOutput_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.commandBlockOutput_game_rules()}</kbd></td>
					<td>{m.commandBlockOutput_description()}</td>
					<td><kbd class="kbd">{m.commandBlockOutput_default_value()}</kbd></td>
					<td>{m.commandBlockOutput_type()}</td>
					<td>{m.commandBlockOutput_category()}</td>
					<td
						class={isAvailability.includes(m.commandBlockOutput_java_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.commandBlockOutput_java_edition()}</td
					>
					<td
						class={isAvailability.includes(m.commandBlockOutput_bedrock_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.commandBlockOutput_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.commandBlocksEnabled_game_rules()} ${m.commandBlocksEnabled_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.commandBlocksEnabled_game_rules()} ${m.commandBlocksEnabled_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.commandBlocksEnabled_game_rules()}</kbd></td>
					<td>{m.commandBlocksEnabled_description()}</td>
					<td><kbd class="kbd">{m.commandBlocksEnabled_default_value()}</kbd></td>
					<td>{m.commandBlocksEnabled_type()}</td>
					<td>{m.commandBlocksEnabled_category()}</td>
					<td
						class={isAvailability.includes(m.commandBlocksEnabled_java_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.commandBlocksEnabled_java_edition()}</td
					>
					<td
						class={isAvailability.includes(m.commandBlocksEnabled_bedrock_edition())
							? 'bg-green-500'
							: 'bg-red-500'}>{m.commandBlocksEnabled_bedrock_edition()}</td
					>
				</tr>
			</tbody>
		</table>
	</div>
</div>
