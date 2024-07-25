import { gsap } from 'gsap'
import { createScrollTrigger, defaults } from '../../defaults/interactionParams'

export const sectionWhy = () => {
  const tl = gsap.timeline()

  tl.from('.event-tag', defaults)
    .from('.event-why_wrapper .heading-style-h5', defaults, '<45%')
    .from('.event-tag_para', defaults, '<15%')

  const scrubParaTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.event-tag_para',
      start: 'top 75%',
      end: 'bottom 75%',
      scrub: 1,
    },
  })

  scrubParaTl.to('.event-tag_para .char', {
    color: '#ffffff',
    stagger: 0.02,
  })

  createScrollTrigger('.event-why_wrapper', tl)
}
