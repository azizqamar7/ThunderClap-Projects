import { gsap } from 'gsap'

export const mockUp1 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg-loop-relative',
      start: 'top 65%',
    },
    defaults: {
      duration: 1.25,
    },
    // repeat: 1,
  })

  tl.to({}, { duration: 1 })
  tl.to('.onboard-block-1', { x: '137%' })
    .to('.onboard-block-2', { x: '-68%', scale: 1.05 }, '<')
    .to('.onboard-block-3', { x: '-65%', scale: 1.25, zIndex: 2 }, '<')
    .to('.onboard-block-1', { x: '77%', scale: 1.2, zIndex: 3 })
    .to('.onboard-block-2', { x: '62%', scale: 1 }, '<')
    .to('.onboard-block-3', { x: '-130%', scale: 1, zIndex: 1 }, '<')
    .to('.onboard-block-2', { x: '0%', scale: 1.3, zIndex: 2 })
    .to('.onboard-block-1', { x: '0%', scale: 1, zIndex: 1 }, '<')
    .to('.onboard-block-3', { x: '0%', scale: 1, zIndex: 1 }, '<')
}
