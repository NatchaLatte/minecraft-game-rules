<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import Swal from 'sweetalert2';

	let src = '/images/minecraft-game-rules-logo.png';
	const isAvailability = (text: string): string => ['Yes', 'ใช่'].includes(text) ? 'bg-green-500' : 'bg-red-500';

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
						class={isAvailability(m.allowFireTicksAwayFromPlayer_java_edition())}>{m.allowFireTicksAwayFromPlayer_java_edition()}</td
					>
					<td
						class={isAvailability(m.allowFireTicksAwayFromPlayer_bedrock_edition())}>{m.allowFireTicksAwayFromPlayer_bedrock_edition()}</td
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
						class={isAvailability(m.announceAdvancements_java_edition())}>{m.announceAdvancements_java_edition()}</td
					>
					<td
						class={isAvailability(m.announceAdvancements_bedrock_edition())}>{m.announceAdvancements_bedrock_edition()}</td
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
						class={isAvailability(m.blockExplosionDropDecay_java_edition())}>{m.blockExplosionDropDecay_java_edition()}</td
					>
					<td
						class={isAvailability(m.blockExplosionDropDecay_bedrock_edition())}>{m.blockExplosionDropDecay_bedrock_edition()}</td
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
						class={isAvailability(m.commandBlockOutput_java_edition())}>{m.commandBlockOutput_java_edition()}</td
					>
					<td
						class={isAvailability(m.commandBlockOutput_bedrock_edition())}>{m.commandBlockOutput_bedrock_edition()}</td
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
						class={isAvailability(m.commandBlocksEnabled_java_edition())}>{m.commandBlocksEnabled_java_edition()}</td
					>
					<td
						class={isAvailability(m.commandBlocksEnabled_bedrock_edition())}>{m.commandBlocksEnabled_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.commandModificationBlockLimit_game_rules()} ${m.commandModificationBlockLimit_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.commandModificationBlockLimit_game_rules()} ${m.commandModificationBlockLimit_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.commandModificationBlockLimit_game_rules()}</kbd></td>
					<td>{m.commandModificationBlockLimit_description()}</td>
					<td><kbd class="kbd">{m.commandModificationBlockLimit_default_value()}</kbd></td>
					<td>{m.commandModificationBlockLimit_type()}</td>
					<td>{m.commandModificationBlockLimit_category()}</td>
					<td
						class={isAvailability(m.commandModificationBlockLimit_java_edition())}>{m.commandModificationBlockLimit_java_edition()}</td
					>
					<td
						class={isAvailability(m.commandModificationBlockLimit_bedrock_edition())}>{m.commandModificationBlockLimit_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.disableElytraMovementCheck_game_rules()} ${m.disableElytraMovementCheck_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.disableElytraMovementCheck_game_rules()} ${m.disableElytraMovementCheck_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.disableElytraMovementCheck_game_rules()}</kbd></td>
					<td>{m.disableElytraMovementCheck_description()}</td>
					<td><kbd class="kbd">{m.disableElytraMovementCheck_default_value()}</kbd></td>
					<td>{m.disableElytraMovementCheck_type()}</td>
					<td>{m.disableElytraMovementCheck_category()}</td>
					<td
						class={isAvailability(m.disableElytraMovementCheck_java_edition())}>{m.disableElytraMovementCheck_java_edition()}</td
					>
					<td
						class={isAvailability(m.disableElytraMovementCheck_bedrock_edition())}>{m.disableElytraMovementCheck_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.disablePlayerMovementCheck_game_rules()} ${m.disablePlayerMovementCheck_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.disablePlayerMovementCheck_game_rules()} ${m.disablePlayerMovementCheck_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.disablePlayerMovementCheck_game_rules()}</kbd></td>
					<td>{m.disablePlayerMovementCheck_description()}</td>
					<td><kbd class="kbd">{m.disablePlayerMovementCheck_default_value()}</kbd></td>
					<td>{m.disablePlayerMovementCheck_type()}</td>
					<td>{m.disablePlayerMovementCheck_category()}</td>
					<td
						class={isAvailability(m.disablePlayerMovementCheck_java_edition())}>{m.disablePlayerMovementCheck_java_edition()}</td
					>
					<td
						class={isAvailability(m.disablePlayerMovementCheck_bedrock_edition())}>{m.disablePlayerMovementCheck_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.disableRaids_game_rules()} ${m.disableRaids_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.disableRaids_game_rules()} ${m.disableRaids_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.disableRaids_game_rules()}</kbd></td>
					<td>{m.disableRaids_description()}</td>
					<td><kbd class="kbd">{m.disableRaids_default_value()}</kbd></td>
					<td>{m.disableRaids_type()}</td>
					<td>{m.disableRaids_category()}</td>
					<td
						class={isAvailability(m.disableRaids_java_edition())}>{m.disableRaids_java_edition()}</td
					>
					<td
						class={isAvailability(m.disableRaids_bedrock_edition())}>{m.disableRaids_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doDaylightCycle_game_rules()} ${m.doDaylightCycle_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doDaylightCycle_game_rules()} ${m.doDaylightCycle_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doDaylightCycle_game_rules()}</kbd></td>
					<td>{m.doDaylightCycle_description()}</td>
					<td><kbd class="kbd">{m.doDaylightCycle_default_value()}</kbd></td>
					<td>{m.doDaylightCycle_type()}</td>
					<td>{m.doDaylightCycle_category()}</td>
					<td
						class={isAvailability(m.doDaylightCycle_java_edition())}>{m.doDaylightCycle_java_edition()}</td
					>
					<td
						class={isAvailability(m.doDaylightCycle_bedrock_edition())}>{m.doDaylightCycle_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doEntityDrops_game_rules()} ${m.doEntityDrops_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doEntityDrops_game_rules()} ${m.doEntityDrops_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doEntityDrops_game_rules()}</kbd></td>
					<td>{m.doEntityDrops_description()}</td>
					<td><kbd class="kbd">{m.doEntityDrops_default_value()}</kbd></td>
					<td>{m.doEntityDrops_type()}</td>
					<td>{m.doEntityDrops_category()}</td>
					<td
						class={isAvailability(m.doEntityDrops_java_edition())}>{m.doEntityDrops_java_edition()}</td
					>
					<td
						class={isAvailability(m.doEntityDrops_bedrock_edition())}>{m.doEntityDrops_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doFireTick_game_rules()} ${m.doFireTick_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doFireTick_game_rules()} ${m.doFireTick_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doFireTick_game_rules()}</kbd></td>
					<td>{m.doFireTick_description()}</td>
					<td><kbd class="kbd">{m.doFireTick_default_value()}</kbd></td>
					<td>{m.doFireTick_type()}</td>
					<td>{m.doFireTick_category()}</td>
					<td
						class={isAvailability(m.doFireTick_java_edition())}>{m.doFireTick_java_edition()}</td
					>
					<td
						class={isAvailability(m.doFireTick_bedrock_edition())}>{m.doFireTick_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doImmediateRespawn_game_rules()} ${m.doImmediateRespawn_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doImmediateRespawn_game_rules()} ${m.doImmediateRespawn_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doImmediateRespawn_game_rules()}</kbd></td>
					<td>{m.doImmediateRespawn_description()}</td>
					<td><kbd class="kbd">{m.doImmediateRespawn_default_value()}</kbd></td>
					<td>{m.doImmediateRespawn_type()}</td>
					<td>{m.doImmediateRespawn_category()}</td>
					<td
						class={isAvailability(m.doImmediateRespawn_java_edition())}>{m.doImmediateRespawn_java_edition()}</td
					>
					<td
						class={isAvailability(m.doImmediateRespawn_bedrock_edition())}>{m.doImmediateRespawn_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doInsomnia_game_rules()} ${m.doInsomnia_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doInsomnia_game_rules()} ${m.doInsomnia_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doInsomnia_game_rules()}</kbd></td>
					<td>{m.doInsomnia_description()}</td>
					<td><kbd class="kbd">{m.doInsomnia_default_value()}</kbd></td>
					<td>{m.doInsomnia_type()}</td>
					<td>{m.doInsomnia_category()}</td>
					<td
						class={isAvailability(m.doInsomnia_java_edition())}>{m.doInsomnia_java_edition()}</td
					>
					<td
						class={isAvailability(m.doInsomnia_bedrock_edition())}>{m.doInsomnia_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doLimitedCrafting_game_rules()} ${m.doLimitedCrafting_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doLimitedCrafting_game_rules()} ${m.doLimitedCrafting_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doLimitedCrafting_game_rules()}</kbd></td>
					<td>{m.doLimitedCrafting_description()}</td>
					<td><kbd class="kbd">{m.doLimitedCrafting_default_value()}</kbd></td>
					<td>{m.doLimitedCrafting_type()}</td>
					<td>{m.doLimitedCrafting_category()}</td>
					<td
						class={isAvailability(m.doLimitedCrafting_java_edition())}>{m.doLimitedCrafting_java_edition()}</td
					>
					<td
						class={isAvailability(m.doLimitedCrafting_bedrock_edition())}>{m.doLimitedCrafting_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doMobLoot_game_rules()} ${m.doMobLoot_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doMobLoot_game_rules()} ${m.doMobLoot_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doMobLoot_game_rules()}</kbd></td>
					<td>{m.doMobLoot_description()}</td>
					<td><kbd class="kbd">{m.doMobLoot_default_value()}</kbd></td>
					<td>{m.doMobLoot_type()}</td>
					<td>{m.doMobLoot_category()}</td>
					<td
						class={isAvailability(m.doMobLoot_java_edition())}>{m.doMobLoot_java_edition()}</td
					>
					<td
						class={isAvailability(m.doMobLoot_bedrock_edition())}>{m.doMobLoot_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doMobSpawning_game_rules()} ${m.doMobSpawning_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doMobSpawning_game_rules()} ${m.doMobSpawning_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doMobSpawning_game_rules()}</kbd></td>
					<td>{m.doMobSpawning_description()}</td>
					<td><kbd class="kbd">{m.doMobSpawning_default_value()}</kbd></td>
					<td>{m.doMobSpawning_type()}</td>
					<td>{m.doMobSpawning_category()}</td>
					<td
						class={isAvailability(m.doMobSpawning_java_edition())}>{m.doMobSpawning_java_edition()}</td
					>
					<td
						class={isAvailability(m.doMobSpawning_bedrock_edition())}>{m.doMobSpawning_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doPatrolSpawning_game_rules()} ${m.doPatrolSpawning_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doPatrolSpawning_game_rules()} ${m.doPatrolSpawning_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doPatrolSpawning_game_rules()}</kbd></td>
					<td>{m.doPatrolSpawning_description()}</td>
					<td><kbd class="kbd">{m.doPatrolSpawning_default_value()}</kbd></td>
					<td>{m.doPatrolSpawning_type()}</td>
					<td>{m.doPatrolSpawning_category()}</td>
					<td
						class={isAvailability(m.doPatrolSpawning_java_edition())}>{m.doPatrolSpawning_java_edition()}</td
					>
					<td
						class={isAvailability(m.doPatrolSpawning_bedrock_edition())}>{m.doPatrolSpawning_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doTileDrops_game_rules()} ${m.doTileDrops_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doTileDrops_game_rules()} ${m.doTileDrops_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doTileDrops_game_rules()}</kbd></td>
					<td>{m.doTileDrops_description()}</td>
					<td><kbd class="kbd">{m.doTileDrops_default_value()}</kbd></td>
					<td>{m.doTileDrops_type()}</td>
					<td>{m.doTileDrops_category()}</td>
					<td
						class={isAvailability(m.doTileDrops_java_edition())}>{m.doTileDrops_java_edition()}</td
					>
					<td
						class={isAvailability(m.doTileDrops_bedrock_edition())}>{m.doTileDrops_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doTraderSpawning_game_rules()} ${m.doTraderSpawning_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doTraderSpawning_game_rules()} ${m.doTraderSpawning_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doTraderSpawning_game_rules()}</kbd></td>
					<td>{m.doTraderSpawning_description()}</td>
					<td><kbd class="kbd">{m.doTraderSpawning_default_value()}</kbd></td>
					<td>{m.doTraderSpawning_type()}</td>
					<td>{m.doTraderSpawning_category()}</td>
					<td
						class={isAvailability(m.doTraderSpawning_java_edition())}>{m.doTraderSpawning_java_edition()}</td
					>
					<td
						class={isAvailability(m.doTraderSpawning_bedrock_edition())}>{m.doTraderSpawning_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doVinesSpread_game_rules()} ${m.doVinesSpread_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doVinesSpread_game_rules()} ${m.doVinesSpread_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doVinesSpread_game_rules()}</kbd></td>
					<td>{m.doVinesSpread_description()}</td>
					<td><kbd class="kbd">{m.doVinesSpread_default_value()}</kbd></td>
					<td>{m.doVinesSpread_type()}</td>
					<td>{m.doVinesSpread_category()}</td>
					<td
						class={isAvailability(m.doVinesSpread_java_edition())}>{m.doVinesSpread_java_edition()}</td
					>
					<td
						class={isAvailability(m.doVinesSpread_bedrock_edition())}>{m.doVinesSpread_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doWardenSpawning_game_rules()} ${m.doWardenSpawning_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doWardenSpawning_game_rules()} ${m.doWardenSpawning_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doWardenSpawning_game_rules()}</kbd></td>
					<td>{m.doWardenSpawning_description()}</td>
					<td><kbd class="kbd">{m.doWardenSpawning_default_value()}</kbd></td>
					<td>{m.doWardenSpawning_type()}</td>
					<td>{m.doWardenSpawning_category()}</td>
					<td
						class={isAvailability(m.doWardenSpawning_java_edition())}>{m.doWardenSpawning_java_edition()}</td
					>
					<td
						class={isAvailability(m.doWardenSpawning_bedrock_edition())}>{m.doWardenSpawning_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.doWeatherCycle_game_rules()} ${m.doWeatherCycle_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.doWeatherCycle_game_rules()} ${m.doWeatherCycle_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.doWeatherCycle_game_rules()}</kbd></td>
					<td>{m.doWeatherCycle_description()}</td>
					<td><kbd class="kbd">{m.doWeatherCycle_default_value()}</kbd></td>
					<td>{m.doWeatherCycle_type()}</td>
					<td>{m.doWeatherCycle_category()}</td>
					<td
						class={isAvailability(m.doWeatherCycle_java_edition())}>{m.doWeatherCycle_java_edition()}</td
					>
					<td
						class={isAvailability(m.doWeatherCycle_bedrock_edition())}>{m.doWeatherCycle_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.drowningDamage_game_rules()} ${m.drowningDamage_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.drowningDamage_game_rules()} ${m.drowningDamage_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.drowningDamage_game_rules()}</kbd></td>
					<td>{m.drowningDamage_description()}</td>
					<td><kbd class="kbd">{m.drowningDamage_default_value()}</kbd></td>
					<td>{m.drowningDamage_type()}</td>
					<td>{m.drowningDamage_category()}</td>
					<td
						class={isAvailability(m.drowningDamage_java_edition())}>{m.drowningDamage_java_edition()}</td
					>
					<td
						class={isAvailability(m.drowningDamage_bedrock_edition())}>{m.drowningDamage_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.enderPearlsVanishOnDeath_game_rules()} ${m.enderPearlsVanishOnDeath_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.enderPearlsVanishOnDeath_game_rules()} ${m.enderPearlsVanishOnDeath_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.enderPearlsVanishOnDeath_game_rules()}</kbd></td>
					<td>{m.enderPearlsVanishOnDeath_description()}</td>
					<td><kbd class="kbd">{m.enderPearlsVanishOnDeath_default_value()}</kbd></td>
					<td>{m.enderPearlsVanishOnDeath_type()}</td>
					<td>{m.enderPearlsVanishOnDeath_category()}</td>
					<td
						class={isAvailability(m.enderPearlsVanishOnDeath_java_edition())}>{m.enderPearlsVanishOnDeath_java_edition()}</td
					>
					<td
						class={isAvailability(m.enderPearlsVanishOnDeath_bedrock_edition())}>{m.enderPearlsVanishOnDeath_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.fallDamage_game_rules()} ${m.fallDamage_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.fallDamage_game_rules()} ${m.fallDamage_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.fallDamage_game_rules()}</kbd></td>
					<td>{m.fallDamage_description()}</td>
					<td><kbd class="kbd">{m.fallDamage_default_value()}</kbd></td>
					<td>{m.fallDamage_type()}</td>
					<td>{m.fallDamage_category()}</td>
					<td
						class={isAvailability(m.fallDamage_java_edition())}>{m.fallDamage_java_edition()}</td
					>
					<td
						class={isAvailability(m.fallDamage_bedrock_edition())}>{m.fallDamage_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.fireDamage_game_rules()} ${m.fireDamage_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.fireDamage_game_rules()} ${m.fireDamage_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.fireDamage_game_rules()}</kbd></td>
					<td>{m.fireDamage_description()}</td>
					<td><kbd class="kbd">{m.fireDamage_default_value()}</kbd></td>
					<td>{m.fireDamage_type()}</td>
					<td>{m.fireDamage_category()}</td>
					<td
						class={isAvailability(m.fireDamage_java_edition())}>{m.fireDamage_java_edition()}</td
					>
					<td
						class={isAvailability(m.fireDamage_bedrock_edition())}>{m.fireDamage_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.forgiveDeadPlayers_game_rules()} ${m.forgiveDeadPlayers_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.forgiveDeadPlayers_game_rules()} ${m.forgiveDeadPlayers_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.forgiveDeadPlayers_game_rules()}</kbd></td>
					<td>{m.forgiveDeadPlayers_description()}</td>
					<td><kbd class="kbd">{m.forgiveDeadPlayers_default_value()}</kbd></td>
					<td>{m.forgiveDeadPlayers_type()}</td>
					<td>{m.forgiveDeadPlayers_category()}</td>
					<td
						class={isAvailability(m.forgiveDeadPlayers_java_edition())}>{m.forgiveDeadPlayers_java_edition()}</td
					>
					<td
						class={isAvailability(m.forgiveDeadPlayers_bedrock_edition())}>{m.forgiveDeadPlayers_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.freezeDamage_game_rules()} ${m.freezeDamage_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.freezeDamage_game_rules()} ${m.freezeDamage_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.freezeDamage_game_rules()}</kbd></td>
					<td>{m.freezeDamage_description()}</td>
					<td><kbd class="kbd">{m.freezeDamage_default_value()}</kbd></td>
					<td>{m.freezeDamage_type()}</td>
					<td>{m.freezeDamage_category()}</td>
					<td
						class={isAvailability(m.freezeDamage_java_edition())}>{m.freezeDamage_java_edition()}</td
					>
					<td
						class={isAvailability(m.freezeDamage_bedrock_edition())}>{m.freezeDamage_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.functionCommandLimit_game_rules()} ${m.functionCommandLimit_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.functionCommandLimit_game_rules()} ${m.functionCommandLimit_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.functionCommandLimit_game_rules()}</kbd></td>
					<td>{m.functionCommandLimit_description()}</td>
					<td><kbd class="kbd">{m.functionCommandLimit_default_value()}</kbd></td>
					<td>{m.functionCommandLimit_type()}</td>
					<td>{m.functionCommandLimit_category()}</td>
					<td
						class={isAvailability(m.functionCommandLimit_java_edition())}>{m.functionCommandLimit_java_edition()}</td
					>
					<td
						class={isAvailability(m.functionCommandLimit_bedrock_edition())}>{m.functionCommandLimit_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.globalSoundEvents_game_rules()} ${m.globalSoundEvents_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.globalSoundEvents_game_rules()} ${m.globalSoundEvents_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.globalSoundEvents_game_rules()}</kbd></td>
					<td>{m.globalSoundEvents_description()}</td>
					<td><kbd class="kbd">{m.globalSoundEvents_default_value()}</kbd></td>
					<td>{m.globalSoundEvents_type()}</td>
					<td>{m.globalSoundEvents_category()}</td>
					<td
						class={isAvailability(m.globalSoundEvents_java_edition())}>{m.globalSoundEvents_java_edition()}</td
					>
					<td
						class={isAvailability(m.globalSoundEvents_bedrock_edition())}>{m.globalSoundEvents_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.keepInventory_game_rules()} ${m.keepInventory_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.keepInventory_game_rules()} ${m.keepInventory_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.keepInventory_game_rules()}</kbd></td>
					<td>{m.keepInventory_description()}</td>
					<td><kbd class="kbd">{m.keepInventory_default_value()}</kbd></td>
					<td>{m.keepInventory_type()}</td>
					<td>{m.keepInventory_category()}</td>
					<td
						class={isAvailability(m.keepInventory_java_edition())}>{m.keepInventory_java_edition()}</td
					>
					<td
						class={isAvailability(m.keepInventory_bedrock_edition())}>{m.keepInventory_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.lavaSourceConversion_game_rules()} ${m.lavaSourceConversion_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.lavaSourceConversion_game_rules()} ${m.lavaSourceConversion_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.lavaSourceConversion_game_rules()}</kbd></td>
					<td>{m.lavaSourceConversion_description()}</td>
					<td><kbd class="kbd">{m.lavaSourceConversion_default_value()}</kbd></td>
					<td>{m.lavaSourceConversion_type()}</td>
					<td>{m.lavaSourceConversion_category()}</td>
					<td
						class={isAvailability(m.lavaSourceConversion_java_edition())}>{m.lavaSourceConversion_java_edition()}</td
					>
					<td
						class={isAvailability(m.lavaSourceConversion_bedrock_edition())}>{m.lavaSourceConversion_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.locatorBar_game_rules()} ${m.locatorBar_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.locatorBar_game_rules()} ${m.locatorBar_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.locatorBar_game_rules()}</kbd></td>
					<td>{m.locatorBar_description()}</td>
					<td><kbd class="kbd">{m.locatorBar_default_value()}</kbd></td>
					<td>{m.locatorBar_type()}</td>
					<td>{m.locatorBar_category()}</td>
					<td
						class={isAvailability(m.locatorBar_java_edition())}>{m.locatorBar_java_edition()}</td
					>
					<td
						class={isAvailability(m.locatorBar_bedrock_edition())}>{m.locatorBar_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.logAdminCommands_game_rules()} ${m.logAdminCommands_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.logAdminCommands_game_rules()} ${m.logAdminCommands_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.logAdminCommands_game_rules()}</kbd></td>
					<td>{m.logAdminCommands_description()}</td>
					<td><kbd class="kbd">{m.logAdminCommands_default_value()}</kbd></td>
					<td>{m.logAdminCommands_type()}</td>
					<td>{m.logAdminCommands_category()}</td>
					<td
						class={isAvailability(m.logAdminCommands_java_edition())}>{m.logAdminCommands_java_edition()}</td
					>
					<td
						class={isAvailability(m.logAdminCommands_bedrock_edition())}>{m.logAdminCommands_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.maxCommandChainLength_game_rules()} ${m.maxCommandChainLength_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.maxCommandChainLength_game_rules()} ${m.maxCommandChainLength_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.maxCommandChainLength_game_rules()}</kbd></td>
					<td>{m.maxCommandChainLength_description()}</td>
					<td><kbd class="kbd">{m.maxCommandChainLength_default_value()}</kbd></td>
					<td>{m.maxCommandChainLength_type()}</td>
					<td>{m.maxCommandChainLength_category()}</td>
					<td
						class={isAvailability(m.maxCommandChainLength_java_edition())}>{m.maxCommandChainLength_java_edition()}</td
					>
					<td
						class={isAvailability(m.maxCommandChainLength_bedrock_edition())}>{m.maxCommandChainLength_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.maxCommandForkCount_game_rules()} ${m.maxCommandForkCount_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.maxCommandForkCount_game_rules()} ${m.maxCommandForkCount_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.maxCommandForkCount_game_rules()}</kbd></td>
					<td>{m.maxCommandForkCount_description()}</td>
					<td><kbd class="kbd">{m.maxCommandForkCount_default_value()}</kbd></td>
					<td>{m.maxCommandForkCount_type()}</td>
					<td>{m.maxCommandForkCount_category()}</td>
					<td
						class={isAvailability(m.maxCommandForkCount_java_edition())}>{m.maxCommandForkCount_java_edition()}</td
					>
					<td
						class={isAvailability(m.maxCommandForkCount_bedrock_edition())}>{m.maxCommandForkCount_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.maxEntityCramming_game_rules()} ${m.maxEntityCramming_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.maxEntityCramming_game_rules()} ${m.maxEntityCramming_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.maxEntityCramming_game_rules()}</kbd></td>
					<td>{m.maxEntityCramming_description()}</td>
					<td><kbd class="kbd">{m.maxEntityCramming_default_value()}</kbd></td>
					<td>{m.maxEntityCramming_type()}</td>
					<td>{m.maxEntityCramming_category()}</td>
					<td
						class={isAvailability(m.maxEntityCramming_java_edition())}>{m.maxEntityCramming_java_edition()}</td
					>
					<td
						class={isAvailability(m.maxEntityCramming_bedrock_edition())}>{m.maxEntityCramming_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.minecartMaxSpeed_game_rules()} ${m.minecartMaxSpeed_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.minecartMaxSpeed_game_rules()} ${m.minecartMaxSpeed_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.minecartMaxSpeed_game_rules()}</kbd></td>
					<td>{m.minecartMaxSpeed_description()}</td>
					<td><kbd class="kbd">{m.minecartMaxSpeed_default_value()}</kbd></td>
					<td>{m.minecartMaxSpeed_type()}</td>
					<td>{m.minecartMaxSpeed_category()}</td>
					<td
						class={isAvailability(m.minecartMaxSpeed_java_edition())}>{m.minecartMaxSpeed_java_edition()}</td
					>
					<td
						class={isAvailability(m.minecartMaxSpeed_bedrock_edition())}>{m.minecartMaxSpeed_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.mobExplosionDropDecay_game_rules()} ${m.mobExplosionDropDecay_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.mobExplosionDropDecay_game_rules()} ${m.mobExplosionDropDecay_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.mobExplosionDropDecay_game_rules()}</kbd></td>
					<td>{m.mobExplosionDropDecay_description()}</td>
					<td><kbd class="kbd">{m.mobExplosionDropDecay_default_value()}</kbd></td>
					<td>{m.mobExplosionDropDecay_type()}</td>
					<td>{m.mobExplosionDropDecay_category()}</td>
					<td
						class={isAvailability(m.mobExplosionDropDecay_java_edition())}>{m.mobExplosionDropDecay_java_edition()}</td
					>
					<td
						class={isAvailability(m.mobExplosionDropDecay_bedrock_edition())}>{m.mobExplosionDropDecay_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.mobGriefing_game_rules()} ${m.mobGriefing_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.mobGriefing_game_rules()} ${m.mobGriefing_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.mobGriefing_game_rules()}</kbd></td>
					<td>{m.mobGriefing_description()}</td>
					<td><kbd class="kbd">{m.mobGriefing_default_value()}</kbd></td>
					<td>{m.mobGriefing_type()}</td>
					<td>{m.mobGriefing_category()}</td>
					<td
						class={isAvailability(m.mobGriefing_java_edition())}>{m.mobGriefing_java_edition()}</td
					>
					<td
						class={isAvailability(m.mobGriefing_bedrock_edition())}>{m.mobGriefing_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.naturalRegeneration_game_rules()} ${m.naturalRegeneration_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.naturalRegeneration_game_rules()} ${m.naturalRegeneration_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.naturalRegeneration_game_rules()}</kbd></td>
					<td>{m.naturalRegeneration_description()}</td>
					<td><kbd class="kbd">{m.naturalRegeneration_default_value()}</kbd></td>
					<td>{m.naturalRegeneration_type()}</td>
					<td>{m.naturalRegeneration_category()}</td>
					<td
						class={isAvailability(m.naturalRegeneration_java_edition())}>{m.naturalRegeneration_java_edition()}</td
					>
					<td
						class={isAvailability(m.naturalRegeneration_bedrock_edition())}>{m.naturalRegeneration_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.playersNetherPortalCreativeDelay_game_rules()} ${m.playersNetherPortalCreativeDelay_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.playersNetherPortalCreativeDelay_game_rules()} ${m.playersNetherPortalCreativeDelay_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.playersNetherPortalCreativeDelay_game_rules()}</kbd></td>
					<td>{m.playersNetherPortalCreativeDelay_description()}</td>
					<td><kbd class="kbd">{m.playersNetherPortalCreativeDelay_default_value()}</kbd></td>
					<td>{m.playersNetherPortalCreativeDelay_type()}</td>
					<td>{m.playersNetherPortalCreativeDelay_category()}</td>
					<td
						class={isAvailability(m.playersNetherPortalCreativeDelay_java_edition())}>{m.playersNetherPortalCreativeDelay_java_edition()}</td
					>
					<td
						class={isAvailability(m.playersNetherPortalCreativeDelay_bedrock_edition())}>{m.playersNetherPortalCreativeDelay_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.playersNetherPortalDefaultDelay_game_rules()} ${m.playersNetherPortalDefaultDelay_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.playersNetherPortalDefaultDelay_game_rules()} ${m.playersNetherPortalDefaultDelay_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.playersNetherPortalDefaultDelay_game_rules()}</kbd></td>
					<td>{m.playersNetherPortalDefaultDelay_description()}</td>
					<td><kbd class="kbd">{m.playersNetherPortalDefaultDelay_default_value()}</kbd></td>
					<td>{m.playersNetherPortalDefaultDelay_type()}</td>
					<td>{m.playersNetherPortalDefaultDelay_category()}</td>
					<td
						class={isAvailability(m.playersNetherPortalDefaultDelay_java_edition())}>{m.playersNetherPortalDefaultDelay_java_edition()}</td
					>
					<td
						class={isAvailability(m.playersNetherPortalDefaultDelay_bedrock_edition())}>{m.playersNetherPortalDefaultDelay_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.playersSleepingPercentage_game_rules()} ${m.playersSleepingPercentage_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.playersSleepingPercentage_game_rules()} ${m.playersSleepingPercentage_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.playersSleepingPercentage_game_rules()}</kbd></td>
					<td>{m.playersSleepingPercentage_description()}</td>
					<td><kbd class="kbd">{m.playersSleepingPercentage_default_value()}</kbd></td>
					<td>{m.playersSleepingPercentage_type()}</td>
					<td>{m.playersSleepingPercentage_category()}</td>
					<td
						class={isAvailability(m.playersSleepingPercentage_java_edition())}>{m.playersSleepingPercentage_java_edition()}</td
					>
					<td
						class={isAvailability(m.playersSleepingPercentage_bedrock_edition())}>{m.playersSleepingPercentage_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.projectilesCanBreakBlocks_game_rules()} ${m.projectilesCanBreakBlocks_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.projectilesCanBreakBlocks_game_rules()} ${m.projectilesCanBreakBlocks_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.projectilesCanBreakBlocks_game_rules()}</kbd></td>
					<td>{m.projectilesCanBreakBlocks_description()}</td>
					<td><kbd class="kbd">{m.projectilesCanBreakBlocks_default_value()}</kbd></td>
					<td>{m.projectilesCanBreakBlocks_type()}</td>
					<td>{m.projectilesCanBreakBlocks_category()}</td>
					<td
						class={isAvailability(m.projectilesCanBreakBlocks_java_edition())}>{m.projectilesCanBreakBlocks_java_edition()}</td
					>
					<td
						class={isAvailability(m.projectilesCanBreakBlocks_bedrock_edition())}>{m.projectilesCanBreakBlocks_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.pvp_game_rules()} ${m.pvp_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(`/gamerule ${m.pvp_game_rules()} ${m.pvp_default_value()}`);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.pvp_game_rules()}</kbd></td>
					<td>{m.pvp_description()}</td>
					<td><kbd class="kbd">{m.pvp_default_value()}</kbd></td>
					<td>{m.pvp_type()}</td>
					<td>{m.pvp_category()}</td>
					<td class={isAvailability(m.pvp_java_edition()) ? 'bg-green-500' : 'bg-red-500'}
						>{m.pvp_java_edition()}</td
					>
					<td
						class={isAvailability(m.pvp_bedrock_edition()) ? 'bg-green-500' : 'bg-red-500'}
						>{m.pvp_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.randomTickSpeed_game_rules()} ${m.randomTickSpeed_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.randomTickSpeed_game_rules()} ${m.randomTickSpeed_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.randomTickSpeed_game_rules()}</kbd></td>
					<td>{m.randomTickSpeed_description()}</td>
					<td><kbd class="kbd">{m.randomTickSpeed_default_value()}</kbd></td>
					<td>{m.randomTickSpeed_type()}</td>
					<td>{m.randomTickSpeed_category()}</td>
					<td
						class={isAvailability(m.randomTickSpeed_java_edition())}>{m.randomTickSpeed_java_edition()}</td
					>
					<td
						class={isAvailability(m.randomTickSpeed_bedrock_edition())}>{m.randomTickSpeed_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.recipesUnlock_game_rules()} ${m.recipesUnlock_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.recipesUnlock_game_rules()} ${m.recipesUnlock_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.recipesUnlock_game_rules()}</kbd></td>
					<td>{m.recipesUnlock_description()}</td>
					<td><kbd class="kbd">{m.recipesUnlock_default_value()}</kbd></td>
					<td>{m.recipesUnlock_type()}</td>
					<td>{m.recipesUnlock_category()}</td>
					<td
						class={isAvailability(m.recipesUnlock_java_edition())}>{m.recipesUnlock_java_edition()}</td
					>
					<td
						class={isAvailability(m.recipesUnlock_bedrock_edition())}>{m.recipesUnlock_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.reducedDebugInfo_game_rules()} ${m.reducedDebugInfo_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.reducedDebugInfo_game_rules()} ${m.reducedDebugInfo_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.reducedDebugInfo_game_rules()}</kbd></td>
					<td>{m.reducedDebugInfo_description()}</td>
					<td><kbd class="kbd">{m.reducedDebugInfo_default_value()}</kbd></td>
					<td>{m.reducedDebugInfo_type()}</td>
					<td>{m.reducedDebugInfo_category()}</td>
					<td
						class={isAvailability(m.reducedDebugInfo_java_edition())}>{m.reducedDebugInfo_java_edition()}</td
					>
					<td
						class={isAvailability(m.reducedDebugInfo_bedrock_edition())}>{m.reducedDebugInfo_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.respawnBlocksExplode_game_rules()} ${m.respawnBlocksExplode_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.respawnBlocksExplode_game_rules()} ${m.respawnBlocksExplode_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.respawnBlocksExplode_game_rules()}</kbd></td>
					<td>{m.respawnBlocksExplode_description()}</td>
					<td><kbd class="kbd">{m.respawnBlocksExplode_default_value()}</kbd></td>
					<td>{m.respawnBlocksExplode_type()}</td>
					<td>{m.respawnBlocksExplode_category()}</td>
					<td
						class={isAvailability(m.respawnBlocksExplode_java_edition())}>{m.respawnBlocksExplode_java_edition()}</td
					>
					<td
						class={isAvailability(m.respawnBlocksExplode_bedrock_edition())}>{m.respawnBlocksExplode_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.sendCommandFeedback_game_rules()} ${m.sendCommandFeedback_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.sendCommandFeedback_game_rules()} ${m.sendCommandFeedback_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.sendCommandFeedback_game_rules()}</kbd></td>
					<td>{m.sendCommandFeedback_description()}</td>
					<td><kbd class="kbd">{m.sendCommandFeedback_default_value()}</kbd></td>
					<td>{m.sendCommandFeedback_type()}</td>
					<td>{m.sendCommandFeedback_category()}</td>
					<td
						class={isAvailability(m.sendCommandFeedback_java_edition())}>{m.sendCommandFeedback_java_edition()}</td
					>
					<td
						class={isAvailability(m.sendCommandFeedback_bedrock_edition())}>{m.sendCommandFeedback_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.showBorderEffect_game_rules()} ${m.showBorderEffect_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.showBorderEffect_game_rules()} ${m.showBorderEffect_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.showBorderEffect_game_rules()}</kbd></td>
					<td>{m.showBorderEffect_description()}</td>
					<td><kbd class="kbd">{m.showBorderEffect_default_value()}</kbd></td>
					<td>{m.showBorderEffect_type()}</td>
					<td>{m.showBorderEffect_category()}</td>
					<td
						class={isAvailability(m.showBorderEffect_java_edition())}>{m.showBorderEffect_java_edition()}</td
					>
					<td
						class={isAvailability(m.showBorderEffect_bedrock_edition())}>{m.showBorderEffect_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.showCoordinates_game_rules()} ${m.showCoordinates_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.showCoordinates_game_rules()} ${m.showCoordinates_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.showCoordinates_game_rules()}</kbd></td>
					<td>{m.showCoordinates_description()}</td>
					<td><kbd class="kbd">{m.showCoordinates_default_value()}</kbd></td>
					<td>{m.showCoordinates_type()}</td>
					<td>{m.showCoordinates_category()}</td>
					<td
						class={isAvailability(m.showCoordinates_java_edition())}>{m.showCoordinates_java_edition()}</td
					>
					<td
						class={isAvailability(m.showCoordinates_bedrock_edition())}>{m.showCoordinates_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.showDaysPlayed_game_rules()} ${m.showDaysPlayed_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.showDaysPlayed_game_rules()} ${m.showDaysPlayed_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.showDaysPlayed_game_rules()}</kbd></td>
					<td>{m.showDaysPlayed_description()}</td>
					<td><kbd class="kbd">{m.showDaysPlayed_default_value()}</kbd></td>
					<td>{m.showDaysPlayed_type()}</td>
					<td>{m.showDaysPlayed_category()}</td>
					<td
						class={isAvailability(m.showDaysPlayed_java_edition())}>{m.showDaysPlayed_java_edition()}</td
					>
					<td
						class={isAvailability(m.showDaysPlayed_bedrock_edition())}>{m.showDaysPlayed_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.showDeathMessages_game_rules()} ${m.showDeathMessages_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.showDeathMessages_game_rules()} ${m.showDeathMessages_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.showDeathMessages_game_rules()}</kbd></td>
					<td>{m.showDeathMessages_description()}</td>
					<td><kbd class="kbd">{m.showDeathMessages_default_value()}</kbd></td>
					<td>{m.showDeathMessages_type()}</td>
					<td>{m.showDeathMessages_category()}</td>
					<td
						class={isAvailability(m.showDeathMessages_java_edition())}>{m.showDeathMessages_java_edition()}</td
					>
					<td
						class={isAvailability(m.showDeathMessages_bedrock_edition())}>{m.showDeathMessages_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.showRecipeMessages_game_rules()} ${m.showRecipeMessages_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.showRecipeMessages_game_rules()} ${m.showRecipeMessages_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.showRecipeMessages_game_rules()}</kbd></td>
					<td>{m.showRecipeMessages_description()}</td>
					<td><kbd class="kbd">{m.showRecipeMessages_default_value()}</kbd></td>
					<td>{m.showRecipeMessages_type()}</td>
					<td>{m.showRecipeMessages_category()}</td>
					<td
						class={isAvailability(m.showRecipeMessages_java_edition())}>{m.showRecipeMessages_java_edition()}</td
					>
					<td
						class={isAvailability(m.showRecipeMessages_bedrock_edition())}>{m.showRecipeMessages_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.showTags_game_rules()} ${m.showTags_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.showTags_game_rules()} ${m.showTags_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.showTags_game_rules()}</kbd></td>
					<td>{m.showTags_description()}</td>
					<td><kbd class="kbd">{m.showTags_default_value()}</kbd></td>
					<td>{m.showTags_type()}</td>
					<td>{m.showTags_category()}</td>
					<td
						class={isAvailability(m.showTags_java_edition())}>{m.showTags_java_edition()}</td
					>
					<td
						class={isAvailability(m.showTags_bedrock_edition())}>{m.showTags_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.snowAccumulationHeight_game_rules()} ${m.snowAccumulationHeight_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.snowAccumulationHeight_game_rules()} ${m.snowAccumulationHeight_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.snowAccumulationHeight_game_rules()}</kbd></td>
					<td>{m.snowAccumulationHeight_description()}</td>
					<td><kbd class="kbd">{m.snowAccumulationHeight_default_value()}</kbd></td>
					<td>{m.snowAccumulationHeight_type()}</td>
					<td>{m.snowAccumulationHeight_category()}</td>
					<td
						class={isAvailability(m.snowAccumulationHeight_java_edition())}>{m.snowAccumulationHeight_java_edition()}</td
					>
					<td
						class={isAvailability(m.snowAccumulationHeight_bedrock_edition())}>{m.snowAccumulationHeight_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.spawnChunkRadius_game_rules()} ${m.spawnChunkRadius_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.spawnChunkRadius_game_rules()} ${m.spawnChunkRadius_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.spawnChunkRadius_game_rules()}</kbd></td>
					<td>{m.spawnChunkRadius_description()}</td>
					<td><kbd class="kbd">{m.spawnChunkRadius_default_value()}</kbd></td>
					<td>{m.spawnChunkRadius_type()}</td>
					<td>{m.spawnChunkRadius_category()}</td>
					<td
						class={isAvailability(m.spawnChunkRadius_java_edition())}>{m.spawnChunkRadius_java_edition()}</td
					>
					<td
						class={isAvailability(m.spawnChunkRadius_bedrock_edition())}>{m.spawnChunkRadius_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.spawnRadius_game_rules()} ${m.spawnRadius_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.spawnRadius_game_rules()} ${m.spawnRadius_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.spawnRadius_game_rules()}</kbd></td>
					<td>{m.spawnRadius_description()}</td>
					<td><kbd class="kbd">{m.spawnRadius_default_value()}</kbd></td>
					<td>{m.spawnRadius_type()}</td>
					<td>{m.spawnRadius_category()}</td>
					<td
						class={isAvailability(m.spawnRadius_java_edition())}>{m.spawnRadius_java_edition()}</td
					>
					<td
						class={isAvailability(m.spawnRadius_bedrock_edition())}>{m.spawnRadius_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.spectatorsGenerateChunks_game_rules()} ${m.spectatorsGenerateChunks_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.spectatorsGenerateChunks_game_rules()} ${m.spectatorsGenerateChunks_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.spectatorsGenerateChunks_game_rules()}</kbd></td>
					<td>{m.spectatorsGenerateChunks_description()}</td>
					<td><kbd class="kbd">{m.spectatorsGenerateChunks_default_value()}</kbd></td>
					<td>{m.spectatorsGenerateChunks_type()}</td>
					<td>{m.spectatorsGenerateChunks_category()}</td>
					<td
						class={isAvailability(m.spectatorsGenerateChunks_java_edition())}>{m.spectatorsGenerateChunks_java_edition()}</td
					>
					<td
						class={isAvailability(m.spectatorsGenerateChunks_bedrock_edition())}>{m.spectatorsGenerateChunks_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.tntExplodes_game_rules()} ${m.tntExplodes_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.tntExplodes_game_rules()} ${m.tntExplodes_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.tntExplodes_game_rules()}</kbd></td>
					<td>{m.tntExplodes_description()}</td>
					<td><kbd class="kbd">{m.tntExplodes_default_value()}</kbd></td>
					<td>{m.tntExplodes_type()}</td>
					<td>{m.tntExplodes_category()}</td>
					<td
						class={isAvailability(m.tntExplodes_java_edition())}>{m.tntExplodes_java_edition()}</td
					>
					<td
						class={isAvailability(m.tntExplodes_bedrock_edition())}>{m.tntExplodes_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.tntExplosionDropDecay_game_rules()} ${m.tntExplosionDropDecay_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.tntExplosionDropDecay_game_rules()} ${m.tntExplosionDropDecay_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.tntExplosionDropDecay_game_rules()}</kbd></td>
					<td>{m.tntExplosionDropDecay_description()}</td>
					<td><kbd class="kbd">{m.tntExplosionDropDecay_default_value()}</kbd></td>
					<td>{m.tntExplosionDropDecay_type()}</td>
					<td>{m.tntExplosionDropDecay_category()}</td>
					<td
						class={isAvailability(m.tntExplosionDropDecay_java_edition())}>{m.tntExplosionDropDecay_java_edition()}</td
					>
					<td
						class={isAvailability(m.tntExplosionDropDecay_bedrock_edition())}>{m.tntExplosionDropDecay_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.universalAnger_game_rules()} ${m.universalAnger_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.universalAnger_game_rules()} ${m.universalAnger_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.universalAnger_game_rules()}</kbd></td>
					<td>{m.universalAnger_description()}</td>
					<td><kbd class="kbd">{m.universalAnger_default_value()}</kbd></td>
					<td>{m.universalAnger_type()}</td>
					<td>{m.universalAnger_category()}</td>
					<td
						class={isAvailability(m.universalAnger_java_edition())}>{m.universalAnger_java_edition()}</td
					>
					<td
						class={isAvailability(m.universalAnger_bedrock_edition())}>{m.universalAnger_bedrock_edition()}</td
					>
				</tr>
				<tr>
					<td>
						<div
							class="tooltip tooltip-right"
							data-tip={`/gamerule ${m.waterSourceConversion_game_rules()} ${m.waterSourceConversion_default_value()}`}
						>
							<button
								class="btn btn-sm btn-neutral"
								onclick={() => {
									writeClipboardText(
										`/gamerule ${m.waterSourceConversion_game_rules()} ${m.waterSourceConversion_default_value()}`
									);
								}}
							>
								{m.copy_to_clipboard()}
							</button>
						</div>
					</td>
					<td><kbd class="kbd">{m.waterSourceConversion_game_rules()}</kbd></td>
					<td>{m.waterSourceConversion_description()}</td>
					<td><kbd class="kbd">{m.waterSourceConversion_default_value()}</kbd></td>
					<td>{m.waterSourceConversion_type()}</td>
					<td>{m.waterSourceConversion_category()}</td>
					<td
						class={isAvailability(m.waterSourceConversion_java_edition())}>{m.waterSourceConversion_java_edition()}</td
					>
					<td
						class={isAvailability(m.waterSourceConversion_bedrock_edition())}>{m.waterSourceConversion_bedrock_edition()}</td
					>
				</tr>
			</tbody>
		</table>
	</div>
</div>
