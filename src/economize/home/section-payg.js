import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionPayG = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-payg',
      start: 'top 70%',
    },
  })

  tl.from('.svg-payg-ball', {
    opacity: 0,
    scale: 0,
    y: '500%',
    transformOrigin: '50% 50%',
    duration: 0.3,
    ease: 'power2.out',
  })
    .from('.svg-payg-animal', {
      opacity: 0,
      y: '20',
      duration: 0.3,
      ease: 'power2.out',
    })
    .from(
      '.svg-payg-clouds',
      {
        opacity: 0,
        stagger: { amount: 0.5 },
        scale: 0,
        transformOrigin: '50% 50%',
        ease: 'power2.out',
      },
      '<45%'
    )

    .from('.home-payg h2', defaults, 0.3)
    .from('.home-payg p', defaults, '<45%')
    .from('.home-payg .payg-item', defaults, '<15%')

  delete defaults.stagger
}
