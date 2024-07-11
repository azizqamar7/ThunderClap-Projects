import gsap from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionGrowth = () => {
  const tl = gsap.timeline()

  tl.from('.pricing-growth_left h2', defaults, '<15%')
    .from('.pricing-growth_left p', defaults, '<45%')
    .from('.pricing-growth_left a', defaults, '<45%')

  createScrollTrigger('.pricing-growth_left', tl)

  // Animatie Image
  const imageTl = gsap.timeline()

  const pathlines = document.querySelectorAll('.pricing-growth_img-line path')

  const pathlineTl = gsap.timeline()

  pathlines.forEach((pathline) => {
    const pathlineLength = pathline.getTotalLength()

    pathlineTl.from(
      pathline,
      {
        strokeDashoffset: -pathlineLength,
        duration: 0.8,
      },
      0
    )
  })

  imageTl
    .from('.pricing-growth_right', defaults)
    .add(pathlineTl, '<45%')
    .from('.pricing-growth_img-ui', defaults, '<45%')
    .from('.pricing-growth_img-circle.is-bottom', defaults, '<45%')
    .from('.pricing-growth_img-circle.is-top', defaults, '<45%')
    .from(
      '.pricing-growth_img-line circle',
      {
        scale: 0,
        ease: 'back.out',
        transformOrigin: '50% 50%',
      },
      '<5%'
    )
    .from('.pricing-growth_img-chip', defaults, '<45%')
    .from(
      '.pricing-growth_img-icon',
      {
        opacity: 0,
        scale: 0.7,
        ease: 'back.out',
        stagger: { amount: 0.2 },
      },
      '<5%'
    )

  createScrollTrigger('.pricing-growth_right', imageTl, 'top 65%')
}
