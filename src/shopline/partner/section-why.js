import { gsap } from 'gsap'
import { createScrollTrigger, defaults } from '../defaults/interactionParams'

export const sectionWhy = () => {
  const tl = gsap.timeline()

  tl.from('.partner-why_content h2', defaults)
    .from('.partner-why_content p', defaults, '<45%')
    .from('.partner-why_content a', defaults, '<45%')

  createScrollTrigger('.partner-why_content', tl)

  const rightBlockTl = gsap.timeline()

  rightBlockTl.from('.partner-why_item', {
    opacity: 0,
    y: 30,
    ease: 'power3.out',
    duration: 0.7,
    stagger: { amount: 0.5 },
  })

  createScrollTrigger('.partner-why_grid', rightBlockTl)
}
