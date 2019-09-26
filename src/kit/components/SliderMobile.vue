<template>
	<div class="slide-wrap" ref="list" :style="{ width: widthWrapper }">
		<div class="list-wrap" v-swipe="onPan">
			<div class="list-element" v-for="item in list" :key="item.id">
				<figure class="image">
					<img :src="item.image" alt="Image" />
				</figure>
				<div class="media-content">
					<div class="content">
						<p>
							<strong>{{item.name}}</strong>
							<span>{{item.author}}</span>
						</p>
					</div>
					<div class="controls">
						<ul class="card-controls">
							<li class="button" :class="{active: item.favourite}" @click="favorites(item)" v-ripple>
								<slot name="favorites"></slot>
							</li>
							<li class="button" v-ripple>
								<slot name="playlist"></slot>
							</li>
							<li class="trash">
								<slot name="remove"></slot>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "kit-slider-mobile",
	props: {
		list: { type: Array, default: () => [] }
	},
	data() {
		return {
			activeSlide: 0,
			sensitivity: 25
		};
	},
	computed: {
		count() {
			return this.list.length;
		},
		widthWrapper() {
			return `${this.count * 100}%`;
		}
	},

	methods: {
		...mapActions(["getFavourites"]),
		favorites(selected) {
			const favourite = (selected.favourite = !selected.favourite);
			this.getFavourites({
				favourite: favourite
			});
		},
		onPan(e) {
			const percentage = ((100 / this.count) * e.deltaX) / window.innerWidth;
			const transform = percentage - (100 / this.count) * this.activeSlide;
			this.$refs.list.style.transform = `translateX(${transform}%)`;
			this.$refs.list.style.transition = `transform(500ms cubic-bezier(0.5, 0, 0.5, 1) 0s)`;
			if (e.isFinal) {
				if (e.velocityX > 1) {
					this.goToSlide(this.activeSlide - 1);
				} else if (e.velocityX < -1) {
					this.goToSlide(this.activeSlide + 1);
				} else {
					if (percentage <= -(this.sensitivity / this.count))
						this.goToSlide(this.activeSlide + 1);
					else if (percentage >= this.sensitivity / this.count)
						this.goToSlide(this.activeSlide - 1);
					else this.goToSlide(this.activeSlide);
				}
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
			const percentage = -(100 / this.count) * this.activeSlide;
			this.$refs.list.style.transition = `transform(500ms cubic-bezier(0.5, 0, 0.5, 1) 0s)`;
			this.$refs.list.style.transform = `translateX(${percentage}%)`;
		}
	}
};
</script>

<style lang="scss" scoped>
.slide-wrap {
	transition: transform 400ms cubic-bezier(0.2, 0, 0.2, 1) 0s;
}
.list-wrap {
	display: grid;
	grid-template-columns: repeat(5, 19%);
	grid-gap: 10px;
	transition: all 0.7s ease;
	.list-element {
		overflow: hidden;
	}
	.image {
		overflow: hidden;
		img {
			width: 100%;
			min-height: 200px;
			object-fit: cover;
			max-width: 260px;
			width: 260px;
		}
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
