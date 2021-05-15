<template>
	<div class="users">
		<p class="title">OTHER USERS</p>

		<ul>
			<li
				class="userItem"
				:key="index"
				v-for="(item, index) in this.$store.state.stu"
			>
				<img class="face" :src="item.face" alt="" />
				<p class="message">
					<span>id:{{ item.id }}</span>
					<span :title="item.name">
						name:
						<b>{{ item.name }}</b>
					</span>
				</p>
				<!-- {{ index }}{{ item.name }} -->
			</li>
		</ul>
		<div class="button">
			<button v-if="isAdd" class="add" @click="toAdd()">add</button>
			<button v-if="isSubmit" class="submit" @click="toSubmit()">submit</button>
			<form class="addValues" :class="{ show: isSubmit }" action="">
				<input
					ref="inputName"
					class="inputName"
					type="text"
					placeholder="input newname"
				/>
				<input
					ref="inputSex"
					class="inputSex"
					type="text"
					placeholder="input sex choose ♂ / ♀"
				/>
				<input
					ref="inputBirth"
					class="inputBirth"
					type="text"
					placeholder="input newbirth"
				/>
				<input
					ref="inputSignature"
					class="inputSignature"
					type="text"
					placeholder="input newsignature"
				/>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "Users",
	data() {
		return {
			isAdd: true,
			isSubmit: false,
		};
	},
	methods: {
		toAdd() {
			this.isAdd = false;
			this.isSubmit = true;
		},
		toSubmit() {
			this.isAdd = true;
			this.isSubmit = false;
			const params = {
				name: this.$refs.inputName.value,
				sex: this.$refs.inputSex.value,
				birth: this.$refs.inputBirth.value,
				signature: this.$refs.inputSignature.value,
			};
			this.$store.commit("addStu", params);
			// console.log(params);
		},
	},
};
</script>

<style>
.users ul {
	width: 100%;
	height: 80%;
	flex-wrap: wrap;
	display: flex;
	overflow: hidden;
}
.users ul > .userItem {
	position: relative;
	width: 25%;
	/* padding-top: 4%; */
	border-radius: 2em;
	text-align: center;
}
.userItem .face {
	width: 70%;
	min-width: 6em;
	max-width: 10em;
	border-radius: 1em;
	position: relative;
	top: 50%;
	transform: translate(0, -50%);
	box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.28);
}
.userItem .message {
	/* text-align: center; */
	position: relative;
	/* top: 100%; */
	bottom: 0;
	left: 50%;
	transform: translate(-50%, -60%);
	border-radius: 0 0 1em 1em;
	width: 71%;
	min-width: 6em;
	max-width: 10em;
	height: 3em;
	line-height: 1.5em;
	/* border: 1px saddlebrown solid; */

	background-color: rgba(0, 0, 0, 0.4);
}

.message span {
	display: block;
	color: rgb(212, 212, 248);
	/* width: 8; */
	padding: 0 10%;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.message span b {
	font-size: 13px;
	color: rgb(212, 212, 248);
	font-weight: 400;
}

.add,
.submit {
	top: 50%;
	right: 6%;
	transform: translateY(-50%);
}
.users .button form {
	position: absolute;
	top: 100%;
	right: -50%;
	width: 13.5em;
	border-radius: 10px;
	transition: all 0.5s;

	/* border: 1px saddlebrown solid; */
	background-color: rgba(212, 212, 248, 0.5);
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.28);
}
.users .button form.show {
	right: 6%;
}
.users .button .addValues input {
	display: block;
	position: relative;
	right: 0;
	margin: 0.5em;
	/* border-radius: 16px; */
	color: #444;
	font-size: 15px;
	width: 12em;
	/* line-height: 1.5em; */
	padding: 4px 10px 0 10px;
}
</style>