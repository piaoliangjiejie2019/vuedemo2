<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<!-- <HelloWorld/> -->
		<router-view />
		<Tabbar />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Tabbar from "./components/content/Tabbar";

export default {
	name: "App",
	components: {
		Tabbar,
		// HelloWorld
	},
};
</script>

<style>
#app {
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
