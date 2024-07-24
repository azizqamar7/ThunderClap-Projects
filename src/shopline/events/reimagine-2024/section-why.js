import { gsap } from 'gsap'
import { createScrollTrigger, defaults } from '../../defaults/interactionParams'

export const sectionWhy = () => {
  const tl = gsap.timeline()

  tl.from('.event-tag', defaults).from(
    '.event-why_wrapper .heading-style-h5',
    defaults,
    '<45%'
  )

  createScrollTrigger('.event-why_wrapper', tl)
}
