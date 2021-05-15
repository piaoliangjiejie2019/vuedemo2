<template>
	<div class="header">
		<div class="demoLogo">
			<img src="../../assets/img/pianfu.png" alt="" title="beauty-lsy'demo" />
		</div>

		<div class="publish">
			<button @click="toPublish()"><span>publish</span></button>
			<Publish ref="publish" />
		</div>
		<div class="userface">
			<!-- <img src="../../assets/img/users/stu1.jpg" alt="" :title="username" /> -->
			<img :src="userfacesrc" alt="" :title="username" @click="toPersonal()" />
		</div>
	</div>
</template>

<script>
import Publish from "./Publish.vue";

export default {
	name: "Header",
	// props: ["triggerChildMethod"],
	props: ["tabbar"],
	components: {
		Publish,
	},
	data() {
		return {
			// userid: this.$route.query.id,
			// userface: this.$store.state.stu[userid].face,
			// user: this.$store.state.stu[this.$route.query.id - 1],
			username: this.$store.getters.getName(this.$route.query.id),
			userfacesrc: this.$store.getters.getFace(this.$route.query.id),
			isPublish: false,
		};
	},
	methods: {
		toPersonal() {
			// this.$parent.faceClick;
			// console.log(this.$parent.faceClick);
			this.$emit("faceClick");
			// console.log(1);
			// console.log(this.triggerChildMethod());
			// this.triggerChildMethod();
		},
		headerchangeID() {
			this.username = this.$store.getters.getName(this.$route.query.id);
			this.userfacesrc = this.$store.getters.getFace(this.$route.query.id);
		},
		toPublish() {
			// console.log(1);
			this.$refs.publish.toPublish();
		},
	},
	computed: {
		userface() {
			// console.log(this.$route.query.id);
			// console.log(this.userid);

			// console.log(this.$route);
			// console.log(this.$store.state.stu);
			// return this.$route.query.id;
			// const stu1 = this.$store.state.stu

			// console.log(stu1);
			// console.log(
			// 	this.$store.state.stu.filter((s) => {
			// 		s.id === this.userid;
			// 	})
			// );
			const face = this.$store.state.stu[this.$route.query.id - 1].face;
			// console.log(this.$store.state.stu[this.$route.query.id - 1].face);
			console.log(face);
			return face;
			// return stu;
		},
	},
};
</script>

<style>
@import "../../assets/css/base.css";

.header {
	display: flex;
	position: relative;
	top: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 10%;
	background: #fff;

	box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.08);

	/* box-shadow: ; */
}

.header > div {
	flex: 1;
	text-align: center;
}

.header > div:nth-of-type(2) {
	flex: 2;
	/* border: 1px solid saddlebrown; */
}

.demoLogo {
	/* border: 1px solid rebeccapurple; */
	/* width:; */
}
.demoLogo img {
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	/* border: 1px solid rgb(230, 230, 250); */
	/* border-radius: 4rem; */
	height: 3.5rem;
}

.header .publish button {
	/* display: block; */
	position: relative;
	top: 50%;
	transform: translate(0, -50%);
	background-color: rgb(230, 230, 250);
	width: 12rem;
	height: 2.4rem;
	border-radius: 3rem;
	box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
}

.header .publish .publishBox {
	position: absolute;
	/* width: 23em;
	height: 10em; */
	z-index: 999;
	/* opacity: 0.8; */
	/* border: 1px saddlebrown solid; */
	/* background-color: rgb(230, 230, 250); */

	/* background-color: rgba(0, 0, 0, 0.8); */
}

.header .publish button:hover {
	background-color: rgba(230, 230, 250, 0.68);
}

.header .publish button span {
	letter-spacing: 0.1rem;
	color: #444;
	/* background-color: ; */
}

.header .userface {
	/* border: #444 1px solid; */
}

.header .userface img {
	height: 3rem;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 3rem;
	cursor: pointer;
}
</style>