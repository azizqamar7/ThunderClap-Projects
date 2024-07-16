import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp1 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-form-label',
      start: 'top 65%',
    },
  })

  tl.from('.svg.is-form-label', defaults)
    .from('.g-form-label', defaults, '<45%')
    .from('.g-form-pallate', defaults, '<45%')
}

export const mockUp2 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-data-driven',
      start: 'top 65%',
    },
    defaults: {
      repeat: -1,
      transformOrigin: '50% 50%',
      ease: 'linear',
      duration: 30,
    },
  })

  // tl.from('.svg.is-data-driven', defaults)
  tl.from('.g-rotate-block-1, .g-rotate-1, .g-rotate-2, .g-rotate-block-3', {
    rotation: 360,
  }).from('.g-rotate-block-2, .g-rotate-3', { rotation: -360 }, '<')
}

export const mockUp3 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-reduce',
      start: 'top 65%',
    },
  })

  tl.from('.svg.is-reduce', defaults)
    .from('.g-line-reduce', { scaleX: 0 }, '<45%')
    .from('.g-reduce-block', { x: -10, opacity: 0 }, '<45%')
}
