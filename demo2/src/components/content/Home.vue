<template>
	<div class="home homeP">
		<p class="title">HOME</p>
		<Chart />
		<Centences />
	</div>
</template>

<script>
import Chart from "./Chart.vue";

import Centences from "./Centences.vue";

export default {
	name: "Home",
	components: {
		Chart,
		Centences,
	},
};
</script>

<style>
.homeP {
	height: 80%;
}
.home .chart {
	position: relative;
}

.home .sentencePlayground {
	margin-top: 2em;
}
</style>