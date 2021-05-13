<template>
	<div class="home">
		<p class="title">HOME</p>
		<div class="chart">
			<ul>
				<li v-show="showimg[0]"></li>
				<li v-show="showimg[1]"></li>
				<li v-show="showimg[0]"></li>
			</ul>
			<button class="back" @mouseover="overBack()" @mouseout="outBack()">
				<img :src="backSrc" alt="" />

				<!-- <i class="iconfont icon-qianjin"></i> -->
			</button>
			<button class="next" @mouseover="overNext()" @mouseout="outNext()">
				<!-- <i class="iconfont icon-houtui">&#xe693;</i> -->
				<img :src="nextSrc" alt="" />
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			nextSrc: "static/img/home/next_cdcdcd.png",
			backSrc: "static/img/home/back_cdcdcd.png",
			showimg: [true, false, false],
		};
	},
	methods: {
		overBack() {
			this.backSrc = "static/img/home/back.png";
		},
		outBack() {
			this.backSrc = "static/img/home/back_cdcdcd.png";
		},
		overNext() {
			this.nextSrc = "static/img/home/next.png";
		},
		outNext() {
			this.nextSrc = "static/img/home/next_cdcdcd.png";
		},
	},
};
</script>

<style>
.home .chart {
	position: relative;
}
.home .chart button {
	display: block;
	background-color: #fbfbfb;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	width: 2em;
	height: 2em;
	cursor: pointer;
}

.home .chart > .back {
	left: 6%;
}

.home .chart > .next {
	right: 6%;
}
.home .chart button img {
	width: 2em;
}

.home .chart ul {
	position: relative;
	width: 300%;
	display: flex;
	height: 18em;
	/* background-color: rgba(60, 60, 60, 0.5); */
}

.home .chart li {
	width: 100%;
	height: 18em;
	/* background-color: rgba(60, 60, 60, 0.5); */
	text-align: center;
	display: inline-block;
	position: absolute;

	background: url("../../assets/img/home/chart11.jpg") no-repeat center;
	background-size: 70%;
}

.home .chart li:nth-of-type(2) {
	background-image: url("../../assets/img/home/chart12.jpg");
	background-size: 70%;
}

.home .chart li:nth-of-type(3) {
	background-image: url("../../assets/img/home/chart15.jpg");
	background-size: 70%;
}
</style>