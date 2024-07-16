import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp2 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-secure',
      start: 'top 65%',
    },
  })

  tl.from('.svg.is-secure', defaults)
    .from('.g-scanner-1', defaults, '<45%')
    .from('.g-scanner-2', defaults, '<45%')
}
