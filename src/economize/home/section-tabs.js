import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionTabs = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-tabs_wrapper',
      start: 'top 70%',
    },
  })

  tl.from('.home-tabs_wrapper h2', defaults)
    .from('.home-tabs_wrapper p', defaults, '<15%')
    .from('.home-tabs', defaults, '<45%')
}
