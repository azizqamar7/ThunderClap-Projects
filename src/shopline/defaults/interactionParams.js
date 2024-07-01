export const defaults = {
  opacity: 0,
  y: 30,
  ease: 'power3.out',
  duration: 0.7,
}

export const createScrollTrigger = (
  triggerElement,
  timeline,
  start,
  isBoolean
) => {
  if (isBoolean === undefined) {
    isBoolean = false
    // console.log('log from defaults', isBoolean)
  }

  if (start === undefined) {
    start = 'top 75%'
  }

  ScrollTrigger.create({
    trigger: triggerElement,
    animation: timeline,
    start: start,
    markers: isBoolean,
  })
}
