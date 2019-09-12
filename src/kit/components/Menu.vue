<template>
	<div class="burger">
		<!-- Nav Links -->
		<div ref="slider" class="navMenu" :style="[menuDirection, menuWidth]">
			<a href="javascript:void(0)" class="closebtn" @click="closeMenu()">&times;</a>
			<router-link
				v-for="link in links"
				:to="link.url"
				:key="link.id"
				class="burger-links"
			>{{ link.text }}</router-link>
		</div>
		<!-- Hamburger Menu -->
		<nav ref="menuIcon" class="navIcon">
			<a href="javascript:void(0)" @click="toggleMenu()" data-test-ref="navMenuLink">
				<kit-icon icon="bars" />
			</a>
		</nav>
	</div>
</template>

<script>
export default {
	name: "kit-menu",
	props: {
		width: {
			type: Number,
			required: false,
			default: 250
		},
		format: {
			type: String,
			required: false,
			default: "overlay"
		},
		direction: {
			type: String,
			required: false,
			default: "left"
		},
		links: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			menuWidth: {
				width: 0
			}
		};
	},
	created() {
		window.addEventListener("click", e => {
			if (!this.$el.contains(e.target)) {
				this.menuWidth = { width: 0 };
				if (this.app) {
					this.app.style.marginLeft = "0";
					this.app.style.marginRight = "0";
				}
			}
		});
	},
	computed: {
		menuDirection() {
			return this.direction === "right" ? { right: 0 } : { left: 0 };
		},

		app() {
			return document.getElementById("app");
		}
	},
	methods: {
		openMenu() {
			this.setFormat();
		},
		setFormat() {
			const width = this.width.toString() + "px";
			if (this.format === "overlay") {
				this.menuWidth = { width: width };
			} else if (this.format === "full") {
				this.menuWidth = { width: "100%" };
			} else {
				this.menuWidth = { width: width };
				if (this.app) {
					if (this.direction === "right") {
						this.app.style.marginRight = width;
						this.app.style.transition = "margin-right .5s";
					} else {
						this.app.style.marginLeft = width;
						this.app.style.transition = "margin-left .5s";
					}
				}
			}
		},
		closeMenu() {
			this.menuWidth = { width: 0 };
			if (this.app) {
				this.app.style.marginLeft = "0";
				this.app.style.marginRight = "0";
			}
		},
		toggleMenu() {
			if (this.menuWidth.width === 0) {
				this.openMenu();
			} else {
				this.closeMenu();
			}
		}
	},
	watch: {
		$route() {
			this.menuWidth = { width: 0 };
			if (this.app) {
				this.app.style.marginLeft = "0";
				this.app.style.marginRight = "0";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
#app {
	transition: margin-left 0.5s;
	transition: margin-right 0.5s;
}

.navMenu {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	background-color: #827ffe;
	overflow-x: hidden;
	padding-top: 60px;
	transition: 0.5s;
	a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 25px;
		color: #ffffff;
		display: block;
		transition: 0.3s;
		&:hover {
			color: #e0e0e0;
		}
	}
	.closebtn {
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		margin-left: 50px;
	}
}
.burger {
	flex: 1 1 5%;
	.icon-wrap {
		color: #fff;
		font-size: 30px;
	}
}
</style>