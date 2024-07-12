import gsap from 'gsap'
import { createScrollTrigger, defaults } from '../defaults/interactionParams'

export const sectionTestimonials = () => {
  const tl = gsap.timeline()

  tl.from('.partner-testimonials_top .text-style-eyebrow', defaults)
    .from('.partner-testimonials_top h2', defaults, '<45%')
    .from('.partner-testimonials_bottom', defaults, '<45%')

  createScrollTrigger('.partner-testimonials_top', tl)
}
