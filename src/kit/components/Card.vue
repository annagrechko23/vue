<template>
	<div class="list-wrap">
		<div class="list-element" v-for="item in list" :key="item.id">
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
					<li class="trash" @click="remove(item.id)">
						<slot name="remove"></slot>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
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
	methods: {
		favorites(selected) {
			return this.selected.includes(selected.id)
				? this.selected.splice(this.selected.indexOf(selected.id), 1)
				: this.selected.push(selected.id);
		},
		playlist(selected) {
			return this.selectedPlaylist.includes(selected.id)
				? this.selectedPlaylist.splice(
						this.selectedPlaylist.indexOf(selected.id), 1)
				: this.selectedPlaylist.push(selected.id);
		},
		remove(index) {
			this.$delete(this.list, index);
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
		}
	}

	p {
		display: grid;
		font-size: 24px;
		margin-bottom: 0;
		grid-gap: 1vw;
	}
	.card-controls {
		list-style-type: none;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		.button {
			margin-right: 20px;
			cursor: pointer;
			border-radius: 50%;
			line-height: 14px;
			position: relative;
			transition: all 0.2s ease;
			overflow: hidden;
			height: 40px;
			width: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			&:hover {
				border-radius: 50%;
				background: #ccc;
				line-height: 14px;
			}
			.material-design-icon__svg {
				fill: #fefefe;
			}
		}
	}
}
.trash {
	.icon-wrap {
		color: #ccc;
		cursor: pointer;
	}
}
.button {
	.icon-wrap {
		color: #ccc;
	}
	&:hover {
		.icon-wrap {
			color: #fff;
		}
	}
	&.active {
		.icon-wrap {
			color: red;
		}
	}
	&.activePlaylist {
		.icon-wrap {
			color: #000;
		}
	}
}
</style>
