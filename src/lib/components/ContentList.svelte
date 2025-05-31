<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { gsap } from 'gsap';
	import { onMount, tick } from 'svelte';
	import { ArrowUp } from '@lucide/svelte';

	const AVAILABILITY_STATUS = {
		SUPPORT: 'text-green-500',
		UNSUPPORT: 'text-red-500'
	};

	const listRules = [
		{
			game_rules_tooltip: `/gamerule allowFireTicksAwayFromPlayer false`,
			game_rules_clipboard: `/gamerule allowFireTicksAwayFromPlayer false`,
			game_rules: m.allowFireTicksAwayFromPlayer_game_rules(),
			description: m.allowFireTicksAwayFromPlayer_description(),
			default_value: m.allowFireTicksAwayFromPlayer_default_value(),
			type: m.allowFireTicksAwayFromPlayer_type(),
			category: m.allowFireTicksAwayFromPlayer_category(),
			java_edition: m.allowFireTicksAwayFromPlayer_java_edition(),
			bedrock_edition: m.allowFireTicksAwayFromPlayer_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule announceAdvancements true`,
			game_rules_clipboard: `/gamerule announceAdvancements true`,
			game_rules: m.announceAdvancements_game_rules(),
			description: m.announceAdvancements_description(),
			default_value: m.announceAdvancements_default_value(),
			type: m.announceAdvancements_type(),
			category: m.announceAdvancements_category(),
			java_edition: m.announceAdvancements_java_edition(),
			bedrock_edition: m.announceAdvancements_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule blockExplosionDropDecay false`,
			game_rules_clipboard: `/gamerule blockExplosionDropDecay false`,
			game_rules: m.blockExplosionDropDecay_game_rules(),
			description: m.blockExplosionDropDecay_description(),
			default_value: m.blockExplosionDropDecay_default_value(),
			type: m.blockExplosionDropDecay_type(),
			category: m.blockExplosionDropDecay_category(),
			java_edition: m.blockExplosionDropDecay_java_edition(),
			bedrock_edition: m.blockExplosionDropDecay_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule commandBlockOutput true`,
			game_rules_clipboard: `/gamerule commandBlockOutput true`,
			game_rules: m.commandBlockOutput_game_rules(),
			description: m.commandBlockOutput_description(),
			default_value: m.commandBlockOutput_default_value(),
			type: m.commandBlockOutput_type(),
			category: m.commandBlockOutput_category(),
			java_edition: m.commandBlockOutput_java_edition(),
			bedrock_edition: m.commandBlockOutput_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule commandBlocksEnabled true`,
			game_rules_clipboard: `/gamerule commandBlocksEnabled true`,
			game_rules: m.commandBlocksEnabled_game_rules(),
			description: m.commandBlocksEnabled_description(),
			default_value: m.commandBlocksEnabled_default_value(),
			type: m.commandBlocksEnabled_type(),
			category: m.commandBlocksEnabled_category(),
			java_edition: m.commandBlocksEnabled_java_edition(),
			bedrock_edition: m.commandBlocksEnabled_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule commandModificationBlockLimit 32768`,
			game_rules_clipboard: `/gamerule commandModificationBlockLimit 32768`,
			game_rules: m.commandModificationBlockLimit_game_rules(),
			description: m.commandModificationBlockLimit_description(),
			default_value: m.commandModificationBlockLimit_default_value(),
			type: m.commandModificationBlockLimit_type(),
			category: m.commandModificationBlockLimit_category(),
			java_edition: m.commandModificationBlockLimit_java_edition(),
			bedrock_edition: m.commandModificationBlockLimit_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule disableElytraMovementCheck false`,
			game_rules_clipboard: `/gamerule disableElytraMovementCheck false`,
			game_rules: m.disableElytraMovementCheck_game_rules(),
			description: m.disableElytraMovementCheck_description(),
			default_value: m.disableElytraMovementCheck_default_value(),
			type: m.disableElytraMovementCheck_type(),
			category: m.disableElytraMovementCheck_category(),
			java_edition: m.disableElytraMovementCheck_java_edition(),
			bedrock_edition: m.disableElytraMovementCheck_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule disablePlayerMovementCheck false`,
			game_rules_clipboard: `/gamerule disablePlayerMovementCheck false`,
			game_rules: m.disablePlayerMovementCheck_game_rules(),
			description: m.disablePlayerMovementCheck_description(),
			default_value: m.disablePlayerMovementCheck_default_value(),
			type: m.disablePlayerMovementCheck_type(),
			category: m.disablePlayerMovementCheck_category(),
			java_edition: m.disablePlayerMovementCheck_java_edition(),
			bedrock_edition: m.disablePlayerMovementCheck_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule disableRaids false`,
			game_rules_clipboard: `/gamerule disableRaids false`,
			game_rules: m.disableRaids_game_rules(),
			description: m.disableRaids_description(),
			default_value: m.disableRaids_default_value(),
			type: m.disableRaids_type(),
			category: m.disableRaids_category(),
			java_edition: m.disableRaids_java_edition(),
			bedrock_edition: m.disableRaids_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doDaylightCycle true`,
			game_rules_clipboard: `/gamerule doDaylightCycle true`,
			game_rules: m.doDaylightCycle_game_rules(),
			description: m.doDaylightCycle_description(),
			default_value: m.doDaylightCycle_default_value(),
			type: m.doDaylightCycle_type(),
			category: m.doDaylightCycle_category(),
			java_edition: m.doDaylightCycle_java_edition(),
			bedrock_edition: m.doDaylightCycle_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doEntityDrops true`,
			game_rules_clipboard: `/gamerule doEntityDrops true`,
			game_rules: m.doEntityDrops_game_rules(),
			description: m.doEntityDrops_description(),
			default_value: m.doEntityDrops_default_value(),
			type: m.doEntityDrops_type(),
			category: m.doEntityDrops_category(),
			java_edition: m.doEntityDrops_java_edition(),
			bedrock_edition: m.doEntityDrops_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doFireTick true`,
			game_rules_clipboard: `/gamerule doFireTick true`,
			game_rules: m.doFireTick_game_rules(),
			description: m.doFireTick_description(),
			default_value: m.doFireTick_default_value(),
			type: m.doFireTick_type(),
			category: m.doFireTick_category(),
			java_edition: m.doFireTick_java_edition(),
			bedrock_edition: m.doFireTick_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doImmediateRespawn false`,
			game_rules_clipboard: `/gamerule doImmediateRespawn false`,
			game_rules: m.doImmediateRespawn_game_rules(),
			description: m.doImmediateRespawn_description(),
			default_value: m.doImmediateRespawn_default_value(),
			type: m.doImmediateRespawn_type(),
			category: m.doImmediateRespawn_category(),
			java_edition: m.doImmediateRespawn_java_edition(),
			bedrock_edition: m.doImmediateRespawn_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doInsomnia true`,
			game_rules_clipboard: `/gamerule doInsomnia true`,
			game_rules: m.doInsomnia_game_rules(),
			description: m.doInsomnia_description(),
			default_value: m.doInsomnia_default_value(),
			type: m.doInsomnia_type(),
			category: m.doInsomnia_category(),
			java_edition: m.doInsomnia_java_edition(),
			bedrock_edition: m.doInsomnia_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doLimitedCrafting false`,
			game_rules_clipboard: `/gamerule doLimitedCrafting false`,
			game_rules: m.doLimitedCrafting_game_rules(),
			description: m.doLimitedCrafting_description(),
			default_value: m.doLimitedCrafting_default_value(),
			type: m.doLimitedCrafting_type(),
			category: m.doLimitedCrafting_category(),
			java_edition: m.doLimitedCrafting_java_edition(),
			bedrock_edition: m.doLimitedCrafting_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doLimitedCrafting false`,
			game_rules_clipboard: `/gamerule doLimitedCrafting false`,
			game_rules: m.doLimitedCrafting_game_rules(),
			description: m.doLimitedCrafting_description(),
			default_value: m.doLimitedCrafting_default_value(),
			type: m.doLimitedCrafting_type(),
			category: m.doLimitedCrafting_category(),
			java_edition: m.doLimitedCrafting_java_edition(),
			bedrock_edition: m.doLimitedCrafting_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doMobSpawning true`,
			game_rules_clipboard: `/gamerule doMobSpawning true`,
			game_rules: m.doMobSpawning_game_rules(),
			description: m.doMobSpawning_description(),
			default_value: m.doMobSpawning_default_value(),
			type: m.doMobSpawning_type(),
			category: m.doMobSpawning_category(),
			java_edition: m.doMobSpawning_java_edition(),
			bedrock_edition: m.doMobSpawning_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doPatrolSpawning true`,
			game_rules_clipboard: `/gamerule doPatrolSpawning true`,
			game_rules: m.doPatrolSpawning_game_rules(),
			description: m.doPatrolSpawning_description(),
			default_value: m.doPatrolSpawning_default_value(),
			type: m.doPatrolSpawning_type(),
			category: m.doPatrolSpawning_category(),
			java_edition: m.doPatrolSpawning_java_edition(),
			bedrock_edition: m.doPatrolSpawning_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doTileDrops true`,
			game_rules_clipboard: `/gamerule doTileDrops true`,
			game_rules: m.doTileDrops_game_rules(),
			description: m.doTileDrops_description(),
			default_value: m.doTileDrops_default_value(),
			type: m.doTileDrops_type(),
			category: m.doTileDrops_category(),
			java_edition: m.doTileDrops_java_edition(),
			bedrock_edition: m.doTileDrops_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doTraderSpawning true`,
			game_rules_clipboard: `/gamerule doTraderSpawning true`,
			game_rules: m.doTraderSpawning_game_rules(),
			description: m.doTraderSpawning_description(),
			default_value: m.doTraderSpawning_default_value(),
			type: m.doTraderSpawning_type(),
			category: m.doTraderSpawning_category(),
			java_edition: m.doTraderSpawning_java_edition(),
			bedrock_edition: m.doTraderSpawning_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doVinesSpread true`,
			game_rules_clipboard: `/gamerule doVinesSpread true`,
			game_rules: m.doVinesSpread_game_rules(),
			description: m.doVinesSpread_description(),
			default_value: m.doVinesSpread_default_value(),
			type: m.doVinesSpread_type(),
			category: m.doVinesSpread_category(),
			java_edition: m.doVinesSpread_java_edition(),
			bedrock_edition: m.doVinesSpread_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doWardenSpawning true`,
			game_rules_clipboard: `/gamerule doWardenSpawning true`,
			game_rules: m.doWardenSpawning_game_rules(),
			description: m.doWardenSpawning_description(),
			default_value: m.doWardenSpawning_default_value(),
			type: m.doWardenSpawning_type(),
			category: m.doWardenSpawning_category(),
			java_edition: m.doWardenSpawning_java_edition(),
			bedrock_edition: m.doWardenSpawning_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule doWeatherCycle true`,
			game_rules_clipboard: `/gamerule doWeatherCycle true`,
			game_rules: m.doWeatherCycle_game_rules(),
			description: m.doWeatherCycle_description(),
			default_value: m.doWeatherCycle_default_value(),
			type: m.doWeatherCycle_type(),
			category: m.doWeatherCycle_category(),
			java_edition: m.doWeatherCycle_java_edition(),
			bedrock_edition: m.doWeatherCycle_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule drowningDamage true`,
			game_rules_clipboard: `/gamerule drowningDamage true`,
			game_rules: m.drowningDamage_game_rules(),
			description: m.drowningDamage_description(),
			default_value: m.drowningDamage_default_value(),
			type: m.drowningDamage_type(),
			category: m.drowningDamage_category(),
			java_edition: m.drowningDamage_java_edition(),
			bedrock_edition: m.drowningDamage_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule enderPearlsVanishOnDeath true`,
			game_rules_clipboard: `/gamerule enderPearlsVanishOnDeath true`,
			game_rules: m.enderPearlsVanishOnDeath_game_rules(),
			description: m.enderPearlsVanishOnDeath_description(),
			default_value: m.enderPearlsVanishOnDeath_default_value(),
			type: m.enderPearlsVanishOnDeath_type(),
			category: m.enderPearlsVanishOnDeath_category(),
			java_edition: m.enderPearlsVanishOnDeath_java_edition(),
			bedrock_edition: m.enderPearlsVanishOnDeath_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule fallDamage true`,
			game_rules_clipboard: `/gamerule fallDamage true`,
			game_rules: m.fallDamage_game_rules(),
			description: m.fallDamage_description(),
			default_value: m.fallDamage_default_value(),
			type: m.fallDamage_type(),
			category: m.fallDamage_category(),
			java_edition: m.fallDamage_java_edition(),
			bedrock_edition: m.fallDamage_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule fireDamage true`,
			game_rules_clipboard: `/gamerule fireDamage true`,
			game_rules: m.fireDamage_game_rules(),
			description: m.fireDamage_description(),
			default_value: m.fireDamage_default_value(),
			type: m.fireDamage_type(),
			category: m.fireDamage_category(),
			java_edition: m.fireDamage_java_edition(),
			bedrock_edition: m.fireDamage_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule forgiveDeadPlayers false`,
			game_rules_clipboard: `/gamerule forgiveDeadPlayers false`,
			game_rules: m.forgiveDeadPlayers_game_rules(),
			description: m.forgiveDeadPlayers_description(),
			default_value: m.forgiveDeadPlayers_default_value(),
			type: m.forgiveDeadPlayers_type(),
			category: m.forgiveDeadPlayers_category(),
			java_edition: m.forgiveDeadPlayers_java_edition(),
			bedrock_edition: m.forgiveDeadPlayers_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule freezeDamage false`,
			game_rules_clipboard: `/gamerule freezeDamage false`,
			game_rules: m.freezeDamage_game_rules(),
			description: m.freezeDamage_description(),
			default_value: m.freezeDamage_default_value(),
			type: m.freezeDamage_type(),
			category: m.freezeDamage_category(),
			java_edition: m.freezeDamage_java_edition(),
			bedrock_edition: m.freezeDamage_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule functionCommandLimit false`,
			game_rules_clipboard: `/gamerule functionCommandLimit false`,
			game_rules: m.functionCommandLimit_game_rules(),
			description: m.functionCommandLimit_description(),
			default_value: m.functionCommandLimit_default_value(),
			type: m.functionCommandLimit_type(),
			category: m.functionCommandLimit_category(),
			java_edition: m.functionCommandLimit_java_edition(),
			bedrock_edition: m.functionCommandLimit_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule globalSoundEvents false`,
			game_rules_clipboard: `/gamerule globalSoundEvents false`,
			game_rules: m.globalSoundEvents_game_rules(),
			description: m.globalSoundEvents_description(),
			default_value: m.globalSoundEvents_default_value(),
			type: m.globalSoundEvents_type(),
			category: m.globalSoundEvents_category(),
			java_edition: m.globalSoundEvents_java_edition(),
			bedrock_edition: m.globalSoundEvents_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule keepInventory false`,
			game_rules_clipboard: `/gamerule keepInventory false`,
			game_rules: m.keepInventory_game_rules(),
			description: m.keepInventory_description(),
			default_value: m.keepInventory_default_value(),
			type: m.keepInventory_type(),
			category: m.keepInventory_category(),
			java_edition: m.keepInventory_java_edition(),
			bedrock_edition: m.keepInventory_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule lavaSourceConversion false`,
			game_rules_clipboard: `/gamerule lavaSourceConversion false`,
			game_rules: m.lavaSourceConversion_game_rules(),
			description: m.lavaSourceConversion_description(),
			default_value: m.lavaSourceConversion_default_value(),
			type: m.lavaSourceConversion_type(),
			category: m.lavaSourceConversion_category(),
			java_edition: m.lavaSourceConversion_java_edition(),
			bedrock_edition: m.lavaSourceConversion_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule locatorBar false`,
			game_rules_clipboard: `/gamerule locatorBar false`,
			game_rules: m.locatorBar_game_rules(),
			description: m.locatorBar_description(),
			default_value: m.locatorBar_default_value(),
			type: m.locatorBar_type(),
			category: m.locatorBar_category(),
			java_edition: m.locatorBar_java_edition(),
			bedrock_edition: m.locatorBar_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule logAdminCommands false`,
			game_rules_clipboard: `/gamerule logAdminCommands false`,
			game_rules: m.logAdminCommands_game_rules(),
			description: m.logAdminCommands_description(),
			default_value: m.logAdminCommands_default_value(),
			type: m.logAdminCommands_type(),
			category: m.logAdminCommands_category(),
			java_edition: m.logAdminCommands_java_edition(),
			bedrock_edition: m.logAdminCommands_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule maxCommandChainLength false`,
			game_rules_clipboard: `/gamerule maxCommandChainLength false`,
			game_rules: m.maxCommandChainLength_game_rules(),
			description: m.maxCommandChainLength_description(),
			default_value: m.maxCommandChainLength_default_value(),
			type: m.maxCommandChainLength_type(),
			category: m.maxCommandChainLength_category(),
			java_edition: m.maxCommandChainLength_java_edition(),
			bedrock_edition: m.maxCommandChainLength_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule maxCommandForkCount false`,
			game_rules_clipboard: `/gamerule maxCommandForkCount false`,
			game_rules: m.maxCommandForkCount_game_rules(),
			description: m.maxCommandForkCount_description(),
			default_value: m.maxCommandForkCount_default_value(),
			type: m.maxCommandForkCount_type(),
			category: m.maxCommandForkCount_category(),
			java_edition: m.maxCommandForkCount_java_edition(),
			bedrock_edition: m.maxCommandForkCount_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule maxEntityCramming false`,
			game_rules_clipboard: `/gamerule maxEntityCramming false`,
			game_rules: m.maxEntityCramming_game_rules(),
			description: m.maxEntityCramming_description(),
			default_value: m.maxEntityCramming_default_value(),
			type: m.maxEntityCramming_type(),
			category: m.maxEntityCramming_category(),
			java_edition: m.maxEntityCramming_java_edition(),
			bedrock_edition: m.maxEntityCramming_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule minecartMaxSpeed 8`,
			game_rules_clipboard: `/gamerule minecartMaxSpeed 8`,
			game_rules: m.minecartMaxSpeed_game_rules(),
			description: m.minecartMaxSpeed_description(),
			default_value: m.minecartMaxSpeed_default_value(),
			type: m.minecartMaxSpeed_type(),
			category: m.minecartMaxSpeed_category(),
			java_edition: m.minecartMaxSpeed_java_edition(),
			bedrock_edition: m.minecartMaxSpeed_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule mobExplosionDropDecay true`,
			game_rules_clipboard: `/gamerule mobExplosionDropDecay true`,
			game_rules: m.mobExplosionDropDecay_game_rules(),
			description: m.mobExplosionDropDecay_description(),
			default_value: m.mobExplosionDropDecay_default_value(),
			type: m.mobExplosionDropDecay_type(),
			category: m.mobExplosionDropDecay_category(),
			java_edition: m.mobExplosionDropDecay_java_edition(),
			bedrock_edition: m.mobExplosionDropDecay_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule mobGriefing true`,
			game_rules_clipboard: `/gamerule mobGriefing true`,
			game_rules: m.mobGriefing_game_rules(),
			description: m.mobGriefing_description(),
			default_value: m.mobGriefing_default_value(),
			type: m.mobGriefing_type(),
			category: m.mobGriefing_category(),
			java_edition: m.mobGriefing_java_edition(),
			bedrock_edition: m.mobGriefing_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule naturalRegeneration true`,
			game_rules_clipboard: `/gamerule naturalRegeneration true`,
			game_rules: m.naturalRegeneration_game_rules(),
			description: m.naturalRegeneration_description(),
			default_value: m.naturalRegeneration_default_value(),
			type: m.naturalRegeneration_type(),
			category: m.naturalRegeneration_category(),
			java_edition: m.naturalRegeneration_java_edition(),
			bedrock_edition: m.naturalRegeneration_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule playersNetherPortalCreativeDelay 0`,
			game_rules_clipboard: `/gamerule playersNetherPortalCreativeDelay 0`,
			game_rules: m.playersNetherPortalCreativeDelay_game_rules(),
			description: m.playersNetherPortalCreativeDelay_description(),
			default_value: m.playersNetherPortalCreativeDelay_default_value(),
			type: m.playersNetherPortalCreativeDelay_type(),
			category: m.playersNetherPortalCreativeDelay_category(),
			java_edition: m.playersNetherPortalCreativeDelay_java_edition(),
			bedrock_edition: m.playersNetherPortalCreativeDelay_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule playersNetherPortalDefaultDelay 80`,
			game_rules_clipboard: `/gamerule playersNetherPortalDefaultDelay 80`,
			game_rules: m.playersNetherPortalDefaultDelay_game_rules(),
			description: m.playersNetherPortalDefaultDelay_description(),
			default_value: m.playersNetherPortalDefaultDelay_default_value(),
			type: m.playersNetherPortalDefaultDelay_type(),
			category: m.playersNetherPortalDefaultDelay_category(),
			java_edition: m.playersNetherPortalDefaultDelay_java_edition(),
			bedrock_edition: m.playersNetherPortalDefaultDelay_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule playersSleepingPercentage 100`,
			game_rules_clipboard: `/gamerule playersSleepingPercentage 100`,
			game_rules: m.playersSleepingPercentage_game_rules(),
			description: m.playersSleepingPercentage_description(),
			default_value: m.playersSleepingPercentage_default_value(),
			type: m.playersSleepingPercentage_type(),
			category: m.playersSleepingPercentage_category(),
			java_edition: m.playersSleepingPercentage_java_edition(),
			bedrock_edition: m.playersSleepingPercentage_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule projectilesCanBreakBlocks true`,
			game_rules_clipboard: `/gamerule projectilesCanBreakBlocks true`,
			game_rules: m.projectilesCanBreakBlocks_game_rules(),
			description: m.projectilesCanBreakBlocks_description(),
			default_value: m.projectilesCanBreakBlocks_default_value(),
			type: m.projectilesCanBreakBlocks_type(),
			category: m.projectilesCanBreakBlocks_category(),
			java_edition: m.projectilesCanBreakBlocks_java_edition(),
			bedrock_edition: m.projectilesCanBreakBlocks_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule pvp true`,
			game_rules_clipboard: `/gamerule pvp true`,
			game_rules: m.pvp_game_rules(),
			description: m.pvp_description(),
			default_value: m.pvp_default_value(),
			type: m.pvp_type(),
			category: m.pvp_category(),
			java_edition: m.pvp_java_edition(),
			bedrock_edition: m.pvp_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule randomTickSpeed 3`,
			game_rules_clipboard: `/gamerule randomTickSpeed 3`,
			game_rules: m.randomTickSpeed_game_rules(),
			description: m.randomTickSpeed_description(),
			default_value: m.randomTickSpeed_default_value(),
			type: m.randomTickSpeed_type(),
			category: m.randomTickSpeed_category(),
			java_edition: m.randomTickSpeed_java_edition(),
			bedrock_edition: m.randomTickSpeed_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule recipesUnlock true`,
			game_rules_clipboard: `/gamerule recipesUnlock true`,
			game_rules: m.recipesUnlock_game_rules(),
			description: m.recipesUnlock_description(),
			default_value: m.recipesUnlock_default_value(),
			type: m.recipesUnlock_type(),
			category: m.recipesUnlock_category(),
			java_edition: m.recipesUnlock_java_edition(),
			bedrock_edition: m.recipesUnlock_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule reducedDebugInfo false`,
			game_rules_clipboard: `/gamerule reducedDebugInfo false`,
			game_rules: m.reducedDebugInfo_game_rules(),
			description: m.reducedDebugInfo_description(),
			default_value: m.reducedDebugInfo_default_value(),
			type: m.reducedDebugInfo_type(),
			category: m.reducedDebugInfo_category(),
			java_edition: m.reducedDebugInfo_java_edition(),
			bedrock_edition: m.reducedDebugInfo_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule respawnBlocksExplode true`,
			game_rules_clipboard: `/gamerule respawnBlocksExplode true`,
			game_rules: m.respawnBlocksExplode_game_rules(),
			description: m.respawnBlocksExplode_description(),
			default_value: m.respawnBlocksExplode_default_value(),
			type: m.respawnBlocksExplode_type(),
			category: m.respawnBlocksExplode_category(),
			java_edition: m.respawnBlocksExplode_java_edition(),
			bedrock_edition: m.respawnBlocksExplode_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule sendCommandFeedback true`,
			game_rules_clipboard: `/gamerule sendCommandFeedback true`,
			game_rules: m.sendCommandFeedback_game_rules(),
			description: m.sendCommandFeedback_description(),
			default_value: m.sendCommandFeedback_default_value(),
			type: m.sendCommandFeedback_type(),
			category: m.sendCommandFeedback_category(),
			java_edition: m.sendCommandFeedback_java_edition(),
			bedrock_edition: m.sendCommandFeedback_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule showBorderEffect true`,
			game_rules_clipboard: `/gamerule showBorderEffect true`,
			game_rules: m.showBorderEffect_game_rules(),
			description: m.showBorderEffect_description(),
			default_value: m.showBorderEffect_default_value(),
			type: m.showBorderEffect_type(),
			category: m.showBorderEffect_category(),
			java_edition: m.showBorderEffect_java_edition(),
			bedrock_edition: m.showBorderEffect_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule showCoordinates true`,
			game_rules_clipboard: `/gamerule showCoordinates true`,
			game_rules: m.showCoordinates_game_rules(),
			description: m.showCoordinates_description(),
			default_value: m.showCoordinates_default_value(),
			type: m.showCoordinates_type(),
			category: m.showCoordinates_category(),
			java_edition: m.showCoordinates_java_edition(),
			bedrock_edition: m.showCoordinates_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule showDaysPlayed false`,
			game_rules_clipboard: `/gamerule showDaysPlayed false`,
			game_rules: m.showDaysPlayed_game_rules(),
			description: m.showDaysPlayed_description(),
			default_value: m.showDaysPlayed_default_value(),
			type: m.showDaysPlayed_type(),
			category: m.showDaysPlayed_category(),
			java_edition: m.showDaysPlayed_java_edition(),
			bedrock_edition: m.showDaysPlayed_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule showDeathMessages true`,
			game_rules_clipboard: `/gamerule showDeathMessages true`,
			game_rules: m.showDeathMessages_game_rules(),
			description: m.showDeathMessages_description(),
			default_value: m.showDeathMessages_default_value(),
			type: m.showDeathMessages_type(),
			category: m.showDeathMessages_category(),
			java_edition: m.showDeathMessages_java_edition(),
			bedrock_edition: m.showDeathMessages_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule showRecipeMessages true`,
			game_rules_clipboard: `/gamerule showRecipeMessages true`,
			game_rules: m.showRecipeMessages_game_rules(),
			description: m.showRecipeMessages_description(),
			default_value: m.showRecipeMessages_default_value(),
			type: m.showRecipeMessages_type(),
			category: m.showRecipeMessages_category(),
			java_edition: m.showRecipeMessages_java_edition(),
			bedrock_edition: m.showRecipeMessages_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule showTags true`,
			game_rules_clipboard: `/gamerule showTags true`,
			game_rules: m.showTags_game_rules(),
			description: m.showTags_description(),
			default_value: m.showTags_default_value(),
			type: m.showTags_type(),
			category: m.showTags_category(),
			java_edition: m.showTags_java_edition(),
			bedrock_edition: m.showTags_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule snowAccumulationHeight 1`,
			game_rules_clipboard: `/gamerule snowAccumulationHeight 1`,
			game_rules: m.snowAccumulationHeight_game_rules(),
			description: m.snowAccumulationHeight_description(),
			default_value: m.snowAccumulationHeight_default_value(),
			type: m.snowAccumulationHeight_type(),
			category: m.snowAccumulationHeight_category(),
			java_edition: m.snowAccumulationHeight_java_edition(),
			bedrock_edition: m.snowAccumulationHeight_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule spawnChunkRadius 2`,
			game_rules_clipboard: `/gamerule spawnChunkRadius 2`,
			game_rules: m.spawnChunkRadius_game_rules(),
			description: m.spawnChunkRadius_description(),
			default_value: m.spawnChunkRadius_default_value(),
			type: m.spawnChunkRadius_type(),
			category: m.spawnChunkRadius_category(),
			java_edition: m.spawnChunkRadius_java_edition(),
			bedrock_edition: m.spawnChunkRadius_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule spawnRadius 10`,
			game_rules_clipboard: `/gamerule spawnRadius 10`,
			game_rules: m.spawnRadius_game_rules(),
			description: m.spawnRadius_description(),
			default_value: m.spawnRadius_default_value(),
			type: m.spawnRadius_type(),
			category: m.spawnRadius_category(),
			java_edition: m.spawnRadius_java_edition(),
			bedrock_edition: m.spawnRadius_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule spectatorsGenerateChunks true`,
			game_rules_clipboard: `/gamerule spectatorsGenerateChunks true`,
			game_rules: m.spectatorsGenerateChunks_game_rules(),
			description: m.spectatorsGenerateChunks_description(),
			default_value: m.spectatorsGenerateChunks_default_value(),
			type: m.spectatorsGenerateChunks_type(),
			category: m.spectatorsGenerateChunks_category(),
			java_edition: m.spectatorsGenerateChunks_java_edition(),
			bedrock_edition: m.spectatorsGenerateChunks_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule tntExplodes true`,
			game_rules_clipboard: `/gamerule tntExplodes true`,
			game_rules: m.tntExplodes_game_rules(),
			description: m.tntExplodes_description(),
			default_value: m.tntExplodes_default_value(),
			type: m.tntExplodes_type(),
			category: m.tntExplodes_category(),
			java_edition: m.tntExplodes_java_edition(),
			bedrock_edition: m.tntExplodes_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule tntExplosionDropDecay false`,
			game_rules_clipboard: `/gamerule tntExplosionDropDecay false`,
			game_rules: m.tntExplosionDropDecay_game_rules(),
			description: m.tntExplosionDropDecay_description(),
			default_value: m.tntExplosionDropDecay_default_value(),
			type: m.tntExplosionDropDecay_type(),
			category: m.tntExplosionDropDecay_category(),
			java_edition: m.tntExplosionDropDecay_java_edition(),
			bedrock_edition: m.tntExplosionDropDecay_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule universalAnger false`,
			game_rules_clipboard: `/gamerule universalAnger false`,
			game_rules: m.universalAnger_game_rules(),
			description: m.universalAnger_description(),
			default_value: m.universalAnger_default_value(),
			type: m.universalAnger_type(),
			category: m.universalAnger_category(),
			java_edition: m.universalAnger_java_edition(),
			bedrock_edition: m.universalAnger_bedrock_edition()
		},
		{
			game_rules_tooltip: `/gamerule waterSourceConversion true`,
			game_rules_clipboard: `/gamerule waterSourceConversion true`,
			game_rules: m.waterSourceConversion_game_rules(),
			description: m.waterSourceConversion_description(),
			default_value: m.waterSourceConversion_default_value(),
			type: m.waterSourceConversion_type(),
			category: m.waterSourceConversion_category(),
			java_edition: m.waterSourceConversion_java_edition(),
			bedrock_edition: m.waterSourceConversion_bedrock_edition()
		}
	];

	let copiedIndex: number | null = $state(null);

	let search: string = $state('');

	const threshold: number = 100;

	let ticking = $state(false);
	let isVisibility = $state(false);

	const handleScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				isVisibility = scrollTop > threshold;
				ticking = false;
			});
			ticking = true;
		}
	};

	onMount(() => {
		gsap.from('.table-animation', { opacity: 0, y: 100, duration: 1, ease: 'bounce.out' });
		gsap.from('.table-text-animation', { opacity: 0, duration: 1, delay: 1 });
		gsap.from('.table-body-animation', { opacity: 0, y: 100, duration: 1, ease: 'sine.out' });
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const isAvailability = (text: string): string =>
		['Yes', 'ใช่'].includes(text) ? AVAILABILITY_STATUS.SUPPORT : AVAILABILITY_STATUS.UNSUPPORT;

	let filteredListRules = $derived(
		listRules.filter(
			(rule) =>
				rule.game_rules.toLowerCase().includes(search.toLowerCase()) ||
				rule.description.toLowerCase().includes(search.toLowerCase()) ||
				rule.category.toLowerCase().includes(search.toLowerCase())
		)
	);

	const writeClipboardText = async (text: string, index: number) => {
		if (!navigator.clipboard) return;
		try {
			await navigator.clipboard.writeText(text);
			copiedIndex = index;
			await tick();
			setTimeout(() => {
				copiedIndex = null;
			}, 1500);
		} catch (err) {
			console.error('Copy failed:', err);
		}
	};

	const backToTopBtn = () => {
		if ('scrollBehavior' in document.documentElement.style) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			window.scrollTo(0, 0);
		}
	};
</script>

<button
	onclick={backToTopBtn}
	class={`transition-visibility fixed right-[1.5rem] bottom-[1.5rem] z-200 inline-block h-[2.75rem] w-[2.75rem] cursor-pointer border-none transition-opacity duration-500
 will-change-[opacity] ${isVisibility ? 'visible opacity-100' : 'invisible opacity-0'} rounded-md bg-blue-900/80 p-2 text-white hover:brightness-[1.20] active:cursor-grab`}
	aria-label="Back to top"
	title="Back to top"
>
	<ArrowUp class="h-full w-full" />
</button>
<section class="min-h-screen bg-black px-10 text-neutral-300 md:px-20">
	<div class="flex w-full items-center justify-center sm:justify-end">
		<div class="relative mb-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
			<span
				class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"
			>
				🔍
			</span>
			<input
				type="search"
				bind:value={search}
				placeholder={m.search()}
				class="w-full rounded-lg border border-gray-600 bg-transparent py-2 pr-4 pl-10 text-neutral-300 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
			/>
		</div>
	</div>
	<div class="table-animation overflow-x-auto rounded-xl">
		<table class="w-full min-w-[900px] table-auto border-collapse">
			<thead class="bg-blue-900 text-center font-medium text-nowrap text-neutral-300">
				<tr>
					<th rowspan="2" class="table-text-animation border border-black px-4 py-3"
						>📋 {m.copy_command()}</th
					>
					<th rowspan="2" class="table-text-animation border border-black px-4 py-3"
						>{m.rule_name()}</th
					>
					<th rowspan="2" class="table-text-animation border border-black px-4 py-3"
						>{m.description()}</th
					>
					<th rowspan="2" class="table-text-animation border border-black px-4 py-3"
						>{m.default_value()}</th
					>
					<th rowspan="2" class="table-text-animation border border-black px-4 py-3">{m.type()}</th>
					<th rowspan="2" class="table-text-animation border border-black px-4 py-3"
						>{m.category()}</th
					>
					<th colspan="2" class="table-text-animation border border-black px-4 py-3"
						>{m.availability()}</th
					>
				</tr>
				<tr>
					<th class="table-text-animation border border-black px-4 py-2">{m.java_edition()}</th>
					<th class="table-text-animation border border-black px-4 py-2">{m.bedrock_edition()}</th>
				</tr>
			</thead>
			<tbody
				class="table-body-animation table-text-animation border border-black bg-gray-900 text-center text-neutral-300"
			>
				{#each filteredListRules as rule, index (index)}
					<tr
						class={`${index % 2 === 0 ? '' : 'bg-gray-950'} transition-colors duration-300 hover:bg-blue-950`}
					>
						<td class="py-5">
							<button
								title={rule.game_rules_tooltip}
								class="rounded-md bg-blue-900 px-5 text-neutral-300 transition-transform hover:bg-blue-800 active:scale-95"
								type="button"
								onclick={() => writeClipboardText(rule.game_rules_clipboard, index)}
								>{copiedIndex === index ? m.copied_to_clipboard() : m.copy_to_clipboard()}</button
							>
						</td>
						<td class="text-left">{rule.game_rules}</td>
						<td class="text-left">{rule.description}</td>
						<td><pre class="font-kanit">{rule.default_value}</pre></td>
						<td>
							<pre class="font-kanit">{rule.type}</pre>
						</td>
						<td>{rule.category}</td>
						<td class={isAvailability(rule.java_edition)}>{rule.java_edition}</td>
						<td class={isAvailability(rule.bedrock_edition)}>{rule.bedrock_edition}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
