import { gsap } from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.replatform-hero_left-wrapper h1', defaults)
    .from('.replatform-hero_left-wrapper p', defaults, '<45%')
    .from('.replatform-hero_review-wrapper', defaults, '<45%')
    .from('.replatform-hero_img-wrapper', defaults, 0.2)
    .from('.replatform-hero_author-wrapper', defaults, '<45%')
    .from('.replatform-hero_bg-wrapper', { opacity: 0 }, '<55%')
}
