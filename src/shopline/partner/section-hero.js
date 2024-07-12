import { gsap } from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionHero = () => {
  const tlContent = gsap.timeline()
  const tlMockUp = gsap.timeline()

  tlContent
    .from('.section_partner-hero .text-style-eyebrow-wrapper', defaults, 0.2)
    .from('.section_partner-hero h1', defaults, '<45%')
    .from('.section_partner-hero p', defaults, '<45%')
    .from('.section_partner-hero a', defaults, '<45%')

  // Run animation on desktop and tablet based on condition
  let tlMockUpPositon = 0
  if (window.innerWidth < 990) {
    tlMockUpPositon = tlContent.totalDuration()
    console.log(tlContent.totalDuration())
  }

  tlMockUp
    .from('.partner-hero_img-wrapper-n', defaults, tlMockUpPositon * 0.45)
    .from('.partner-hero_partner-wrapper-n', defaults, '<40%')
    .from('.partner-hero_img-grid-n', defaults, '<20%')
    .from('.partner-hero_img-line-n', defaults, '<40%')
    .from(
      '.partner-hero_img-icon-n',
      {
        opacity: 0,
        scale: 0.7,
        ease: 'back.out(1)',
        duration: 0.4,
      },
      '<75%'
    )
  tlMockUp.timeScale(1.25)
}
