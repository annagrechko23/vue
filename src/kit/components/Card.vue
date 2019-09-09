<template>
	
			<div class="list-element" >
				<div class="media-content">
					<figure class="image">
						 <slot name="img"></slot>
					</figure>
					
				</div>
				<div class="content">
						<p>
							<strong>{{title}}</strong>
						</p>
						<span>{{list.handle}}</span>
					</div>
					<div class="controls">
						
						<ul class="card-controls">
							<li v-ripple="'red'"> <slot name="favorites"></slot></li>
							<li v-ripple="'red'"><slot name="playlist"></slot></li>
						</ul>
					</div>
	</div>
</template>

<script>
export default {
	name: "kit-card",
	props: {
		list: { type: Array, default: () => [] },
		title: { type: String, default:'' },
		description: { type: String, default: '' },
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
	.card-controls{
		list-style-type: none;
    display: flex;
    align-items: center;
    align-content: center;
		justify-content: center;
		li{
			margin-right: 20px;
			cursor: pointer;
				padding: 10px;
			position: relative;
					border-radius: 50%;
			transition: all 0.2s ease;
			overflow: hidden;
			&:hover{
				border-radius: 50%;
			padding: 10pxpx;
				background: #ccc;
			}
		.material-design-icon__svg{
				fill: #fefefe;
			}	
		}
	}
}
</style>
