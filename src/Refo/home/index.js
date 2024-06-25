/**
 * This is the individual file for a webflow page.
 * For Home page js
 */

console.log('Hello from Home folder')

import { gsap } from 'gsap'
import { buttonHoverIx } from '../components/button-hover'
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

  // Animation Defaults
  let defaults = {
    opacity: 0,
    y: 30,
    ease: 'power2.out',
  }

  // Section hero
  const sectionHero = () => {
    const tl = gsap.timeline()

    tl.from('.navbar_component', {
      y: '-100%',
      duration: 0.7,
      ease: 'power2.out',
    })
      .from('.home-hero .text-size-tiny', defaults)
      .from('.home-hero h1', defaults, '<45%')
      .from('.home-hero p', defaults, '<45%')
      .from('.home-hero .button-group', defaults, '<45%')
      .from('.home-hero_image img', defaults, '<45%')
      .from('.hero-left_gradient-svg', { opacity: 0 }, '<45%')
      .from('.hero-right_gradient-svg', { opacity: 0 }, '<')
  }

  sectionHero()

  // Section Features
  const sectionFeature = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-features h2',
        start: 'top 90%',
      },
    })

    tl.from('.home-features h2', defaults)
  }
  sectionFeature()

  // Section Products
  const sectionProducts = () => {
    ScrollTrigger.create({
      trigger: '.section_home-products',
      start: 'top 0%',
      // markers: true,
      onToggle: (self) => {
        // Hide Navbar in this section
        if (self.isActive) {
          gsap.to('.navbar_component', {
            y: '-110%',
            duration: 1,
            ease: 'power3.out',
            overwrite: true,
          })
        } else {
          gsap.to('.navbar_component', {
            y: '0%',
            duration: 0.5,
            ease: 'power3.out',
            clearProps: 'transform',
            overwrite: true,
          })
        }
      },
    })

    // Animate Headline
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-products',
        start: 'top 65%',
      },
    })

    tl2
      .from('.home-products h2', defaults)
      .from('[home-product-para]', defaults, '<45%')

    // Get all product blocks
    const productBlocks = document.querySelectorAll('.home-products_block')
    const productNavLinks = document.querySelectorAll('.home-products_nav-link')

    productBlocks.forEach((block, index) => {
      ScrollTrigger.create({
        trigger: block,
        start: 'top 10%',
        onEnter: () => {
          gsap.to(productNavLinks[index], { color: '#00071e' })
        },
        onLeaveBack: () => {
          gsap.to(productNavLinks[index], { color: '#b6bbd8' })
        },
      })

      // Animate Individual blocks
      // Get All H3, Para, Pointers and image
      const blockTitle = block.querySelector('h3')
      const blockPara = block.querySelector('p')
      const blockPointers = block.querySelectorAll('.check-pointer')
      const blockCTA = block.querySelectorAll('a')
      const blockImage = block.querySelectorAll('.home-products_block-image')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: 'top 45%',
        },
      })

      tl.from(blockTitle, defaults)
        .from(blockPara, defaults, '<45%')
        .from(
          [blockPointers, blockCTA],
          {
            opacity: 0,
            x: '15%',
            stagger: { amount: 0.4 },
            ease: 'power3.out',
            duration: 1,
          },
          '<45%'
        )
        .from(blockImage, defaults, 0)
    })
  }

  // Run only Desktop and Tablet
  if (window.innerWidth > 767) {
    sectionProducts()
  }
  // Section Products

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
  const sectionCtaDemo = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_home-cta-demo',
        start: 'top 65%',
      },
    })

    tl.from('.section_home-cta-demo h2', defaults)
      .from('.section_home-cta-demo p', defaults, '<45%')
      .from('.section_home-cta-demo .button-group', defaults, '<45%')
  }

  sectionCtaDemo()
})
