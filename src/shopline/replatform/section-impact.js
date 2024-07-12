import { gsap } from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionImpact = () => {
  const tl = gsap.timeline()

  tl.from('.impact_wrapper', defaults)
    .from('.impact_wrapper h2', defaults, '<45%')
    .from(
      '.impact_item',
      {
        opacity: 0,
        y: 30,
        ease: 'power3.out',
        stagger: { amount: 0.3 },
        duration: 0.7,
      },
      '<45%'
    )

  createScrollTrigger('.impact_wrapper', tl)
}
