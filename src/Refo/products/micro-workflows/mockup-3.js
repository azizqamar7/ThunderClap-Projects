import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp3 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-unleash',
      start: 'top 65%',
    },
  })

  tl.from('.svg.is-unleash', defaults)
    .from('.g-study-process', defaults, '<45%')
    .from('.g-time', { opacity: 0, y: 15, stagger: { amount: 0.4 } }, '<45%')
    .from('.g-status', defaults, '<45%')
    .from(
      '.g-grow',
      { opacity: 0, scale: 0.7, transformOrigin: '50% 50%', duration: 0.3 },
      '<'
    )
}
