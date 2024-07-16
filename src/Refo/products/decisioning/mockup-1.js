import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp1 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-accelarate',
      start: 'top 65%',
    },
  })

  tl.from('.svg.is-accelarate', defaults)
    .from('.g-io', defaults, '<45%')
    .from('.g-result', defaults, '<45%')
    .from('.g-analysis', { opacity: 0, y: -10 }, '<45%')
}
