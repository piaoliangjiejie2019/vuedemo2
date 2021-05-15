<template>
	<div class="publishBox" :class="{ show: isPublish }">
		<textarea
			name="publishContent"
			id=""
			cols="20"
			rows="3"
			placeholder="分享你的文案吧！"
			ref="textA"
		></textarea>
		<div class="button" @click="toSubmit()"><button>submit</button></div>
	</div>
</template>

<script>
export default {
	name: "Publish",
	data() {
		return {
			isPublish: false,
		};
	},
	methods: {
		toPublish() {
			this.isPublish = true;
		},
		toSubmit() {
			// debugger;
			// console.log(this.$refs);
			// const value = document.querySelector(".publishContent");
			const value = this.$refs.textA.value;
			if (value != "") {
				this.$store.commit("addCentences", value);
				this.$refs.textA.value = "";
			}
			this.isPublish = false;
		},
	},
};
</script>


<style>
.publishBox {
	padding: 20px;
	top: -20em;
	left: 50%;
	transform: translate(-50%, 0);
	box-sizing: border-box;
	width: 23em;
	background-color: #fbfbfb;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.28);
	height: 11em;
	opacity: 0.9;
	border-radius: 22px;
	transition: all 0.5s;
}
div.show {
	top: 20px;
}
.publishBox textarea {
	background-color: #fff;
	border: 1px #333 solid;
	border-radius: 16px;
	box-sizing: border-box;
	padding: 10px 10px;
	font-size: 13px;
	line-height: 1.2em;
}
.publishBox .button {
	margin-top: 5px;
	background-color: transparent;
}
.publishBox .button button {
	/* background-color: #fff; */
	width: 5em;
	color: #000;
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.08);
}
</style>