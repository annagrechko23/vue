const state = new WeakMap();

export default {
  name: 'swipe',
	
  bind: function($el, binding, vNode) {
	 console.log($el.lenght, binding, vNode.elm)

	//  const percentage = ((100 / this.count) * e) / window.innerWidth;
	//  const transform = percentage - (100 / this.count) * this.activeSlide;
	 // this.$refs.list.style.transform = `translateX(${transform}%)`;

		let lock =$el.lenght;
		console.log(lock)
    let capture = binding.modifiers.capture;
    let processor = binding.value;
    let startX;
    let startY;
    let movingX;
    let movingY;
    let directionFour;
    let directionTwo;
    let offset;
    let directionCheckDone;
    let continuePropagation;
    let startWidthTwo;
    let startWidthFour;
    let canceled;


    function getInfo(srcEvt) {

      return {
        element: $el,
        scrEvt: srcEvt,
        offset: offset,
        startX: startX,
        startY: startY,
        movingX: movingX,
        movingY: movingY,
        directionTwo: directionTwo,
        directionFour: directionFour,
        startWidthTwo: startWidthTwo,
        startWidthFour: startWidthFour
      };
    }

      $el.addEventListener(
        'touchstart',
        function(e) {
					
					console.log(e.touches[0].clientX)
          startX = e.touches[0].clientX;
					startY = e.touches[0].clientY;
		
          directionTwo = null;
          directionCheckDone = null;
          startWidthTwo = null;
          startWidthFour = null;
          continuePropagation = false;
          canceled = false;
        },
        capture
      );

      $el.addEventListener(
				'touchmove',
        function(e) {
					state.set($el, e)
          movingX = e.touches[0].clientX;
          movingY = e.touches[0].clientY;
          var x = movingX - startX;
          var y = movingY - startY;
          var lockCheck = false;
          var check;

            offset = x;
            directionFour = x > 0 ? 'right' : 'left';
      

          check =
            [directionFour, directionTwo].includes(binding.arg) ||
            binding.arg === 'any';

          if (directionCheckDone === null) {
            if (check === true) {
              startWidthTwo = directionTwo;
              startWidthFour = directionFour;
              processor.start instanceof Function &&
                processor.start(
                  getInfo(e),
                  setTo => {
                    lockCheck = setTo;
                  },
                  setTo => {
                    continuePropagation = setTo;
                  }
                );
            }

            directionCheckDone = check;
          }

          if (directionCheckDone) {
            lock && (lockCheck = true);

            processor.move instanceof Function &&
              processor.move(
                getInfo(e),
                setTo => {
                  lockCheck = setTo;
                },
                setTo => {
                  continuePropagation = setTo;
                }
              );
            !continuePropagation && e.stopPropagation();
            lockCheck && e.cancelable && e.preventDefault();
					} 
				console.log()
					
        },
        capture
      );

      $el.addEventListener(
        'touchend',
        function(e) {
					console.log(e)
          var lockCheck = false;
          continuePropagation = true;
          lock && directionCheckDone && (lockCheck = true);

          
          !continuePropagation && e.stopPropagation();
          lockCheck && e.cancelable && e.preventDefault();
        },
        capture
      );
		},
		update(el) {
			const data = state.get(el)
		},
		unbind(el) {
			state.delete(el)
		}
}

