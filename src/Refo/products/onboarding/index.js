/**
 * This is the individual file for a webflow page.
 * For Onboarding page js
 */

console.log('Hello from Onboarding folder')

import { gsap } from 'gsap'
import { sectionHero } from './section-hero'
import { sectionFeatures } from './section-features'
import { sectionProducts } from './section-products'
import { sectionBenefits } from '../../components/section-benefits'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Section Hero
  sectionHero()

  // Section Features
  sectionFeatures()

  // Section Products
  sectionProducts()

  const mockUp1 = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.svg-loop-relative',
        start: 'top 65%',
      },
      defaults: {
        duration: 1,
      },
      repeat: 1,
    })

    tl.to('.onboard-block-1', { x: '137%' })
      .to('.onboard-block-2', { x: '-68%', scale: 1.05 }, '<')
      .to('.onboard-block-3', { x: '-65%', scale: 1.25, zIndex: 2 }, '<')
      .to('.onboard-block-1', { x: '77%', scale: 1.2, zIndex: 3 })
      .to('.onboard-block-2', { x: '62%', scale: 1 }, '<')
      .to('.onboard-block-3', { x: '-130%', scale: 1, zIndex: 1 }, '<')
      .to('.onboard-block-2', { x: '0%', scale: 1.3, zIndex: 2 })
      .to('.onboard-block-1', { x: '0%', scale: 1, zIndex: 1 }, '<')
      .to('.onboard-block-3', { x: '0%', scale: 1, zIndex: 1 }, '<')
  }

  if (document.querySelector('.svg-loop-relative')) {
    mockUp1()
  }

  // Section Benefits
  sectionBenefits()
})
