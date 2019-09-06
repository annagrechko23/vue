<template>
	<div class="wrap">
		<h1>Custom Select</h1>
		<nav :class="{'nav-is-visible': displayCategory}">
			<span class="show-cat" @click="display">{{value ? value.name : 'Select'}}</span>
			<ul v-if="displayCategory">
				<li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
					<p>
						<input type="checkbox" :value="option.name" />
						{{option.name}}
					</p>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: "kit-select",
	data() {
		return {
			displayCategory: false
		};
	},
	props: ["options", "value"],
	methods: {
		display() {
			this.displayCategory = !this.displayCategory;
		},
		selectOption(option) {
			this.displayCategory = !this.displayCategory;
			this.$emit("input", option);
		}
	},
	created: function() {
		let self = this;
		window.addEventListener("click", function(e) {
			// close dropdown when clicked outside
			if (!self.$el.contains(e.target)) {
				self.displayCategory = false;
			}
		});
	}
};
</script>

<style scoped>
input[type="checkbox"] {
	display: none;
}
.form-control {
	transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
	padding: 15px 10px;
	border: none;
	border-radius: 8px;
	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	background: #fff;
	outline: none;
}
.show-cat {
	position: relative;
	width: 250px;
	height: 50px;
	top: 0;
	font-size: 20px;
	left: 0;
	border: 1px solid #33383b;
	background: #fafafa;
	border-radius: 3px;
	color: #000;
	z-index: 20;
	padding: 0 10px;
	text-align: left;
	display: block;
}

nav {
	width: 250px;
	left: 0;
	z-index: 3;
	height: 45px;
	line-height: 45px;
	vertical-align: middle;
	display: inline-block;
	font-size: 0.1px;
	font-weight: 300;
	font-style: normal;
	cursor: pointer;
	padding: 0;
	cursor: pointer;
	transition: opacity 0.25s ease-in-out;
	position: relative;
	margin-bottom: 60px;
}

nav ul {
	padding: 0 10px;
	text-align: left;
	background-color: #fff;
}

nav ul li {
	display: block;
	position: relative;
}

nav .show-cat:after {
	position: absolute;
	top: 0;
	right: 0;
	font-size: 12px;
	font-size: 1.2rem;
	content: "\25bc";
	color: #000;
	padding-right: 10px;
}

nav p {
	display: none;
	font-size: 1.5rem;
	font-size: 15px;
	text-decoration: none;
	text-transform: uppercase;
	color: #4a5564;
}

nav.nav-is-visible .show-cat:after {
	content: "\25B2";
}
nav.nav-is-visible ul {
	content: "\25B2";
}
nav.nav-is-visible ul li p {
	display: block;
	border-bottom: 2px solid #f1f1f1;
}
nav.nav-is-visible ul li p:hover {
	border-bottom: 2px solid #4a5564;
}
nav.nav-is-visible ul li:last-child {
	margin-bottom: 10px;
}
</style>