<template>
	<div class>
		<h1>Custom Select</h1>
		<div class="list-wrap">
			<div class="list-element" v-for="item in list" :key="item.id">
				<figure class="image">
					<img :src="item.img" alt="Image" />
				</figure>
				<div class="media-content">
					<div class="content">
						<p>
							<strong>{{item.name}}</strong>
							<span>{{item.handle}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "kit-slider",
	props: {
		list: Array
	}
};
</script>
<style lang="scss" scoped>
.list-wrap {
	display: grid;
	grid-template-columns: repeat(5, 19%);
	grid-gap: 10px;
	transition: all 0.5s ease;
	.list-element {
		overflow: hidden;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		padding: 16px;
	}
	.image img {
		width: 100%;
	}
	p {
		display: grid;
		grid-gap: 1vw;
	}
}
</style>>
