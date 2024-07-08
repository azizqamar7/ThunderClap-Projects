import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionBenefits = () => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-benefits',
      start: 'top 65%',
    },
  })

  tl.from('.home-benefits_title', defaults).from('.benefit-block', {
    opacity: 0,
    y: 30,
    stagger: { amount: 0.5 },
  })
}
