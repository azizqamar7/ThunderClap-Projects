/**
 *  Home folder
 */

console.log('From holder')

import gsap from 'gsap'
import { sectionHero } from './section-hero'
import { sectionHiw } from './section-hiw'
import { sectionFeatures } from './section-features'
import { sectionIntegration } from './section-integration'
import { sectionCta } from './section-cta'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', { opacity: 1 })

  gsap.registerPlugin(ScrollTrigger)

  sectionHero()

  sectionHiw()

  sectionFeatures()

  sectionIntegration()

  sectionCta()
})
