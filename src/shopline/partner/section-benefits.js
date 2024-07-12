import { gsap } from 'gsap'
import { createScrollTrigger, defaults } from '../defaults/interactionParams'

export const sectionBenfits = () => {
  const tl = gsap.timeline()

  tl.from('.partner-benefits-n_content .text-style-eyebrow-wrapper', defaults)
    .from('.partner-benefits-n_content h2', defaults, '<45%')
    .from('.partner-benefits-n_content p', defaults, '<45%')
    .from('.partner-benefits-n_content a', defaults, '<45%')

  createScrollTrigger('.partner-benefits-n_content', tl)

  const imageTl = gsap.timeline()

  imageTl
    .from('.partner-benefits-n_img-wrapper', defaults)
    .from('.partner-benefits-n_img-line', defaults, '<15%')
    .from('.partner-benefits-n_img-ui', defaults, '<45%')

  createScrollTrigger('.partner-benefits-n_img-parent', imageTl)

  const pointerTl = gsap.timeline()

  pointerTl.from('.partner-benefits-n_list-item', {
    opacity: 0,
    y: 30,
    stagger: { amount: 0.6 },
    ease: 'power3.out',
  })

  createScrollTrigger('.partner-benefits-n_list', pointerTl)
}
