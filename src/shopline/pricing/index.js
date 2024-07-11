/**
 * This is the individual file for a webflow page.
 * For Pricing page js
 */

console.log('Hello from Pricing folder')

import { gsap } from 'gsap'
import { sectionHero } from './section-hero'
import { sectionFeatures } from './section-features'
import { sectionSolutions } from './section-solution'
import { sectionWhy } from './section-why'
import { sectionGetStarted } from './section-get-started'
import { sectionTestimonial } from './section-testiomonials'
import { sectionGrowth } from './section-growth'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.page-wrapper', { opacity: 1 })

  // Section Hero
  sectionHero()

  // Section Features
  sectionFeatures()

  // Section Solutions
  sectionSolutions()

  // Section Why Shopline
  sectionWhy()

  // Section Get Started
  sectionGetStarted()

  // Section Testimonial
  sectionTestimonial()

  // Section Growth
  sectionGrowth()
})
