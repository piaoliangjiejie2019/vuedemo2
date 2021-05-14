<template>
	<div class="home">
		<p class="title">HOME</p>
		<Chart />
		<div class="sentencePlayground">
			<h2>sentence Playground</h2>
		</div>
	</div>
</template>

<script>
import Chart from "./Chart.vue";

export default {
	name: "Home",
	components: {
		Chart,
	},
};
</script>

<style>
.home .chart {
	position: relative;
}
</style>