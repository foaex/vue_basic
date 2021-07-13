<template>
	<div class="container">
		<h2>{{title}}分类</h2>
		<!-- 插槽 -->
		<!-- <slot></slot> -->

		<!-- 命名插槽 -->
		<slot name="game"></slot>
		<slot name="food"></slot>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props:['title'],
}
</script>

<style scoped >
	.container{
		width: 240px;
		height: 300px;
		background-color: #ddd;
	}
	h2{
		text-align: center;
	}
</style>
