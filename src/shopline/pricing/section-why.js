import gsap from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionWhy = () => {
  const tl = gsap.timeline()

  tl.from('.pricing-why-shopline_top h2', defaults).from(
    '.pricing-why-shopline_top p',
    defaults,
    '<45%'
  )

  createScrollTrigger('.pricing-why-shopline_top', tl)

  const contentGridTl = gsap.timeline()

  contentGridTl.from('.pricing-why-shopline_block', {
    opacity: 0,
    y: 30,
    ease: 'power3.out',
    duration: 0.7,
    stagger: { amount: 0.5 },
  })

  createScrollTrigger('.pricing-why-shopline_grid', contentGridTl)
}
