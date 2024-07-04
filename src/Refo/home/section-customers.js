import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionCustomers = () => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-customers',
      start: 'top 70%',
    },
  })

  tl.from('.home-customers h2', defaults)
  tl.from('.home-customers p', defaults, '<45%').from(
    '.customer-card',
    {
      opacity: 0,
      y: 30,
      stagger: { amount: 0.5 },
    },
    '<45%'
  )
}
