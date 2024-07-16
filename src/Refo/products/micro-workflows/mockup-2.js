import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp2 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-mitigate',
      start: 'top 65%',
    },
  })

  tl.from('.svg.is-mitigate', defaults)
    .from('.g-fetch', { opacity: 0, y: -20 }, '<45%')
    .from(
      '.path-line-fetch',
      { scaleY: 0, transformOrigin: '50% 0%', duration: 0.3 },
      '<75%'
    )
    .from(
      '.path-circle-fetch',
      { scale: 0, transformOrigin: '50% 50%', duration: 0.2 },
      '<80%'
    )
    .from('.g-condition-1, .g-condition-2', { opacity: 0, y: -10 }, '<')
    // .from('', defaults, '<')
    .from('.g-statement, .rect-bg-risks', { opacity: 0 }, '<')
    .from(
      '.path-line-notify',
      { scaleY: 0, transformOrigin: '50% 0%', duration: 0.3 },
      '<75%'
    )
    .from(
      '.path-circle-notify',
      { scale: 0, transformOrigin: '50% 50%', duration: 0.2 },
      '<80%'
    )
    .from('.g-notify', { opacity: 0 })
}
