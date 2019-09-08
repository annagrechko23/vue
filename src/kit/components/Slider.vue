<template>
	<div class>
		<h1>Custom Slider</h1>
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
export default { // I don't think we need a component for this, it is not a slider, we can create component Card.vue (https://vuetifyjs.com/en/components/cards)
	name: "kit-slider",
	props: {
		list: { type: Array, default: () => [] }
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
