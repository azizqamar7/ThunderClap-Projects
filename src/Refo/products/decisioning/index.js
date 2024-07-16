/**
 * This is the individual file for a webflow page.
 * For Decisioning page js
 */

console.log('Hello from Decisioning folder')

import { gsap } from 'gsap'
import { sectionHero } from '../common-layouts/section-hero'
import { sectionFeatures } from '../common-layouts/section-features'
import { sectionProducts } from '../common-layouts/section-products'
import { sectionBenefits } from '../../components/section-benefits'
import { sectionHeroMockUp } from './section-hero-mockup'
import { mockUp1 } from './mockup-1'
import { mockUp2 } from './mockup-2'
import { mockUp3 } from './mockup-3'

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
