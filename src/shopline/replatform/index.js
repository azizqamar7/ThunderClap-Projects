/**
 * For Replatform page js
 */

console.log('Hello from Replatform folder')
import gsap from 'gsap'
import { sectionHero } from './section-hero'
import { sectionMigration } from './section-migration'
import { sectionTestimonial } from './section-testimonial'
import { sectionImpact } from './section-impact'
import { sectionRelocation } from './section-relocation'
import { sectionExperts } from './section-experts'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.page-wrapper', { opacity: 1 })

  // Section Hero
  sectionHero()

  // Section Migration
  sectionMigration()

  // Section Testimonial
  sectionTestimonial()

  // Section Impact
  sectionImpact()

  // Section Relocation
  sectionRelocation()

  // Section experts
  sectionExperts()
})
