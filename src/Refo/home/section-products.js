import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionProducts = () => {
  gsap.registerPlugin(ScrollTrigger)

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
      /*onEnter: () => {
        gsap.to(productNavLinks[index], { color: '#00071e' })
      },
      onLeaveBack: () => {
        gsap.to(productNavLinks[index], { color: '#b6bbd8' })
      },*/
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
        blockPointers,
        {
          opacity: 0,
          x: '15%',
          stagger: { amount: 0.4 },
          ease: 'power3.out',
          duration: 1,
        },
        '<45%'
      )
      .from(
        blockCTA,
        {
          opacity: 0,
          x: '15%',
          ease: 'power3.out',
          duration: 1,
        },
        '<55%'
      )
    //   .from(blockImage, defaults, 0)

    tl.timeScale(1.25)
  })

  /**
   * Animate Individual Mockup
   */

  // MockUp 1
  const mockUp1Ix = () => {
    const pathLine = document.querySelector('.path-line-1')
    const pathLineLength = pathLine.getTotalLength()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[home-block-1] .home-products_block-image',
        start: 'top 65%',
      },
      onComplete: () => {
        tlLoop.play()
        console.log('Play')
      },
    })

    const tlLoop = gsap.timeline({ paused: true, repeat: -1 })
    const greenPrimaryColor = '#67E6A7'
    const greenSecondaryColor = '#0B816D'
    const bluePrimaryColor = '#1A84F7'
    const blueSecondaryColor = '#011665'

    tlLoop
      .to('.circle-color-primary', { attr: { fill: greenPrimaryColor } })
      .to(
        '.circle-color-secondary',
        { attr: { fill: greenSecondaryColor } },
        '<'
      )
      .to('.path-form-title', { attr: { fill: greenSecondaryColor } }, '<')
      .to('.rect-form-progress', { attr: { fill: greenPrimaryColor } }, '<')
      .to('.rect-form-button', { attr: { fill: greenPrimaryColor } }, '<')
      .to('.g-next-logo', { opacity: 1 }, '<')
      .to({}, { duration: 1 })
      .to('.circle-color-primary', { attr: { fill: bluePrimaryColor } })
      .to(
        '.circle-color-secondary',
        { attr: { fill: blueSecondaryColor } },
        '<'
      )
      .to('.path-form-title', { attr: { fill: bluePrimaryColor } }, '<')
      .to('.rect-form-progress', { attr: { fill: bluePrimaryColor } }, '<')
      .to('.rect-form-button', { attr: { fill: bluePrimaryColor } }, '<')
      .to('.g-next-logo', { opacity: 0 }, '<')
      .to({}, { duration: 1 })

    const pathLines = document.querySelectorAll('.g-line')

    const pathLineTl = gsap.timeline()
    pathLines.forEach((pathLine) => {
      const pathLineLength = pathLine.getTotalLength()

      pathLineTl.from(
        pathLine,
        {
          strokeDashoffset: -pathLineLength,
          duration: 0.4,
        },
        0
      )
    })

    tl.from('.rect-bg', defaults)
    tl.from('.g-signup-wrapper', defaults, '<45%')
    tl.from(
      '.g-signup, .g-kyc, .g-sign',
      { y: '-20%', opacity: 0, stagger: { amount: 0.3 } },
      '<45%'
    )
    tl.from(pathLine, { strokeDashoffset: -pathLineLength, duration: 2 }, '<5%')
    tl.add(pathLineTl, '<45%')
      .from('.g-form', defaults, '<45%')
      .from('.g-color-palletes', defaults, '<45%')

    tl.timeScale(1.2)
  }

  mockUp1Ix()

  // MockUp 2
  const mockUp2Ix = () => {
    const pathLine = document.querySelector('.path-line-2')
    const pathLineLength = pathLine.getTotalLength()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[home-block-2] .home-products_block-image',
        start: 'top 65%',
      },
    })

    const pathLines1 = document.querySelectorAll('.g-line-2-1')
    const pathLines2 = document.querySelectorAll('.g-line-2-2')

    const pathLine1Tl = gsap.timeline()
    pathLines1.forEach((pathLine) => {
      const pathLineLength = pathLine.getTotalLength()

      pathLine1Tl.from(
        pathLine,
        {
          strokeDashoffset: -pathLineLength,
          duration: 0.4,
        },
        0
      )
    })

    const pathLine2Tl = gsap.timeline()
    pathLines2.forEach((pathLine) => {
      const pathLineLength = pathLine.getTotalLength()

      pathLine2Tl.from(
        pathLine,
        {
          strokeDashoffset: -pathLineLength,
          duration: 0.4,
        },
        0
      )
    })

    tl.from('.rect-bg-2', defaults)
    tl.from('.g-signup-flow', defaults, '<45%')
    tl.from(
      pathLine,
      { strokeDashoffset: -pathLineLength, duration: 0.3 },
      '<5%'
    )
    tl.add(pathLine1Tl, '<45%')
    tl.from(
      '.g-block-col-1',
      { y: '-20%', opacity: 0, stagger: { amount: 0.3 } },
      '<15%'
    )
    tl.add(pathLine2Tl, '<45%')
    tl.from(
      '.g-block-col-2',
      { y: '-20%', opacity: 0, stagger: { amount: 0.3 } },
      '<15%'
    )
  }

  mockUp2Ix()

  // MockUp 3
  const mockUp3Ix = () => {
    const pathLine = document.querySelector('.path-line-3')
    const pathLineLength = pathLine.getTotalLength()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[home-block-3] .home-products_block-image',
        start: 'top 65%',
      },
    })
    const pathLines = document.querySelectorAll('.g-line-3')

    const pathLineTl = gsap.timeline()
    pathLines.forEach((pathLine) => {
      const pathLineLength = pathLine.getTotalLength()

      pathLineTl.from(
        pathLine,
        {
          strokeDashoffset: -pathLineLength,
          duration: 0.4,
        },
        0
      )
    })

    tl.from('.rect-bg-3', defaults)
    tl.from('.g-process-data', defaults, '<45%')
    tl.from(pathLine, { strokeDashoffset: -pathLineLength, duration: 2 }, '<5%')
    tl.add(pathLineTl, '<45%').from('.g-trigger', defaults, '<45%')

    tl.timeScale(1.2)
  }

  mockUp3Ix()

  // MockUp 4
  const mockUp4Ix = () => {
    const pathLine = document.querySelector('.path-line-4')
    const pathLineLength = pathLine.getTotalLength()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[home-block-4] .home-products_block-image',
        start: 'top 65%',
      },
    })

    tl.from('.rect-bg-4', defaults)
      .from(
        '.g-credit, .g-up',
        { stagger: { amount: 0.2 }, opacity: 0, y: 30 },
        '<45%'
      )
      .from('.g-report', { opacity: 0, y: -20 }, '<45%')
      .from(pathLine, { strokeDashoffset: -pathLineLength, duration: 1 }, '<5%')
      .from('.g-transaction', defaults, '<45%')
      .from('.g-limit', defaults, '<45%')
      .from(
        '.g-icon',
        {
          scale: 0.5,
          opacity: 0,
          ease: 'back.out(3)',
          transformOrigin: '50% 50%',
        },
        '<45%'
      )

    // tl.timeScale(1.2)
  }

  mockUp4Ix()

  /**
   * Animate Individual Mockup
   */
}
