/**
 * This is the individual file for a webflow page.
 * For About page js
 */

console.log('Hello from About folder')

import gsap from 'gsap'
import { sectionHero } from './section-hero'
import { sectionVision } from './section-vision'
import { sectionTeam } from './section-team'
import { sectionBenefits } from '../components/section-benefits'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Section Hero
  sectionHero()

  // Section Vision
  sectionVision()

  // Section Team
  sectionTeam()

  // Section Benefits
  sectionBenefits()
})
