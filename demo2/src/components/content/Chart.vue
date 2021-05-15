<template>
	<div class="chart" @mouseover="overChart()" @mouseout="outChart()">
		<ul class="bg">
			<li
				v-for="(item, index) in showimg"
				:key="index"
				:class="{ bgshow: showimg[index] }"
			></li>
		</ul>
		<div class="point">
			<ul class="">
				<li
					v-for="(item, index) in showimg"
					:key="index"
					:class="{ per: showimg[index] }"
					@click="changeimg(index)"
				>
					.
				</li>
				<!-- <li :class="{ per: showimg[1] }" @click="changeimg(1)">.</li>
				<li :class="{ per: showimg[2] }" @click="changeimg(2)">.</li>
				<li :class="{ per: showimg[3] }" @click="changeimg(3)">.</li> -->
				<!-- <li :class="{ per: showimg[4] }" @click="changeimg(4)">.</li> -->
			</ul>
		</div>

		<button
			class="back"
			@mouseover="overBack()"
			@mouseout="outBack()"
			@click="back()"
		>
			<img :src="backSrc" alt="" />

			<!-- <i class="iconfont icon-qianjin"></i> -->
		</button>
		<button
			class="next"
			@mouseover="overNext()"
			@mouseout="outNext()"
			@click="next()"
		>
			<!-- <i class="iconfont icon-houtui">&#xe693;</i> -->
			<img :src="nextSrc" alt="" />
		</button>
	</div>
</template>

<script>
export default {
	name: "Chart",
	data() {
		return {
			nextSrc: "static/img/home/next_cdcdcd.png",
			backSrc: "static/img/home/back_cdcdcd.png",
			showimg: [true, false, false, false],
			index: 0,
		};
	},
	methods: {
		overChart() {
			// console.log(window.timer);
			clearInterval(window.timer);
		},
		outChart() {
			const that = this;
			window.timer = setInterval(function () {
				that.next();
			}, 3000);
		},
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
		back() {
			if (this.index == 0) {
				this.index = this.showimg.length - 1;
			} else {
				this.index -= 1;
			}
			this.showimg = [false, false, false, false];
			this.showimg[this.index] = true;
		},
		next() {
			if (this.index == this.showimg.length - 1) {
				this.index = 0;
			} else {
				this.index += 1;
			}
			this.showimg = [false, false, false, false];
			this.showimg[this.index] = true;
		},
		changeimg(index) {
			this.showimg = [false, false, false, false];
			this.showimg[index] = true;
		},
	},
	mounted() {
		const that = this;
		window.timer = setInterval(function () {
			that.next();
		}, 3000);
	},
};
</script>

<style>
.chart button {
	display: block;
	background-color: #fbfbfb;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	width: 2em;
	height: 2em;
	cursor: pointer;
}

.chart > .back {
	left: 22%;
}

.chart > .next {
	right: 22%;
}
.chart button img {
	width: 2em;
}

.chart ul.bg {
	position: relative;
	width: 100%;
	display: flex;
	height: 18em;
	/* background-color: rgba(60, 60, 60, 0.5); */
}

.chart ul.bg li {
	width: 100%;
	height: 18em;
	/* background-color: rgba(60, 60, 60, 0.5); */
	text-align: center;
	display: inline-block;
	position: absolute;
	opacity: 0;
	background: url("../../assets/img/home/chart1.jpg") no-repeat center;
	background-size: 45%;
	transition: all 2s;
}

.chart ul.bg li.bgshow {
	opacity: 1;
}

.chart ul.bg li:nth-of-type(2) {
	background-image: url("../../assets/img/home/chart17.jpg");
	/* background-size: 70%; */
}

.chart ul.bg li:nth-of-type(3) {
	background-image: url("../../assets/img/home/chart3.jpg");
	/* background-size: 70%; */
}
.chart ul.bg li:nth-of-type(4) {
	background-image: url("../../assets/img/home/chart18.jpg");
	/* background-size: 70%; */
}
.chart ul.bg li:nth-of-type(5) {
	background-image: url("../../assets/img/home/chart2.jpg");
	/* background-size: 70%; */
}
.chart .point {
	position: absolute;
	height: 1em;
	width: 100%;
	/* text-align: center; */
	/* background-color: rgb(230, 230, 250); */
}

.chart .point ul {
	height: 1em;
	position: relative;
	width: 2.8em;
	left: 50%;
	transform: translateX(-50%);
	/* background-color: rgb(230, 230, 250); */
}
.chart .point ul > li {
	position: relative;
	float: left;
	height: 1em;
	line-height: 1em;
	font-size: 4em;
	top: -201%;
	margin-right: 0px;
	color: #cdcdcd;
	transition: all 0.3s;
	cursor: pointer;
}
.chart .point ul > li.per {
	color: darkorchid;
}
</style>