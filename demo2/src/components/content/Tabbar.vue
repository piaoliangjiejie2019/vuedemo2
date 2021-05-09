<template>
	<div class="tabbar">
		<div class="home"><span>首页</span></div>
		<div class="personal"><span>个人</span></div>
		<div class="users"><span>用户</span></div>
	</div>
</template>

<script>
export default {
	name: "Tabbar",
	data() {
		return {};
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