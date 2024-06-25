console.log('Service page of Steel')

import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', (event) => {
  const sectionSercive = () => {
    const progressTl = gsap.timeline()
    progressTl.from('.service_progress-line', { scaleY: 0, ease: 'linear' })

    ScrollTrigger.create({
      trigger: '.section_services-content',
      start: 'top 50%',
      end: 'bottom 50%',
      markers: true,
      scrub: true,
      animation: progressTl,
    })

    // const serviceCards = document.querySelectorAll('.services-content_content')

    // serviceCards.forEach((card, index) => {
    //   ScrollTrigger.create({
    //     trigger: card,
    //     start: 'top 50%',
    //     markers: true,
    //     onEnter: () => {
    //       gsap.from(card, { opacity: 0.5 })
    //     },
    //     onLeaveBack: () => {
    //       gsap.to(card, { opacity: 0.5 })
    //     },
    //   })
    // })
  }

  sectionSercive()
})
