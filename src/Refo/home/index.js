/**
 * This is the individual file for a webflow page.
 * For Home page js
 */

console.log('Hello from Home folder')

import { gsap } from 'gsap'
import { buttonHoverIx } from '../components/button-hover'
import { sectionHero } from './section-hero'
import { defaults } from '../defaults/interactionParams'
import { sectionProducts } from './section-products'
import { sectionCtaDemo } from './section-cta-demo'
import { sectionFeature } from './section-features'
import { sectionBenefits } from './section-benefits'
import { sectionCustomers } from './section-customers'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Button Hover Ix
  if (window.innerWidth > 990) {
    buttonHoverIx()
  }

  // Section hero
  sectionHero()

  // Section Features
  sectionFeature()

  // Section Products
  sectionProducts()

  // Section Integrations
  const sectionIntegrations = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_home-integrations',
        start: 'top 55%',
      },
    })

    tl.from('.section_home-integrations h2', defaults).from(
      '.section_home-integrations .home-intergation_card',
      defaults,
      '<45%'
    )
  }

  sectionIntegrations()

  // Section home CTA Demo
  sectionCtaDemo()

  // Section Benefits
  sectionBenefits()

  // Section Customers
  if (window.innerWidth < 990) {
    sectionCustomers()
  }
})
