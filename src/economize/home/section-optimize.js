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

  // defaults.stagger = 0.1

  // tl.from('.home-optimize .optimize-card', defaults, '<15%')

  // delete defaults.stagger

  tl.from('.home-optimize a', defaults, '<45%')

  const card1Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.optimize-card.is-1',
      start: 'top 70%',
    },
  })

  card1Tl.from('.optimize-card.is-1', defaults).from(
    '.g-azure, .g-aws, .g-gcp',
    {
      opacity: 0,
      y: '5%',
      scale: 0.8,
      stagger: 0.1,
      ease: 'back.out',
      transformOrigin: '50% 50%',
    },
    '<15%'
  )

  const card2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.optimize-card.is-2',
      start: 'top 70%',
    },
  })

  card2Tl
    .from('.optimize-card.is-2', defaults)
    .from('.g-optimzie-grid', { opacity: 0, x: '-5%' })
    .from(
      '.g-cost',
      {
        opacity: 0,
        y: '5%',
        scale: 0.8,
        stagger: 0.1,
        ease: 'back.out',
        transformOrigin: '50% 50%',
      },
      '<45%'
    )
    .from('.g-optimize-rect', { scaleX: 0, stagger: 0.1 }, '<10%')

  const card3Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.optimize-card.is-3',
      start: 'top 70%',
    },
  })

  card3Tl.from('.optimize-card.is-3', defaults).from(
    '.g-detect',
    {
      opacity: 0,
      y: '5%',
      scale: 0.8,
      stagger: 0.1,
      ease: 'back.out',
      transformOrigin: '50% 50%',
    },
    '<15%'
  )
}
