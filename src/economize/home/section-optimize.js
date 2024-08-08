import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionOptimze = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-optimize',
      start: 'top 70%',
    },
  })

  tl.from('.home-optimize h2', defaults)

  defaults.stagger = 0.1

  tl.from('.home-optimize .optimize-card', defaults, '<15%')

  delete defaults.stagger

  tl.from('.home-optimize a', defaults, '<45%')
}
