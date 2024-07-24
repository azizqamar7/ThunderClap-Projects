import { gsap } from 'gsap'
import { createScrollTrigger } from '../../defaults/interactionParams'

export const sectionCta = () => {
  const tl = gsap.timeline()

  tl.from('.event-grid-5 rect, .event-grid-6 rect', {
    opacity: 0,
    stagger: { amount: 1, from: 'random' },
  })

  createScrollTrigger('.event-grid-wrap', tl)
}
