<template>
	<div class="sentencePlayground s">
		<b class="line"></b>
		<h2><span>sentence Playground</span></h2>
		<div class="centences">
			<ul>
				<li
					class="CenItem"
					v-for="(item, index) in $store.state.centences"
					:title="item"
					:key="index"
				>
					{{ index }} . {{ item }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Centences",
};
</script>

<style>
.line {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	display: block;
	border-top: 2px solid rgb(130, 67, 192);
	border-radius: 1000em/1em;
	width: 95%;
}
.s h2 {
	margin: 1em 0;
	font-size: 1.5em;
	letter-spacing: 1px;
	word-spacing: 6px;
	text-align: center;
}
.s h2 span {
	border: 1px solid rgb(192, 192, 252);
	color: rebeccapurple;
	/* background-color: rgb(236, 236, 250); */
	padding: 10px 20px;
	border-radius: 16px;
	box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
	/* color: #555; */
}
.s .centences ul {
	width: 92%;
	display: flex;
	flex-wrap: wrap;
	/* margin: 0 6%; */
	margin: 0 auto;
	border: 2px dashed rgb(188, 143, 233);
	box-sizing: border-box;
	padding: 1% 1%;
	border-radius: 16px;
}
.s .centences .CenItem {
	text-align: center;
	box-shadow: 0 0 5px 1px rgba(192, 192, 252, 0.68);
	/* border: 1px solid rgb(130, 67, 192); */
	color: #444;
	/* padding: 5px; */
	height: 1.7em;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	/* line-height: 3em; */
	font-size: 13px;
	/* width: 25em; */
	max-width: 50%;
	padding: 10px 20px 6px;
	margin: 8px;
	text-align: left;
	border-radius: 14px;
}
</style>