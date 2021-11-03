<template>
	<div class="tabbar">
		<!-- <div class="home" @click="toHome()" :class="getActive()"> -->
		<!-- <div class="home" @click="toHome()" v-bind:class="isActive[0]"> -->
		<div class="home" @click="toHome()" v-bind:class="{ active: homeActive }">
			<span>首页</span>
		</div>
		<div
			class="personal"
			@click="toPersonal()"
			v-bind:class="{ active: personalActive }"
		>
			<!-- <div class="personal" @click="toPersonal()" v-bind:class="isActive[1]"> -->
			<!-- <div class="personal" @click="toPersonal()" :class="getActive()"> -->
			<!-- <span :style="{ color: tabbarColors[1] }">个人</span> -->
			<span>个人中心</span>
		</div>
		<div
			class="users"
			@click="toUsers()"
			v-bind:class="{ active: usersActive }"
		>
			<!-- <div class="users" @click="toUsers()" v-bind:class="isActive[2]"> -->
			<!-- <div class="users" @click="toUsers()" :class="getActive()"> -->
			<span>其他</span>
			<!-- <span :style="{ color: tabbarColors[2] }">其他</span> -->
		</div>
	</div>
	<!-- <router-view /> -->
</template>

<script>
export default {
	name: "Tabbar",
	data() {
		// data: {
		return {
			tabbarColors: ["red", "#222", "#222"],
			// isActive: ["active", "", ""],
			homeActive: true,
			personalActive: false,
			usersActive: false,
			// is11: isActive,
			// userid: this.$route.params.id,
			userid: 1,
		};
	},
	methods: {
		toHome() {
			// this.changeTabbersStyle(0);
			this.homeActive = true;
			this.personalActive = false;
			this.usersActive = false;
			// console.log(this.tabbarColors);

			return this.$router.push({
				path: "/home",
				query: { id: this.userid },
			});
		},
		toPersonal() {
			// console.log(Event.target);
			// this.changeTabbersStyle(1);
			this.homeActive = false;
			this.personalActive = true;
			this.usersActive = false;
			// console.log(this.tabbarColors);
			return this.$router.push({
				path: "/personal",
				query: { id: this.userid },
			});
		},
		toUsers() {
			this.homeActive = false;
			this.personalActive = false;
			this.usersActive = true;
			// this.changeTabbersStyle(2);
			// console.log(this.tabbarColors);
			return this.$router.push({
				path: "/users",
				query: { id: this.userid },
			});
		},
		toChangeTabberUserid() {
			// console.log(changeID);
			// console.log(5);
			// console.log(this.$route.query.id);
			// console.log(this.userid);
			this.userid = this.$route.query.id;
			// console.log(this.userid);
		},
		// changeTabbersStyle(index) {
		// console.log(index);
		// console.log(this.tabbarColors[index]);
		// this.isActive.fill("");
		// this.isActive[index] = "active";
		// console.log(this.isActive);
		// this.tabbarColors = ["#222", "#222", "#222"];
		// this.tabbarColors[index] = "red";
		// },
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
	font-size: 0.9rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.tabbar > div:hover {
	background-color: rgba(230, 230, 250, 0.4);
}

.tabbar > .active {
	background-color: rgba(230, 230, 250, 0.7);
}

.tabbar > .active:hover {
	background-color: rgba(230, 230, 250, 0.7);
}

.tabbar > .active > span {
	color: tomato;
}
</style>