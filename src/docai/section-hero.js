import gsap from 'gsap'

export const sectionHero = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  })

  tl.from('.nav-line', { scale: 0, duration: 1.2 })
    .from('.nav-logo svg', { y: '110%', duration: 0.8 }, '<45%')
    .from('.nav-text_rel', { y: '110%', duration: 1 }, '<')
    .from('.button-menu-group', { y: '-150%', ease: 'back.out' }, '<')
    // Navbar IX ends
    .from('.home_hero-tag', { y: '30%', opacity: 0 }, '<')
    .from('.title-large', { y: 30, opacity: 0 }, '<35%')
    .from('.home_hero-content p', { y: 30, opacity: 0 }, '<35%')
    .from('.dynamic-navbar', { y: 30, opacity: 0 }, '<35%')
    .from('.home_hero-content .display-mobile', { y: 30, opacity: 0 }, '<')
    .from(
      '.hero-icon',
      { scale: 0.5, opacity: 0, stagger: { amount: 0.4, from: 'random' } },
      '<35%'
    )
    .from('.home_hero-demo_wrapper', { y: 30, opacity: 0 }, '<35%')

  const desktopTabletIx = () => {
    const dynamicNavTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.dynamic-navbar',
        start: 'top 10%',
        toggleActions: 'restart none none reverse',
      },
    })

    dynamicNavTl.to('.dynamic-navlinks', { marginRight: -80, opacity: 1 }).to(
      '.dynamic-button',
      {
        scale: 0.7,
        marginRight: '0.3rem',
        marginBottom: '-5px',
        marginTop: '-5px',
      },
      '<'
    )
    // .to('.dynamic-navbar', { scale: 0.95 }, '<')

    const imageForwardTl = gsap.timeline({
      defaults: {
        ease: 'power1.out',
      },
    })

    imageForwardTl
      .fromTo('.home_hero-demo_image.is-left', { x: '50%' }, { x: '0%' })
      .fromTo(
        '.home_hero-demo_image.is-right',
        { x: '-50%', left: '-1rem' },
        { x: '0%', left: '0rem' },
        '<'
      )

    const imageBackwardTl = gsap.timeline({
      defaults: {
        ease: 'power1.out',
      },
    })

    imageBackwardTl
      .fromTo('.home_hero-demo_image.is-left', { x: '0%' }, { x: '50%' })
      .fromTo(
        '.home_hero-demo_image.is-right',
        { x: '0%', left: '0rem' },
        { x: '-50%', left: '-1rem' },
        '<'
      )

    ScrollTrigger.create({
      trigger: '.dynamic-navbar',
      start: 'top 10%',
      onEnter: () => {
        imageForwardTl.restart()
      },
      onLeaveBack: () => {
        imageBackwardTl.restart()
      },
    })
  }

  if (window.innerWidth > 767) {
    desktopTabletIx()
  }
}
