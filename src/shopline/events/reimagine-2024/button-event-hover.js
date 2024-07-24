import { gsap } from 'gsap'
// import { defaults } from '../defaults/interactionParams'

export const buttonEventHover = () => {
  const buttons = document.querySelectorAll('[button]')

  buttons.forEach((button) => {
    const buttonOverlay = button.querySelector('.button-event-overlay')

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'power3.out', duration: 0.3 },
    })

    let exitTime = 0

    tl.to(buttonOverlay, { width: 'calc(100% - 0.625rem)' })
      .to(button, { color: '#ffffff' }, '<')
      .addPause('exit')
    exitTime = tl.duration()
    tl.to(button, { color: '#000000' }).to(
      buttonOverlay,
      { width: '2rem' },
      '<'
    )

    button.addEventListener('mouseenter', () => {
      if (tl.time() < exitTime) {
        tl.play()
      } else {
        tl.restart()
      }
    })

    button.addEventListener('mouseleave', () => {
      if (tl.time() < exitTime) {
        tl.reverse()
      } else {
        tl.play()
      }
    })
  })
}
