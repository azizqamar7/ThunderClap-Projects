import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionCustomer = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-customers',
      start: 'top 70%',
    },
  })

  tl.from('.home-customers h2', defaults)
    .from('.home-customers p', defaults, '<15%')
    .from(
      '.home-customers .customers-logo',
      { opacity: 0, y: 20, stagger: { amount: 0.5 }, ease: 'power2.out' },
      '<45%'
    )
    .from(
      '.svg-g2-review, .customer_g2-leader',
      { opacity: 0, y: 20, stagger: { amount: 0.5 }, ease: 'power2.out' },
      '<45%'
    )
    .from('.home-customers_right', defaults, 0.3)
}
