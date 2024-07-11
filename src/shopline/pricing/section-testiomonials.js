import gsap from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionTestimonial = () => {
  const tl = gsap.timeline()

  tl.from('.testimonials_parent-wrapper', defaults)

  createScrollTrigger('.testimonials_parent-wrapper', tl)
}
