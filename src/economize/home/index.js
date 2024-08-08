/**
 * For Home page js
 */

console.log('Hello from Home folder')

import gsap from 'gsap'
import { sectionHero } from './section-hero'
import { sectionOptimze } from './section-optimize'
import { sectionPayG } from './section-payg'
import { sectionSignals } from './section-signals'
import { sectionTabs } from './section-tabs'
import { sectionCustomer } from './section-customer'
import { sectionIntegration } from './section-integration'
import { sectionGrid2 } from './section-grid-2'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.page-wrapper', { opacity: 1 })

  // Section Hero
  sectionHero()

  // Section Optimize
  sectionOptimze()

  // Section PayG
  sectionPayG()

  // Section Grid2
  sectionGrid2()

  // Section Signals
  sectionSignals()

  // Section Tabs
  sectionTabs()

  // Section Customer
  sectionCustomer()

  // Section Integration
  sectionIntegration()
})
