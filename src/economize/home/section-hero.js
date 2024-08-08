import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.navbar-component', { y: '-110%' })
    .set('.navbar-component', { clearProps: 'all' })
    .from(
      '.svg-clouds_wrapper circle',
      {
        opacity: 0,
        scale: 0.8,
        stagger: { amount: 0.7, from: 'start' },
        transformOrigin: '50% 50%',
      },
      '<45%'
    )
    .from('.home-hero_video-wrapper', defaults, '<55%')

    .from('.home-hero_content .tag', defaults, 0.2)
    .from('.home-hero_content h1', defaults, '<15%')
    .from('.home-hero_content p', defaults, '<45%')
    .from('.home-hero_content a', defaults, '<45%')
    .from('.home-hero_content .check-pointer', defaults, '<45%')
    .from('.home-hero_content [hero-cta-bottom]', defaults, '<15%')
}
