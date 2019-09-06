<template>
	<div class>
		<h1>Custom Select</h1>
		<div class="list-wrap" v-hammer:swipe="onPan" ref="list">
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
	name: "kit-slider-mobile",
	props: {
		list: Array
	},
	data() {
		return {
			currentNumber: 0,
			activeSlide: 0,
			timer: null
		};
	},
	computed: {
		overflowRatio() {
			return this.$refs.list.scrollWidth / this.$refs.list.offsetWidth;
		},
		itemWidth() {
			return this.$refs.list.scrollWidth / this.list.length;
		},

		count() {
			return this.list.length;
		}
	},
	methods: {
		onPan(e) {
			const percentage = ((100 / this.count) * e.deltaX) / this.itemWidth;
			const transform = -this.itemWidth;
			this.$refs.list.style.transform = "translateX( " + transform + "% )";
			if (e.isFinal) {
				if (percentage < 0) {
					this.goToSlide(this.activeSlide + 1);
				} else if (percentage > 0) this.goToSlide(this.activeSlide - 1);
				else this.goToSlide(this.activeSlide);
			}
		},

		goToSlide(number) {
			if (number < 0) {
				this.activeSlide = 0;
			} else if (number > this.count - 1) {
				this.activeSlide = this.count - 1;
			} else {
				this.activeSlide = number;
			}
			var percentage = -(12 * (this.count * this.activeSlide));
			this.$refs.list.style.transform = "translateX(" + percentage + "%)";
		}
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
	}
	.image img {
		width: 100%;
	}
	p {
		display: grid;
		grid-gap: 1vw;
	}
	@media only screen and (max-width: 767px) {
		display: flex;
		width: 100%;
		height: 100%;
		font-size: 2rem;
		backface-visibility: hidden;
		.list-element {
			flex: 0 0 80%;
			margin: 0 20px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			padding: 16px;
			text-align: center;
			background-color: #f1f1f1;
			z-index: 999;
			img {
				z-index: 0;
			}
		}
	}
}
</style>
