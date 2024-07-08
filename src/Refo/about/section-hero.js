import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.navbar_component', {
    y: '-100%',
    duration: 0.7,
    ease: 'power2.out',
  })
    .from('.about-hero .text-size-tiny', defaults)
    .set('.navbar_component', { clearProps: 'all' })
    .from('.about-hero h1', defaults, '<15%')
    .from('.about-hero p', defaults, '<45%')
    .from('.about-hero .button-group', defaults, '<45%')
    .from('.about-svg', { opacity: 0 }, '<45%')
}
