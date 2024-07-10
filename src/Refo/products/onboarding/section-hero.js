import gsap from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('[product-hero] .text-size-tiny', defaults)
    .from('[product-hero] h1', defaults, '<15%')
    .from('[product-hero] p', defaults, '<45%')
    .from('[product-hero] a', defaults, '<45%')
    .from('[product-hero] svg', defaults, 0.2)
}
