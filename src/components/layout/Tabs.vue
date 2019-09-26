<template>
	<div>
		<div class="tabs">
			<ul>
				<li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }">
					<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
				</li>
			</ul>
		</div>

		<div class="tabs-details">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "tabs",
	data() {
		return { tabs: [] };
	},

	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = tab.name == selectedTab.name;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.tabs {
	ul {
		align-items: center;
		border-bottom: 1px solid #dbdbdb;
		display: flex;
		flex-grow: 1;
		flex-shrink: 0;
		padding: 0;
		justify-content: flex-start;
		margin-top: 50px;
	}
	a {
		align-items: center;
		border-bottom: 1px solid #dbdbdb;
		color: #4a4a4a;
		display: flex;
		justify-content: center;
		margin-bottom: -1px;
		padding: 0.5em 1em;
		vertical-align: top;
		font-size: 18px;
		text-decoration: none;
		transition: none 86ms ease-out;
	}
	li {
		list-style-type: none;
		&.is-active a {
			color: #827ffe;
			font-weight: bold;
			border-bottom: 1px solid #827ffe;
		}
	}
}
</style>