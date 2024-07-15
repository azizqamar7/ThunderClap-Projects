import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp3 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-kyc-process',
      start: 'top 65%',
    },
  })

  tl.from('.g-form-onboard', defaults)
    .from('.path-left-right', { scaleX: 0 }, '<45%')
    .from('.path-left-right-dot', { scale: 0, transformOrigin: '50% 50%' })
    .from('.g-kyc-process', defaults, '<')
    .from(
      '.path-right-left',
      { scaleX: 0, transformOrigin: '100% 50%' },
      '<45%'
    )
    .from('.path-right-left-dot', { scale: 0, transformOrigin: '50% 50%' })
}
