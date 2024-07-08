import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionVision = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.aboout-content',
      start: 'top 70%',
    },
  })

  tl.from('.aboout-content h2', defaults)
    .from('.aboout-content p', defaults, '<45%')
    .from(
      '.svg-last-line',
      {
        opacity: 0,
        y: '20%',
        stagger: { amount: 0.4, from: 'center' },
      },
      '<45%'
    )
}
