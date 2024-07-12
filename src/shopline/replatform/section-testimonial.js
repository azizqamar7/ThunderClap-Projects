import { gsap } from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionTestimonial = () => {
  const tl = gsap.timeline()

  tl.from('.testimonial-story_wrapper .text-style-eyebrow', defaults)
    .from('.testimonial-story_wrapper h2', defaults, '<45%')
    .from('.testimonial-story_img-wrapper', defaults, '<45%')
    .from('.testimonial-story_review', defaults, '<45%')
    .from('.testimonial-story_right a', defaults, '<45%')

  createScrollTrigger('.testimonial-story_wrapper', tl)
}
