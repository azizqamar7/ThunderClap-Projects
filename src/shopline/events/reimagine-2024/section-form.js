import { gsap } from 'gsap'
import { createScrollTrigger } from '../../defaults/interactionParams'

export const sectionForm = () => {
  const tl = gsap.timeline()

  tl.from('.event-grid-3 rect, .event-grid-4 rect', {
    opacity: 0,
    stagger: { amount: 1, from: 'random' },
  })

  createScrollTrigger('.section_event-form', tl)
}
