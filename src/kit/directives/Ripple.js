export default {
    name: "ripple",
    bind: function(el, binding) {
        let ripple = document.createElement("span"); // don't use var
        ripple.setAttribute("class", "simple");

        el.appendChild(ripple);

        el.addEventListener("mousedown", (event) => { // try to use arrow functions (https://learn.javascript.ru/es-function#funktsii-strelki-ne-imeyut-svoego-this)
            getRip(event, el);
        });
        el.addEventListener("mouseup", () => {
            ripple.classList.remove("anotherclass");
        });

        let getRip = (event, el) => { // try to use arrow functions
            var rect = el.getBoundingClientRect(),
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
                    ripple.style.width = buttonSize + "px";
                    ripple.style.height = height + "px";
                    ripple.style.top = top - rect.height / 2 + "px";
                    ripple.style.left = left - buttonSize / 2 + "px";
                }
            }, 200);
        }
    }
};