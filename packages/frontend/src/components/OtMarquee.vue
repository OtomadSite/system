<template>
	<div :class="$style.marqueeWrapper">
		<div :class="[$style.marqueeItem, $style.marqueeBackground]">
			<img src="../../assets/otomad-site.svg" />
		</div>
	</div>
</template>

<style module>
.marqueeWrapper {
	height: 48px; background: #000000; position: relative;
}

.marqueeItem {
	top: 0; bottom: 0; left: 0; right: 0; position: absolute;
}

.marqueeBackground {
	background: linear-gradient(to top, #333333, #666666); display: flex; justify-content: center; align-items: center; z-index: 1;
	img { height: calc(100% / 2); opacity: 0.25; }
}
</style>