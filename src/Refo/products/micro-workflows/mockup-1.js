import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp1 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-api-calls',
      start: 'top 65%',
    },
  })

  tl.to({}, { duration: 0.5 })
  tl.from('.g-api', defaults, '<45%')
}
