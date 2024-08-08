import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionSignals = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-signals',
      start: 'top 70%',
    },
  })

  tl.from('.home-signals h2', defaults)
    .from('.home-signals p', defaults, '<15%')
    .from(
      '.home-signals .check-pointer',
      {
        opacity: 0,
        y: 15,
        ease: 'power2.out',
        stagger: { amount: 0.5 },
      },
      '<45%'
    )
    .from('.home-signals_right', defaults, 0.2)

  const cardtl = gsap.timeline({
    scrollTrigger: {
      trigger: '.grid-col-2',
      start: 'top 70%',
    },
  })

  cardtl.from('.card-testimonial, .card-form-wrapper', {
    opacity: 0,
    y: 30,
    ease: 'power2.out',
    stagger: { amount: 0.2 },
  })
}
