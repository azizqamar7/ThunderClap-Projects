import gsap from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.pricing-hero_content-wrapper h1', defaults)
    .from('.pricing-hero_content-wrapper h2', defaults, '<15%')
    .from('.pricing-hero_content-wrapper p', defaults, '<45%')
    .from('.pricing-hero_content-wrapper a', defaults, '<45%')

  const imageTl = gsap.timeline()

  imageTl
    .from('.pricing-hero_img-wrapper', defaults)
    .from('.pricing-hero_img-line', defaults, '<15%')
    .from(
      '.pricing-hero_img-icon',
      { opacity: 0, scale: 0.7, ease: 'back.out' },
      '<15%'
    )
    .from(
      '.pricing-hero_img-ui',
      { scale: 0, ease: 'back.out', transformOrigin: '50% 0%', stagger: 0.2 },
      '<15%'
    )
    .from('.pricing-hero_img-grid', defaults, '<15%')

  createScrollTrigger('.pricing-hero_img-parent', imageTl, 'top 65%')
}
