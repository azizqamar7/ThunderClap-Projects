import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp3 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-attr',
      start: 'top 65%',
    },
  })

  tl.from('.svg.is-attr', defaults)
    .from('.g-schema', defaults, '<45%')
    .from('.g-js', defaults, '<45%')
    .from('.g-custom', { opacity: 0, y: -10 }, '<45%')
}
