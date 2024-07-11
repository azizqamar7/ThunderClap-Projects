import gsap from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionGetStarted = () => {
  const tl = gsap.timeline()

  tl.from('.pricing-get-started_right .text-style-eyebrow-wrapper', defaults)
    .from('.pricing-get-started_right h2', defaults, '<15%')
    .from('.pricing-get-started_right p', defaults, '<45%')
    .from(
      '.pricing-get-started_point',
      {
        opacity: 0,
        y: 30,
        ease: 'power3.out',
        duration: 0.7,
        stagger: { amount: 0.2 },
      },
      '<15%'
    )
    .from('.pricing-get-started_right a', defaults, '<45%')

  createScrollTrigger('.pricing-get-started_right', tl)

  const imageTl = gsap.timeline()
  const pathline = document.querySelector('.pricing-get-started_img-line path')
  const pathlineLength = pathline.getTotalLength()

  imageTl
    .from('.pricing-get-started_img-wrapper', defaults)
    .from('.pricing-get-started_img-ui', defaults, '<45%')
    .from(
      pathline,
      {
        strokeDashoffset: -pathlineLength,
        duration: 0.8,
      },
      '<45%'
    )
    .from(
      '.pricing-get-started_img-icon',
      {
        opacity: 0,
        scale: 0.7,
        ease: 'back.out',
      },
      '<5%'
    )
    .from('.pricing-get-started_img-switch', defaults, '<45%')

  createScrollTrigger('.pricing-get-started_img-parent', imageTl, 'top 65%')
}
