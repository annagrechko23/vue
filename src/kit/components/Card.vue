<template>
		<div class="list-element" >
		
			<div class="media-content">
				<figure class="image" v-model="list.image" >
					<img :src="list.image" />
				</figure>
			</div>
			<div class="content">
				<p class="title">
					<span>{{list.author}}</span>
				</p>
				<span>{{list.description}}</span>
			</div>
			<div class="controls">
				<ul class="card-controls">
					<li
						class="button"
						:class="{active: list.favourite}"
						@click="favorites(list.favourite)"
						v-ripple
					>
						<slot name="favorites"></slot>
					</li>
					<li
						class="button"
						@click="playlist(list)"
						:class="{activePlaylist: selectedPlaylist.includes(list.id)}"
						v-ripple
					>
						<slot name="playlist"></slot>
					</li>
					<li class="trash" @click="remove(list, index)">
						<slot name="remove"></slot>
					</li>
				</ul>
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
		list: { type: Object, default: () => [] }
	},

	methods: {
		...mapActions(["getFavourites", "setPlaylist"]),

		favorites(selected) {
			this.getFavourites({
						author: this.list.author,
						description: this.list.description,
						favourite: selected = !selected,
						id: this.list.id,
						image: this.list.image,
						name: this.list.name,
		})

		},

	}
};
</script>
<style lang="scss" scoped>
.list-wrap {


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
