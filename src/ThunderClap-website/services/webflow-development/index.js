/**
 * For Webflow Development page js
 */

console.log('Hello from Webflow Development folder')

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
      .from('.tabs-menu, .tabs-content', { stagger: { amount: 0.2 } }, '<45%')
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
      .from('.section_agency-whyus p', {}, '<45%')
      .from('.whyus-grid_item', { stagger: { amount: 0.2 } }, '<45%')

    const cardTl11 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-11',
        start: 'top 50%',
      },
    })

    cardTl11
      .from('.whyus-grid_item-image.is-11', {
        x: '20%',
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
      })
      .set('.build-list-image', { overflow: 'clip' })
      .from('.build-list-image img', { x: '100%', opacity: 0 }, '<45%')
      .from(
        '.project-number, .code-svg',
        {
          scale: 0,
          stagger: 0.2,
          ease: 'back.out',
        },
        '<45%'
      )

    const cardTl12 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-12',
        start: 'top 45%',
      },
    })

    cardTl12
      .from('.whyus-grid_item-image.is-8 svg circle', {
        opacity: 0,
        stagger: 0.2,
      })
      .from(
        '.pfp-1, .pfp-2, .pfp-3, .pfp-4',
        { scale: 0, ease: 'back.out', stagger: 0.2 },
        '<45%'
      )

    const cardTl13 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-13',
        start: 'top 50%',
      },
    })

    cardTl13
      .from('.whyus-grid_item-image.is-13', {
        x: '20%',
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
      })
      .from(
        '.svg-grow',
        { scale: 0, ease: 'back.out', transformOrigin: '50% 50%' },
        '<55%'
      )

    const cardTl14 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-14',
        start: 'top 50%',
      },
    })

    const pathlineGray = document.querySelector('.path-line-grey')
    const pathlineGrayLength = pathlineGray.getTotalLength()
    const pathlineUp = document.querySelector('.path-line-up')
    const pathlineUpLength = pathlineUp.getTotalLength()

    cardTl14
      .from('.whyus-grid_item-image.is-14', {
        x: '20%',
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
      })
      .from(pathlineGray, { strokeDashoffset: -pathlineGrayLength }, '<45%')
      .from(
        pathlineUp,
        { strokeDashoffset: -pathlineUpLength, duration: 0.8 },
        '<45%'
      )
      .from(
        '.g-circle',
        { scale: 0, ease: 'back.out', transformOrigin: '50% 50%' },
        '<75%'
      )

    const cardTl15 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-15',
        start: 'top 45%',
      },
    })

    const pathLines = document.querySelectorAll('.path-line-4')
    const pathLineTl = gsap.timeline()
    pathLines.forEach((pathLine) => {
      const pathLineLength = pathLine.getTotalLength()

      pathLineTl.from(pathLine, { strokeDashoffset: -pathLineLength }, 0)
    })

    cardTl15
      .from('.g-hubspot, .g-zap, .g-webflow, .g-hotjar, .g-clarity', {
        scale: 0,
        stagger: 0.2,
        ease: 'back.out(1)',
        transformOrigin: '50% 50%',
      })
      .add(pathLineTl)

    const cardTl16 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-16',
        start: 'top 50%',
      },
    })

    cardTl16
      .from('.whyus-grid_item-image.is-16', {
        y: '20%',
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
      })
      .from(
        '.g-code, .g-settings, .g-tool',
        {
          scale: 0,
          stagger: { from: 'start', amount: 0.3 },
          ease: 'back.out',
          transformOrigin: '50% 50%',
        },
        '<45%'
      )
      .from('.svg-cursor', { x: '500%', y: '-100%', opacity: 0 }, '<45%')
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
