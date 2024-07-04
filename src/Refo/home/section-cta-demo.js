import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionCtaDemo = () => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-cta-demo',
      start: 'top 65%',
    },
  })

  tl.from('.section_home-cta-demo h2', defaults)
    .from('.section_home-cta-demo p', defaults, '<45%')
    .from('.section_home-cta-demo .button-group', defaults, '<45%')

  const imageTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cta-demo_image-wrapper',
      start: 'top 65%',
    },
  })

  imageTl
    .from('.rect-bg-5', defaults)
    .from('.g-line-divider', { scaleX: 0 }, '<45%')
    .from('.ocr-image img', { y: '110%' })
    .from('.g-ocr', { y: '-110%' }, '<')

  imageTl.timeScale(1.25)
}
