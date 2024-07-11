import gsap from 'gsap'
import { createScrollTrigger } from '../defaults/interactionParams'

export const sectionFeatures = () => {
  const tl = gsap.timeline()

  tl.from('.pricing-features_item', {
    opacity: 0,
    y: 30,
    ease: 'power3.out',
    duration: 0.7,
    stagger: { amount: 0.3 },
  })

  createScrollTrigger('.pricing-features_wrapper', tl)
}
