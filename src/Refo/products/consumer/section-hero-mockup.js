import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const sectionHeroMockUp = () => {
  const tl = gsap.timeline()

  tl.to({}, { duration: 0.5 })
  tl.from('.g-refo', defaults)
    .from('.g-bank', { y: 10, opacity: 0 }, '<45%')
    .from('.g-people', { y: -10, opacity: 0 }, '<')
    .from('.line-down', { scaleY: 0 }, '<55%')
    .from('.line-up', { scaleY: 0, transformOrigin: '50% 100%' }, '<')
    .from('.circle-down, .circle-up', { scale: 0, transformOrigin: '50% 50%' })
    .from(
      '.g-mode, .g-data-integration, .g-fraud, .g-ui',
      { opacity: 0, stagger: { amount: 0.3, from: 'random' }, y: 10 },
      '<-50%'
    )
}
