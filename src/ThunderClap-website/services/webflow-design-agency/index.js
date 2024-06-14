/**
 * For Webflow Design page js
 */

console.log('Hello from Webflow Design folder')

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

    const heroImageTl = gsap.timeline()
    const dotSvgPath = document.querySelector('.dot-line')
    const dotSvgPathLength = dotSvgPath.getTotalLength()

    heroImageTl
      .from('.agency-hero_image-wrapper > img', {
        opacity: 0,
        duration: 1,
        y: 20,
      })
      .from(
        '.webflow-logo, .figma-logo',
        { scale: 0, ease: 'back.out(3)', stagger: { amount: 0.3 } },
        '<35%'
      )
      .from('.dot-arrow', { scale: 0 }, '<35%')
      .from('.color-swatch', { y: '40%', opacity: 0 }, '-=1')
      .from(dotSvgPath, { strokeDashoffset: -dotSvgPathLength }, '<35%')
      .from('.figma-dot svg', { scale: 0 }, '<35%')
      .from('.designer-cursor-svg', { x: '-50%', y: '-50%', opacity: 0 })
      .from('.developer-cursor', { x: '50%', y: '50%', opacity: 0 }, '<35%')
      .from('.designer-svg svg', { scale: 0 }, '<')
      .from(
        '.figma-comment-group .comment-svg',
        { scale: 0, transformOrigin: '50% 50%' },
        '<-100%'
      )
      .from(
        '.figma-comment-group g',
        { scaleX: 0, transformOrigin: '100% 0%' },
        '<50%'
      )
  }

  sectionHero()

  // Hero Section

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
      .from('.section_agency-whyus [sub-text]', {}, '<45%')
      .from('.whyus-grid_item', { stagger: { amount: 0.2 } }, '<45%')

    const cardTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-1',
        start: 'top 50%',
      },
    })

    cardTl1.from('.whyus-grid_item-image.is-1', {
      x: '20%',
      duration: 1,
      ease: 'power4.out',
      opacity: 0,
    })

    const cardTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-2',
        start: 'top 50%',
      },
    })

    cardTl2
      .from('.svg-data', {
        x: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
      })
      .from(
        '.svg-user-block, .svg-search',
        {
          y: '20%',
          opacity: 0,
          ease: 'power4.out',
          stagger: { amount: 0.2, from: 'end' },
        },
        '<45%'
      )

    const cardTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-3',
        start: 'top 50%',
      },
      defaults: { ease: 'back.out(1.7)' },
    })

    const pathWebflowToZap = document.querySelector('.path-webflow-to-zap')
    const pathWebflowToZapLength = pathWebflowToZap.getTotalLength()
    const pathWebflowToMarketo = document.querySelector(
      '.path-webflow-to-marketo'
    )
    const pathWebflowToMarketoLength = pathWebflowToMarketo.getTotalLength()
    const pathWebflowToJs = document.querySelector('.path-webflow-to-js')
    const pathWebflowToJsLength = pathWebflowToJs.getTotalLength()
    const pathWebflowToHubspot = document.querySelector(
      '.path-webflow-to-hubspot'
    )
    const pathWebflowToHubspotLength = pathWebflowToHubspot.getTotalLength()
    const pathWebflowToMs = document.querySelector('.path-webflow-to-ms')
    const pathWebflowToMsLength = pathWebflowToMs.getTotalLength()
    const pathWebflowToGa = document.querySelector('.path-webflow-to-ga')
    const pathWebflowToGaLength = pathWebflowToGa.getTotalLength()
    const pathWebflowToHotjar = document.querySelector(
      '.path-webflow-to-hotjar'
    )
    const pathWebflowToHotjarLength = pathWebflowToHotjar.getTotalLength()

    cardTl3
      .from('.svg-webflow', { scale: 0, transformOrigin: '50% 50%' })
      .from(
        '.svg-hubspot, .svg-zapier, .svg-marketo, .svg-js, .svg-ga, .svg-ms, .svg-hotjar',
        {
          scale: 0,
          transformOrigin: '50% 50%',
          stagger: { amount: 1, from: 'random' },
        },
        '<45%'
      )
      .from(pathWebflowToZap, {
        strokeDashoffset: -pathWebflowToZapLength,
        duration: 1,
      })
      .from(
        pathWebflowToGa,
        {
          strokeDashoffset: -pathWebflowToGaLength,
          duration: 1,
        },
        '<'
      )
      .from(
        pathWebflowToHotjar,
        {
          strokeDashoffset: -pathWebflowToHotjarLength,
          duration: 1,
        },
        '<'
      )
      .from(
        pathWebflowToHubspot,
        {
          strokeDashoffset: -pathWebflowToHubspotLength,
          duration: 1,
        },
        '<'
      )
      .from(
        pathWebflowToJs,
        {
          strokeDashoffset: -pathWebflowToJsLength,
          duration: 1,
        },
        '<'
      )
      .from(
        pathWebflowToMarketo,
        {
          strokeDashoffset: -pathWebflowToMarketoLength,
          duration: 1,
        },
        '<'
      )
      .from(
        pathWebflowToMs,
        {
          strokeDashoffset: -pathWebflowToMsLength,
          duration: 1,
        },
        '<'
      )

    const cardTl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.whyus-grid_item.is-4',
        start: 'top 50%',
      },
    })

    cardTl4
      .from('.whyus-grid_item-image.is-4', {
        x: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })
      .from('.text-setting-svg svg', { opacity: 0, y: '-30%', stagger: 0.2 })
      .from('.cms-cursor-svg', { opacity: 0, x: '60%', y: '60%' }, '<')
  }

  sectionWhyUs()
  // Section Why Us

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
