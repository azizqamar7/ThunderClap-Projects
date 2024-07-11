import gsap from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionSolutions = () => {
  const tl = gsap.timeline()

  tl.from(
    '.pricing-solution_content-wrapper .text-style-eyebrow-wrapper',
    defaults
  )
    .from('.pricing-solution_content-wrapper h2', defaults, '<15%')
    .from('.pricing-solution_content-wrapper p', defaults, '<45%')
    .from('.pricing-solution_content-wrapper a', defaults, '<45%')

  createScrollTrigger('.pricing-solution_content-wrapper', tl)

  const imageTl = gsap.timeline()

  imageTl
    .from('.pricing-solution_img-wrapper', defaults)
    .from('.pricing-solution_img-line', defaults, '<15%')
    .from('.pricing-solution_img-ui', defaults, '<45%')
    .from('.pricing-solution_img-grid', defaults, '<45%')

  createScrollTrigger('.pricing-solution_img-parent', imageTl, 'top 65%')
}
