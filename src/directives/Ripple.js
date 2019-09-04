import Vue from 'vue';

export const Ripple = {
    bind: function(el) {
        var ripple = document.createElement("span");
        ripple.setAttribute("class", "simple");

        el.appendChild(ripple);

        el.addEventListener('mousedown', function(event) {
            getRip(event, el);
            ripple.classList.remove("anotherclass");
        });

        function getRip(event, el) {
            var rect = el.getBoundingClientRect(),
                top = event.offsetY,
                left = event.offsetX,
                height = rect.height,
                buttonSize = rect.width > rect.height ? rect.width : rect.height;
            setTimeout(function() {
                if (ripple.classList.contains !== 'anotherclass') {
                    ripple.classList.add("anotherclass");
                    ripple.style.position = 'absolute';
                    ripple.style.width = buttonSize + 'px';
                    ripple.style.height = height + 'px';
                    ripple.style.top = top + 'px';
                    ripple.style.left = left + 'px';
                }
            }, 100)
        }
    },

};

Vue.directive('ripple', Ripple)