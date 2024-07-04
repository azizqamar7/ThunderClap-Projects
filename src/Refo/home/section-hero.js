import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.navbar_component', {
    y: '-100%',
    duration: 0.7,
    ease: 'power2.out',
  })
    .from('.home-hero .text-size-tiny', defaults)
    .set('.navbar_component', { clearProps: 'all' })
    .from('.home-hero h1', defaults, '<45%')
    .from('.home-hero p', defaults, '<45%')
    .from('.home-hero .button-group', defaults, '<45%')
    .from('.home-hero_image img', defaults, '<45%')
    .from('.hero-left_gradient-svg', { opacity: 0 }, '<45%')
    .from('.hero-right_gradient-svg', { opacity: 0 }, '<')
}
