<template>
	<div class="wrap">
		<h1>Custom Select</h1>
		<nav :class="{'nav-is-visible' : displayCategory}">
			<span class="show-cat" @click="display" v-if="selectedItem && !displayCategory">{{selectedItem}}</span>
			<span class="show-cat" @click="display" v-else>Choose</span>
			<ul>
				<li v-for="(option, index) in options" :key="index" @click="selectedOption(option)">
					<p @click="change">{{option.name}}</p>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>

export default {
	name: "kit-select",
	props: ["options", "value"],
	data() {
		return {
			selectedItem: null,
			displayCategory: false,
			selected: null,
			mutableFlightSegment: JSON.parse(JSON.stringify(this.value))
		};
	},
	watch: {
		value() {
			this.mutableFlightSegment = JSON.parse(JSON.stringify(this.value));
		}
	},
	methods: {
		selectedOption(option) {
			this.selectedItem = option.name;
		
			if (this.mutableFlightSegment.country) {
				this.selectedItem = this.mutableFlightSegment.country.name;
					this.displayCategory = !this.displayCategory;
				return option.code === this.mutableFlightSegment.country.code;
			}
			return false;
		},
		display() {
			this.displayCategory = !this.displayCategory;
		},
		change(e) {
			this.selectedItem = e.name;
			this.displayCategory = !this.displayCategory;
			const selectedCode = e.target.value;
			const option = this.options.find(option => {
				return selectedCode === option.code;
			});
			this.mutableFlightSegment.country = option;
			this.$emit("input", this.mutableFlightSegment);
		}
	}
};
</script>

<style scoped>
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

/* Create the bordera and the surrounding */
nav ul {
	padding: 0 10px;
	text-align: left;
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

/* Hide the li elements */
nav p {
	display: none;
	font-size: 1.5rem;
	font-size: 15px;
	text-decoration: none;
	text-transform: uppercase;
	color: #4a5564;
}

#category-btn {
	display: none;
}

.category-input {
	display: none;
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

/* Make button visible again when nav-is-visible class is toggled */
nav.nav-is-visible #category-btn {
	display: block;
}
</style>