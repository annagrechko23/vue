export default {
	name: "ripple",
	inserted: (el, binding) => {
		let ripple = document.createElement("span");
		ripple.setAttribute("class", "simple");
		el.appendChild(ripple);

		el.addEventListener("click", (event) => {
			getRip(event, el);
		});
		el.addEventListener("mouseup", () => {
			ripple.classList.remove("anotherclass");
		});

		const getRip = (event, el) => {
			const rect = el.getBoundingClientRect(),
				top = event.offsetY,
				left = event.offsetX,
				height = rect.height,
				buttonSize = rect.width > rect.height ? rect.width : rect.height;
			setTimeout(() => {
				if (ripple.classList.contains !== "anotherclass") {
					if (binding.value) {
						ripple.style.background = binding.value;
					}
					ripple.classList.add("anotherclass");
					ripple.style.position = "absolute";
					ripple.style.width = `${buttonSize}px`;
					ripple.style.height = `${height}px`;
					ripple.style.top = `${top - rect.height / 2}px`;
					ripple.style.left = `${left - buttonSize / 2}px`;
				}
			}, 100);
		}
	}
};