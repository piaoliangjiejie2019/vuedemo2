<template>
	<div class="tabbar">
		<div class="home" @click="toHome()">
			<span :style="{ color: tabbarColors[0] }">首页</span>
		</div>
		<div class="personal" @click="toPersonal()">
			<span :style="{ color: tabbarColors[1] }">个人</span>
		</div>
		<div class="users" @click="toUsers()">
			<span :style="{ color: tabbarColors[2] }">用户</span>
		</div>
	</div>
	<!-- <router-view /> -->
</template>

<script>
export default {
	name: "Tabbar",
	data() {
		return {
			tabbarColors: ["red", "#222", "#222"],
			isActive: [true, false, false],
		};
	},
	methods: {
		toHome() {
			this.getColor(0);
			console.log(this.tabbarColors);
			return this.$router.push("/home");
		},
		toPersonal() {
			this.getColor(1);
			console.log(this.tabbarColors);
			return this.$router.push("/personal");
		},
		toUsers() {
			this.getColor(2);
			console.log(this.tabbarColors);
			return this.$router.push("/users");
		},
		getColor(index) {
			console.log(index);
			console.log(this.tabbarColors[index]);
			this.tabbarColors = ["#222", "#222", "#222"];
			this.tabbarColors[index] = "red";
		},
	},
};
</script>

<style>
.tabbar {
	display: flex;
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 9%;
	/* background-color: antiquewhite; */
	box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.08);
}

.tabbar > div {
	flex: 1;
	position: relative;
}

.tabbar > div > span {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>