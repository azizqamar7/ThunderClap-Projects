import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionHomeHero = () => {
  const tl = gsap.timeline()

  tl.from('.home-hero_content .text-style-eyebrow-wrapper', defaults)
    .from('.home-hero_content h1', defaults, '<25%')
    .from('.home-hero_content p', defaults, '<25%')
    .from('.home-hero_content a', defaults, '<25%')
    .from('.home-hero-main', defaults, '<45%')

  const fadeoutTl = gsap.timeline({
    paused: true,
    defaults: {
      opacity: 0,
      y: -20,
      ease: 'power1.in',
    },
    scrollTrigger: {
      trigger: '.home-hero_content',
      start: 'top 0px',
      toggleActions: 'play none none reverse',
    },
  })
  fadeoutTl
    .to('.home-hero_content .text-style-eyebrow-wrapper', {})
    .to('.home-hero_content h1', {}, '<15%')
    .to('.home-hero_content p', {}, '<15%')
    .to('.home-hero_content a', {}, '<15%')

  const contentTl = gsap.timeline({
    defaults: { opacity: 0, y: -20 },
    paused: true,
  })
  contentTl
    .from('.home-hero-main_content .text-style-eyebrow-wrapper', {})
    .from('.home-hero-main_content h2', {}, '<15%')
    .from('.home-hero-main_content p', {}, '<15%')
    .from('.home-hero-main_content a', {}, '<15%')

  const mainContentTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-hero-main',
      start: 'top 20%',
      end: '1200px',
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        if (self.progress > 0.35) {
          contentTl.play()
        } else {
          contentTl.reverse()
        }
      },
    },
  })

  mainContentTl.to('.home-hero_mockup', {
    x: 460,
    scale: 0.8,
    y: '-10%',
  })

  //   const sourceElement = document.querySelector('.home-hero_mockup')
  //   const targetParent = document.querySelector('.home-hero-main_mockup')
  //   const state = Flip.getState(sourceElement)

  //   targetParent.appendChild(sourceElement)
  // Set the element to position: static
  //   sourceElement.style.position = 'relative'

  // Perform the Flip animation
  //   Flip.from(state, {
  //     duration: 1,
  //     ease: 'power2.Out',
  //     scrollTrigger: {
  //       trigger: '.section_home-hero',
  //       start: 'top 0px',
  //       end: '1300px',
  //       scrub: true,
  //       pin: true,
  //       markers: true,
  //       onUpdate: (self) => {
  //         console.log(self.progress * 100)
  //         if (self.progress > 0.01) {
  //           console.log('True')
  //           fadeoutTl.play()
  //         } else {
  //           fadeoutTl.reverse()
  //         }
  //         if (self.progress > 0.6) {
  //           mainContentTl.play()
  //         } else {
  //           mainContentTl.reverse()
  //         }
  //       },
  //     },
  //   })
}
