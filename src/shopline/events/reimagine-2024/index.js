/**
 * For Home page js
 */

console.log('Hello from Home folder')

import gsap from 'gsap'
import { sectionHero } from './section-hero'
import { buttonEventHover } from './button-event-hover'
import { sectionWhy } from './section-why'
import { sectionCta } from './section-cta'
import { sectionForm } from './section-form'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.page-wrapper', { opacity: 1 })

  if (window.innerWidth > 990) {
    buttonEventHover()
  }

  sectionHero()

  sectionWhy()

  sectionCta()

  sectionForm()
})
