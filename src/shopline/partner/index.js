/**
 * For Partner page js
 */

console.log('Hello from Partner folder')
import gsap from 'gsap'
import { createScrollTrigger, defaults } from '../defaults/interactionParams'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // Section Hero
  const sectionHero = () => {
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
      .from('.partner-hero_img-wrapper', defaults, tlMockUpPositon * 0.45)
      .from('.partner-hero_img-grid', defaults, '<20%')
      .from('.partner-hero_img-line', defaults, '<40%')
      .from(
        '.partner-hero_img-dot',
        {
          opacity: 0,
          scale: 0.7,
          ease: 'back.out(1)',
          duration: 0.4,
        },
        '<75%'
      )
      .from(
        '.partner-hero_img-ui',
        {
          opacity: 0,
          scale: 0.7,
          ease: 'back.out(3)',
          duration: 0.4,
          transformOrigin: '0% 0%',
        },
        '<75%'
      )
      .from(
        '.partner-hero_img-icon',
        {
          opacity: 0,
          scale: 0.7,
          ease: 'back.out(1)',
          duration: 0.4,
        },
        '<75%'
      )
    tlMockUp.timeScale(1.25)

    // createScrollTrigger('.partner-hero_img-wrapper', tlMockUp)
  }

  sectionHero()
  // Section Hero

  // Section Partner Type
  const sectionPartnerType = () => {
    const tl = gsap.timeline()

    tl.from('.section_partner-type h2', defaults).from(
      '.partner-type_top p',
      defaults,
      '<35%'
    )
    defaults.stagger = { amount: 0.5 }
    tl.from('.partner-type_block', defaults, '<45%')
    defaults.stagger = { amount: 0 }

    createScrollTrigger('.partner-type_top', tl)
  }

  sectionPartnerType()
  // Section Partner Type

  // Section Partner Benefits
  const sectionPartnerBenfits = () => {
    const tl = gsap.timeline()

    tl.from('.partner-benefits_top h2', defaults).from(
      '.partner-benefits_top p',
      defaults,
      '<45%'
    )

    createScrollTrigger('.partner-benefits_top', tl, undefined, true)
  }

  sectionPartnerBenfits()
  // Section Partner Benefits
})
