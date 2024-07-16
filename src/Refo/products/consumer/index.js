/**
 * This is the individual file for a webflow page.
 * For SME page js
 */

console.log('Hello from SME folder')

import { gsap } from 'gsap'
import { sectionHero } from '../common-layouts/section-hero'
import { sectionFeatures } from '../common-layouts/section-features'
import { sectionProducts } from '../common-layouts/section-products'
import { sectionBenefits } from '../../components/section-benefits'
import { sectionHeroMockUp } from './section-hero-mockup'
import { mockUp1, mockUp2, mockUp3 } from '../common-layouts/solution-mockup'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Section Hero
  sectionHero()
  sectionHeroMockUp()

  // Section Features
  sectionFeatures()

  // Section Products
  sectionProducts()

  // Mockup Ix
  mockUp1()
  mockUp2()
  mockUp3()

  // Section Benefits
  sectionBenefits()
})
