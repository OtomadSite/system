<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<section>
	<component :is="'h' + h" :class="$style.heading">
		{{ block.title }}
	</component>

	<div class="_gaps">
		<XBlock v-for="child in block.children" :key="child.id" :page="page" :block="child" :h="h + 1"/>
	</div>
</section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import * as Misskey from 'misskey-js';

const XBlock = defineAsyncComponent(() => import('./page.block.vue'));

defineProps<{
	block: Extract<Misskey.entities.PageBlock, { type: 'section' }>,
	h: number,
	page: Misskey.entities.Page,
}>();
</script>

<style lang="scss" module>
.heading { margin: 0 0 1rem; border-bottom: 1px solid var(--MI_THEME-fg); display: block; }
h2.heading { border-bottom: 4px solid var(--MI_THEME-accent); font-size: 1.5rem; font-weight: bold; }
h3.heading { border-bottom: 4px solid var(--MI_THEME-accent); font-size: 1.25rem; font-weight: bold; }
h4.heading { border-bottom: 4px solid var(--MI_THEME-accent); font-size: 1rem; font-weight: bold; }
h5.heading { border-bottom: 2px solid var(--MI_THEME-accent); font-size: 1rem; font-weight: normal; }
h6.heading { border-bottom: 1px solid var(--MI_THEME-accent); font-size: 1rem; font-weight: normal; }
</style>
