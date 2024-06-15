/**
 * For Webflow Maintanence page js
 */

console.log('Hello from Webflow Maintanence folder')

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Hero Section
  const sectionHero = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: 'power2.out', opacity: 0, y: 30 },
    })

    tl.from('.webflow-rank', {})
      .from('.agency_hero-wrapper h1', {}, '<45%')
      .from('.agency_hero-wrapper p', {}, '<45%')
      .from(
        '.agency_hero-wrapper .button.is-alternate, .agency_hero-wrapper .button.is-secondary',
        { stagger: { amount: 0.2 } },
        '<45%'
      )

    const heroTl = gsap.timeline()

    heroTl
      .from('.agency-hero_image-wrapper > img', {
        opacity: 0,
        duration: 1,
        y: 20,
      })
      .from(
        '.figma-logo-wrapper, .loom-logo, .notion-logo, .slack-logo, .webflow-comment, .code-embed',
        { scale: 0, ease: 'back.out', stagger: 0.2 },
        '<45%'
      )
  }

  sectionHero()

  // Hero Section

  // Section Management
  const sectionManagement = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_agency-management h2',
        start: 'top 70%',
      },
    })

    tl.from('.section_agency-management h2', {
      duration: 0.7,
      ease: 'power2.out',
      opacity: 0,
      y: 30,
    }).from('.agency_mangement-block', {
      duration: 0.7,
      ease: 'power2.out',
      opacity: 0,
      y: 30,
      stagger: 0.2,
    })
  }

  sectionManagement()
  // Section Management

  // Services Section
  const sectionServices = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_agency-services .container-large',
        start: 'top 70%',
      },
      defaults: { duration: 0.7, ease: 'power2.out', opacity: 0, y: 30 },
    })

    tl.from('.section_agency-services .agency-sub-title', {})
      .from('.section_agency-services h2', {}, '<45%')
      .from(
        '.service_tabs-menu, .service_tabs-content',
        { stagger: { amount: 0.2 } },
        '<45%'
      )
  }

  sectionServices()

  // Services Section

  // Section Why Us
  const sectionWhyUs = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_agency-whyus .container-large',
        start: 'top 70%',
      },
      defaults: { duration: 0.7, ease: 'power2.out', opacity: 0, y: 30 },
    })

    tl.from('.section_agency-whyus .agency-sub-title', {})
      .from('.section_agency-whyus h2', {}, '<45%')
      .from('.whyus-grid_item', { stagger: { amount: 0.2 } }, '<45%')

    const cardTl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-5',
        start: 'top 50%',
      },
    })

    cardTl5
      .from('.whyus-grid_item-image.is-5', {
        x: '20%',
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
      })
      .from(
        '.setting-svg, .chat-svg',
        {
          scale: 0,
          stagger: 0.2,
          ease: 'back.out',
        },
        '<45%'
      )
      .set('.cms-list-image', { overflow: 'clip' })
      .from('.cms-list-image img', { x: '100%', opacity: 0 }, '<45%')
      .from(
        '.designer-cursor-svg-5',
        { x: '100%', y: '100%', opacity: 0 },
        '<45%'
      )

    const cardTl6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-6',
        start: 'top 50%',
      },
    })

    cardTl6
      .from('.whyus-grid_item-image.is-6 img', { y: '100%' })
      .from('.ayush-pfp', { scale: 0, ease: 'back.out' }, '<75%')
      .from('.circle-1', { rotation: 360, repeat: -1, duration: 50 }, 0)
      .from('.circle-2', { rotation: -360, repeat: -1, duration: 50 }, 0)

    const cardTl7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-7',
        start: 'top 50%',
      },
    })

    cardTl7
      .from('.whyus-grid_item-image.is-7 img', {
        x: '20%',
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
      })
      .from(
        '.webflow-logo-svg, .zap-svg, .grow-svg',
        { scale: 0, ease: 'back.out' },
        '<75%'
      )

    const cardTl8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-8',
        start: 'top 45%',
      },
    })

    cardTl8
      .from('.whyus-grid_item-image.is-8 svg circle', {
        opacity: 0,
        stagger: 0.2,
      })
      .from(
        '.pfp-1, .pfp-2, .pfp-3, .pfp-4',
        { scale: 0, ease: 'back.out', stagger: 0.2 },
        '<45%'
      )

    const cardTl9 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-9',
        start: 'top 45%',
      },
    })

    cardTl9.from('.whyus-grid_item-image.is-9 img, .chat-icon', {
      scale: 0,
      stagger: 0.2,
      ease: 'back.out(1)',
    })

    const cardTl10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-10',
        start: 'top 50%',
      },
    })

    cardTl10
      .from('.whyus-grid_item-image.is-10', {
        x: '20%',
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
      })
      .from(
        '.webflow-svg, .webflow-retry',
        {
          scale: 0,
          stagger: 0.2,
          ease: 'back.out',
        },
        '<45%'
      )
      .from(
        '.designer-cursor-svg-10',
        { x: '100%', y: '-100%', opacity: 0 },
        '<45%'
      )
  }

  sectionWhyUs()
  // Section Why Us

  // Section Pricing
  const sectionPricing = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_agency-pricing .container-large',
        start: 'top 70%',
      },
      defaults: { duration: 0.7, ease: 'power2.out', opacity: 0, y: 30 },
    })

    tl.from('.section_agency-pricing .agency-sub-title', {})
      .from('.section_agency-pricing h2', {}, '<45%')
      .from('.pricing-block', { stagger: { amount: 0.5 } }, '<45%')
  }

  sectionPricing()
  // Section Pricing

  // Section Client
  const sectionClient = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_agency-client .container-large',
        start: 'top 70%',
      },
      defaults: { duration: 0.7, ease: 'power2.out', opacity: 0, y: 30 },
    })

    tl.from('.section_agency-client h2', {}, '<45%').from(
      '.grid_client-logos',
      {},
      '<45%'
    )
  }

  sectionClient()
  // Section Client

  // Section Our Work
  const sectionWork = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.work_top',
        start: 'top 70%',
      },
    })

    tl.from('.work_top h2', {
      duration: 0.7,
      ease: 'power2.out',
      opacity: 0,
      y: 30,
    })
      .from(
        '.work_top .work_line',
        {
          scaleX: 0,
          transformOrigin: '0% 50%',
          duration: 0.4,
        },
        '<45%'
      )
      .from('.work_top .work_circle', {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: 'back.out',
      })

    const workCards = document.querySelectorAll('[service-work-link]')

    workCards.forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
        },
      })

      tl.from(card, { duration: 0.7, ease: 'power2.out', opacity: 0, y: 30 })

      const cardImageWrapper = card.querySelector(
        '.work_image-wrapper.is-service'
      )
      const cardImage = card.querySelector('.work_image-wrapper.is-service img')

      const hoverTl = gsap.timeline({ paused: true })

      hoverTl
        .to(cardImageWrapper, { scale: 0.95 })
        .to(cardImage, { scale: 1.1 }, 0)

      card.addEventListener('mouseenter', () => {
        hoverTl.play()
      })
      card.addEventListener('mouseleave', () => {
        hoverTl.reverse()
      })
    })
  }

  sectionWork()
  // Section Our Work

  // Section Testimonial
  const sectionTestimonial = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_agency-testimonial h2',
        start: 'top 70%',
      },
    })

    tl.from('.section_agency-testimonial h2, .agency_testimony-wrapper', {
      duration: 0.7,
      ease: 'power2.out',
      opacity: 0,
      y: 30,
      stagger: 0.2,
    })
  }

  sectionTestimonial()
  // Section Testimonial

  // Section Comparison
  const sectionCompare = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_agency-compare h2',
        start: 'top 70%',
      },
    })

    tl.from('.section_agency-compare h2, .agency_compare-wrapper', {
      duration: 0.7,
      ease: 'power2.out',
      opacity: 0,
      y: 30,
      stagger: 0.2,
    })
  }

  sectionCompare()
  // Section Comparison
})
