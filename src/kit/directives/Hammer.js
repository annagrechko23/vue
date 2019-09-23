
 function getModifierDirections (mod) {
  let dir = {}

  directions.forEach(direction => {
    if (mod[direction]) {
      dir[direction] = true
    }
  })

  if (Object.keys(dir).length === 0) {
    return modifiersAll
  }

  if (dir.horizontal === true) {
    dir.left = dir.right = true
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true
  }
  if (dir.left === true && dir.right === true) {
    dir.horizontal = true
  }
  if (dir.up === true && dir.down === true) {
    dir.vertical = true
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true
  }

  return dir
}

 function updateModifiers (ctx, { oldValue, value, modifiers }) {
  if (oldValue !== value) {
    ctx.handler = value
  }

  if (directions.some(direction => modifiers[direction] !== ctx.modifiers[direction])) {
    ctx.modifiers = modifiers
    ctx.direction = getModifierDirections(modifiers)
  }
}

 function setObserver (el, evt, ctx) {
  const target = evt.target
  ctx.touchTargetObserver = new MutationObserver(() => {
    el.contains(target) === false && ctx.end(evt)
  })
  ctx.touchTargetObserver.observe(el, { childList: true, subtree: true })
}

 function removeObserver (ctx) {
  if (ctx.touchTargetObserver !== void 0) {
    ctx.touchTargetObserver.disconnect()
    ctx.touchTargetObserver = void 0
  }
}
function parseArg (arg) {
  // delta (min velocity -- dist / time)
  // mobile min distance on first move
  // desktop min distance until deciding if it's a swipe or not
  const data = [0.06, 6, 50]

  if (typeof arg === 'string' && arg.length) {
    arg.split(':').forEach((val, index) => {
      const v = parseFloat(val)
      v && (data[index] = v)
    })
  }

  return data
}

export default {
  name: 'hammer',

  bind (el, { value, arg, modifiers }) {
    if (el.__qtouchswipe) {
      el.__qtouchswipe_old = el.__qtouchswipe
    }

    // early return, we don't need to do anything
 

    let ctx = {
      handler: value,
      sensitivity: parseArg(arg),

      modifiers: modifiers,
      direction: getModifierDirections(modifiers),

      mouseStart (evt) {
        if (leftClick(evt)) {
          document.addEventListener('mousemove', ctx.move, true)
          document.addEventListener('mouseup', ctx.mouseEnd, true)
          ctx.start(evt, true)
        }
      },

      mouseEnd (evt) {
        document.removeEventListener('mousemove', ctx.move, true)
        document.removeEventListener('mouseup', ctx.mouseEnd, true)
        ctx.end(evt)
      },

      

      move (evt) {
        if (ctx.event === void 0 || ctx.event.abort === true) {
          return
        }

        if (ctx.event.dir !== false) {
          stopAndPrevent(evt)
          return
        }

        const time = new Date().getTime() - ctx.event.time

        if (time === 0) {
          return
        }

        const
          pos = position(evt),
          distX = pos.left - ctx.event.x,
          absX = Math.abs(distX),
          distY = pos.top - ctx.event.y,
          absY = Math.abs(distY)

					if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
            ctx.event.abort = true
            return
          }
        

        const
          velX = absX / time,
          velY = absY / time

        if (
          ctx.direction.vertical === true &&
          absX < absY &&
          absX < 100 &&
          velY > ctx.sensitivity[0]
        ) {
          ctx.event.dir = distY < 0 ? 'up' : 'down'
        }

        if (
          ctx.direction.horizontal === true &&
          absX > absY &&
          absY < 100 &&
          velX > ctx.sensitivity[0]
        ) {
          ctx.event.dir = distX < 0 ? 'left' : 'right'
        }

        if (
          ctx.direction.up === true &&
          absX < absY &&
          distY < 0 &&
          absX < 100 &&
          velY > ctx.sensitivity[0]
        ) {
          ctx.event.dir = 'up'
        }

        if (
          ctx.direction.down === true &&
          absX < absY &&
          distY > 0 &&
          absX < 100 &&
          velY > ctx.sensitivity[0]
        ) {
          ctx.event.dir = 'down'
        }

        if (
          ctx.direction.left === true &&
          absX > absY &&
          distX < 0 &&
          absY < 100 &&
          velX > ctx.sensitivity[0]
        ) {
          ctx.event.dir = 'left'
        }

        if (
          ctx.direction.right === true &&
          absX > absY &&
          distX > 0 &&
          absY < 100 &&
          velX > ctx.sensitivity[0]
        ) {
          ctx.event.dir = 'right'
        }

        if (ctx.event.dir !== false) {
          document.body.classList.add('no-pointer-events')
          stopAndPrevent(evt)
          clearSelection()

          ctx.handler({
            evt,
            touch: ctx.mouse !== true,
            mouse: ctx.mouse === true,
            direction: ctx.event.dir,
            duration: time,
            distance: {
              x: absX,
              y: absY
            }
          })
        }
        else {
          ctx.event.abort = true
        }
      },

      end (evt) {
        if (ctx.event === void 0) {
          return
        }


        if (ctx.event.abort === false && ctx.event.dir !== false) {
          document.body.classList.remove('no-pointer-events')
          stopAndPrevent(evt)
        }

        ctx.event = void 0
      }
    }

    el.__qtouchswipe = ctx

    if (modifiers.mouse === true) {
      el.addEventListener('mousedown', ctx.mouseStart, modifiers.mouseCapture)
    }

    
  },

  update (el, binding) {
    const ctx = el.__qtouchswipe

    if (ctx !== void 0) {
      updateModifiers(ctx, binding)
    }
  },

  unbind (el, { modifiers }) {
    const ctx = el.__qtouchswipe_old || el.__qtouchswipe

  }
}