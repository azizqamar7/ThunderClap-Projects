import gsap from 'gsap'
import { createScrollTrigger, defaults } from '../defaults/interactionParams'

export const sectionCta = () => {
  const tl = gsap.timeline()

  tl.from('.cta_wrapper h2', defaults)
    .from('.cta_wrapper p', defaults, '<45%')
    .from('.cta_wrapper a', defaults, '<45%')

  createScrollTrigger('.cta_wrapper', tl)
}
