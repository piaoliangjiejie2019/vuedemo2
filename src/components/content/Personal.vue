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
						<span>userID:</span>
						<span class="userID">{{ this.$route.query.id }}</span>
					</li>
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

		<div class="button switch">
			<button v-if="isswitch" title="切换用户" @click="toSwitch()">
				switch
			</button>
			<button v-if="isconfirm" @click="toConfirm()" title="确定">
				confirm
			</button>
			<input
				:class="{ show: isconfirm }"
				class="putinID"
				type="text"
				placeholder="请输入用户id"
			/>
		</div>
	</div>
</template>

<script>
import { getChangeValues, toConfirmID, toEdit, toSubmit } from "./edit";

export default {
	name: "Personal",
	props: ["tabbar", "header"],
	data() {
		return {
			isedit: true,
			issubmit: false,
			isswitch: true,
			isconfirm: false,
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
			// console.log(values);
			values.push(this.$route.query.id);
			// console.log(values);
			// this.$store.state.userID = this.$route.query.id;
			this.$store.commit("changeStu", values);
			toSubmit(params, values);
		},
		toSwitch() {
			this.isswitch = false;
			this.isconfirm = true;
			// console.log(this.$store.state.stu.length);
		},
		toConfirm() {
			const res = toConfirmID(this.$store.state.stu.length, "putinID");
			if (res) {
				// this.$route.query.id = toConfirmID(
				// 	this.$store.state.stu.length,
				// 	"putinID"
				// );
				this.isswitch = true;
				this.isconfirm = false;
				// document.querySelector(".putinID").value = "";

				this.$router.push({
					path: "/personal",
					query: { id: res },
				});
				this.toChangeTabberUserid();
				document.querySelector(".putinID").value = "";
			} else {
				alert("没有该id的用户");
			}
		},
		toChangeTabberUserid() {
			// console.log(changeID);
			this.$emit("toChangeTabberUserid");
			this.$emit("headerchangeID");
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

.information {
	display: flex;
	padding: 2% 10%;
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
.Personal b.line {
	display: inline-block;
	width: 3px;
	border-right: 2px solid rgb(161, 115, 207);
	position: relative;
	/* padding-right: 2%; */
	left: 1.6em;
	height: 90%;
	border-radius: 3em/100em;
	top: 50%;
	transform: translate(0, -50%);
	width: 2px;
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

.switch > button {
	bottom: 0;
}

.switch input {
	width: 6rem;
	position: absolute;
	right: -50%;
	bottom: -100%;
	transform: translate(-40%, 0);
	transition: all 0.5s;
}

.switch input.show {
	right: 0;
}

/* .title {
	height: 3rem;
	font-weight: 400;
	line-height: 3rem;
	font-size: 1.2rem;
	text-align: center;
} */
</style>