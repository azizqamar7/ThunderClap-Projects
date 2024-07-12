/**
 * For Partner page js
 */

console.log('Hello from Partner folder')
import gsap from 'gsap'
import { sectionHero } from './section-hero'
import { sectionWhy } from './section-why'
import { sectionScreenpages } from './section-screenpage'
import { sectionBenfits } from './section-benefits'
import { sectionCta } from './section-cta'
import { sectionTestimonials } from './section-testimonials'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.page-wrapper', { opacity: 1 })

  // Section Hero
  sectionHero()

  // Section Why
  sectionWhy()

  // Section Screen pages
  sectionScreenpages()

  // Section Partner Benefits
  sectionBenfits()

  // Section Testimonials
  sectionTestimonials()

  // Section Cta
  sectionCta()
})
