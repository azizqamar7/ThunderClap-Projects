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

  // Split Type
  let typeSplit

  function runSplitType() {
    typeSplit = new SplitType('[text-split]', {
      types: 'lines, words, chars',
      tagName: 'span',
    })
  }

  runSplitType()

  //Run the code when window width changes
  let windowWidth = window.innerWidth
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth
      typeSplit.revert()
      runSplitType()
    }
  })

  gsap.set('.page-wrapper', { opacity: 1 })

  if (window.innerWidth > 990) {
    buttonEventHover()
  }

  sectionHero()

  sectionWhy()

  sectionCta()

  sectionForm()
})
