<template>
	<div class="Personal">
		<p class="title">PERSONAL</p>
		<div class="button">
			<button v-if="isedit" class="edit" @click="edit()">edit</button>
			<button v-if="issubmit" class="edit" @click="submit()">submit</button>
		</div>

		<div class="information">
			<div class="facebig">
				<img :src="$store.getters.getFace(this.$route.query.id)" alt="" />
				<b class="line"></b>
			</div>
			<div class="letters" @click="getUserid()">
				<ul>
					<li>
						<span>username:</span>
						<span class="nameValue">
							{{ $store.getters.getName(this.$route.query.id) }}
							<!-- <input
								type="text"
								:value="$store.getters.getName(this.$route.query.id)"
							/> -->
						</span>
					</li>
					<li>
						<span>sex:</span>
						<span class="sexValue">{{
							$store.getters.getSex(this.$route.query.id)
						}}</span>
					</li>
					<li>
						<span>birth:</span>
						<span class="birthValue">
							{{ $store.getters.getBirth(this.$route.query.id) }}
						</span>
					</li>
					<li>
						<span>signature:</span>
						<span
							class="signatureValue"
							:title="$store.getters.getSignature(this.$route.query.id)"
						>
							{{ $store.getters.getSignature(this.$route.query.id) }}
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { getChangeValues, toEdit, toSubmit } from "./edit";

export default {
	name: "Personal",
	data() {
		return {
			isedit: true,
			issubmit: false,
			// userid: this.$route.query.id,
			// username: this.$store.getters.getName(this.$store.state.userid),
			// sex: this.$store.getters.getSex(this.$store.state.userid),
			// birth: this.$store.getters.getBirth(this.$store.state.userid),
			// signature: this.$store.getters.getSignature(this.$store.state.userid),
		};
	},
	methods: {
		edit() {
			this.isedit = false;
			this.issubmit = true;
			const params = ["nameValue", "sexValue", "birthValue", "signatureValue"];
			toEdit("edit", params);
		},
		submit() {
			this.isedit = true;
			this.issubmit = false;
			const params = ["nameValue", "sexValue", "birthValue", "signatureValue"];
			const values = getChangeValues(params);
			console.log(values);
			this.$store.state.userID = this.$route.query.id;
			this.$store.commit("changeStu", values);
		},
		getUserid() {
			this.$store.getters.getUserid(this.$route.query.id);
		},
		show() {
			// console.log(this.$route.query.id);
			// console.log(this.$store.getters);
			// console.log(this.userid);
			// console.log(this.$store.state.userid);
			// console.log(this.username);
			// console.log(this.$store.getters.getName(this.$route.query.id));
			// console.log(this.sex);
			// console.log(this.$store.getters.getSex(this.$route.query.id));
			// console.log(this.birth);
			// console.log(this.signature);
		},
	},
};
</script>

<style>
/* @import url("../../assets/css/base.css"); */

.button {
	width: 100%;
	height: 3em;
	position: relative;
}

.edit {
	background-color: rgb(230, 230, 250);
	width: 4em;
	height: 1.8em;
	line-height: 2em;
	/* padding: 0.5% 1em; */
	font-size: 1.2em;
	border-radius: 12px;
	/* border: 1px solid #555; */
	position: absolute;
	right: 0;
	transform: translateX(-60%);
}

.edit:hover {
	background-color: rgba(230, 230, 250, 0.68);
}

.information {
	display: flex;
	padding: 5% 10%;
	/* box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.68); */
	/* background-color: #fff; */
	border: rgb(156, 156, 255) dashed 1px;
}

.information > div {
	flex: 1;
	/* border: 1px solid saddlebrown; */
	/* border-right: 2px solid #ccc; */
	text-align: center;
	/* background-color: #fff; */
}
.line {
	display: inline-block;
	border-right: 2px solid rgb(161, 115, 207);
	position: relative;
	/* padding-right: 2%; */
	left: 1.6em;
	height: 90%;
	border-radius: 2em/100em;
}
/* .information > div:nth-of-type(1) {
	
} */
.information > div:nth-of-type(2) {
	flex: 2;
	/* border-right: none; */
}
.facebig img {
	width: 90%;
	max-width: 12em;
	/* height: 10%; */
	border-radius: 100em;
}

.letters {
	/* padding: 5% 0; */
	flex: 2;
}

.letters ul {
	/* border: 1px solid salmon; */
}
.letters ul > li {
	display: flex;
}
.letters ul > li > span {
	padding: 1% 2%;
	flex: 1;
	/* border: 1px solid skyblue; */
	text-align: right;
	font-size: 1.2em;
	color: #111;
}
.letters ul > li > span:nth-of-type(2) {
	flex: 2;
	text-align: left;
	height: 2.1em;
	line-height: 2.1em;
	font-size: 0.9em;
	font-family: "KaTi_GB2312";
	color: #333;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.letters ul > li > span:nth-of-type(2) input {
	height: 2.4em;
	font-size: 0.8em;
	padding: 0 10px;
	line-height: 2.4em;
	color: #777;
	border: #111 1px solid;
	border-radius: 8px;
}
/* .title {
	height: 3rem;
	font-weight: 400;
	line-height: 3rem;
	font-size: 1.2rem;
	text-align: center;
} */
</style>