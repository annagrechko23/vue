<template>
	<div ref="list">
		<div class="list-wrap" v-hammer:swipe="onPan" :style="{ width: widthWrapper }">
			<div class="list-element" v-for="item in list" :key="item.id">
				<figure class="image">
					<img :src="item.image" alt="Image" />
				</figure>
				<div class="media-content">
					<div class="content">
						<p>
							<strong>{{item.name}}</strong>
							<span>{{item.handle}}</span>
						</p>
					</div>
					<div class="controls">
				<ul class="card-controls">
					<li
						class="button"
						:class="{active: selected.includes(item.id)}"
						@click="favorites(item)"
						v-ripple
					>
						<slot name="favorites"></slot>
					</li>
					<li
						class="button"
						@click="playlist(item)"
						:class="{activePlaylist: selectedPlaylist.includes(item.id)}"
						v-ripple
					>
						<slot name="playlist"></slot>
					</li>
					<li class="trash" @click="remove(item, index)">
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
import { mapActions, mapGetters } from "vuex";
export default {
	name: "kit-slider-mobile",
	props: {
		list: Array
	},
	data() {
		return {
			activeSlide: 0,
						active: false,
			selected: [],
			selectedPlaylist: [],
			activePlaylist: false
		};
	},
	computed: {
				...mapGetters(["getFavourites", "getPlaylist"]),
		count() {
			return this.list.length;
		}
	},
	mounted() {
		this.widthWrapper();
	},
	methods: {
		...mapActions(["setFavourites", "setPlaylist"]),

		favorites(selected) {
			this.selected;
			this.setFavourites({
				selected
			});
			return this.selected.includes(selected.id)
				? this.selected.splice(this.selected.indexOf(selected.id), 1)
				: this.selected.push(selected.id);
		},
		playlist(selected) {
			this.setPlaylist({
				selected
			});
			return this.selectedPlaylist.includes(selected.id)
				? this.selectedPlaylist.splice(this.selectedPlaylist.indexOf(selected.id), 1)
				: this.selectedPlaylist.push(selected.id);
		},
		remove(item, index) {
			if (this.list[index] === item) {
				this.list.splice(index, 1);
			} else {
				let found = this.list.indexOf(item);
				this.list.splice(found, 1);
			}
		},
		onPan(e) {
			const percentage = ((100 / this.count) * e.deltaX) / window.innerWidth;
			const transform = percentage - (100 / this.count) * this.activeSlide;
			this.$refs.list.style.transform = `translateX(${transform}%)`;
			if (e.isFinal) {
				if (percentage < 0) {
					this.goToSlide(this.activeSlide + 1);
				} else if (percentage > 0) {
					this.goToSlide(this.activeSlide - 1);
				} else {
					this.goToSlide(this.activeSlide);
				}
			}
		},
		widthWrapper() {
			this.$refs.list.style.width = `${this.count * 100}%`;
		},
		goToSlide(number) {
			if (number < 0) {
				this.activeSlide = 0;
			} else if (number > this.count - 1) {
				this.activeSlide = this.count - 1;
			} else {
				this.activeSlide = number;
			}
			const percentage = -(100 / this.count) * this.activeSlide; //
			this.$refs.list.style.transform = `translateX(${percentage}%)`;
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
