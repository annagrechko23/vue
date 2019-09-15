<template>
	<div class="list-wrap">
		<div class="list-element" v-for="(item, index) in list" :key="index">
			<div class="media-content">
				<figure class="image">
					<img :src="item.img" />
				</figure>
			</div>
			<div class="content">
				<p class="title">
					<span>{{item.name}}</span>
				</p>
				<span>{{item.handle}}</span>
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "kit-card",
	data() {
		return {
			active: false,
			selected: [],
			selectedPlaylist: [],
			activePlaylist: false
		};
	},
	props: {
		list: { type: Array, default: () => [] }
	},
	computed: {
		...mapGetters(["getFavourites", "getPlaylist"])
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
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		padding: 16px;
	}
	.image {
		margin: 0;
		img {
			width: 100%;
			min-height: 200px;
			object-fit: cover;
			max-height: 200px;
		}
	}

	p {
		display: grid;
		font-size: 24px;
		margin-bottom: 0;
		grid-gap: 1vw;
	}
}


</style>
