<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<!-- <HelloWorld/> -->
		<Header @faceClick="faceClick()" ref="header" />
		<router-view @toChangeTabberUserid="toChangeTabberUserid()" />
		<Tabbar ref="tabbar" />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Tabbar from "./components/content/Tabbar";
import Header from "./components/content/Header";
export default {
	name: "App",
	components: {
		Tabbar,
		Header,
		// HelloWorld
	},
	methods: {
		faceClick() {
			// console.log(this.$refs.tabbar);
			this.$refs.tabbar.toPersonal();
			// top();
			// console.log(this.$refs.tabbar.toPersonal);
			// return this.$refs.tabbar.toPersonal;
			// this.$refs.tabbar.toPersonal;
			// return
		},
		toChangeTabberUserid() {
			this.$refs.tabbar.toChangeTabberUserid();
			this.$refs.header.headerchangeID();
		},
	},
};
</script>

<style>
#app {
	overflow: hidden;
	min-width: 600px;
	width: 100%;
	position: relative;
	box-sizing: border-box;
	height: 650px;
	border: 1px solid black;
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
