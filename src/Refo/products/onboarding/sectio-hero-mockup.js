import { gsap } from 'gsap'

export const sectionHeroMockUp = () => {
  const tl = gsap.timeline()

  tl.from('.g-onboard-pop', {
    scale: 0.8,
    opacity: 0,
    delay: 0.5,
    ease: 'back.out',
    stagger: { amount: 0.3, from: 'random' },
    transformOrigin: '50% 50%',
  })
}
