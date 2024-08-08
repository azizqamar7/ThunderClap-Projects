import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionIntegration = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-integrations',
      start: 'top 70%',
    },
  })

  tl.from('.home-integrations h2', defaults)
    .from('.home-integrations p', defaults, '<15%')
    .from('.home-integrations img', defaults, '<45%')
}
