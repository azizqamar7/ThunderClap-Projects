import { gsap } from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionExperts = () => {
  const tl = gsap.timeline()

  const path = document.querySelector('.pathline-1 path')
  const pathLength = path.getTotalLength()
  let position = 0.2
  if (window.innerWidth < 480) {
    position = '<55%'
  }

  tl.from('.ebook-experts_img-wrapper', defaults)
    .from('.ebook-filter-experts_lt-wrapper', defaults, '<45%')
    .from(path, { strokeDashoffset: -pathLength, duration: 1 }, '<45%')
    .from('.ebook-filter-experts_icon-wrapper', { scale: 0 }, '<15%')
    .from('.ebook-filter-experts_rt-wrapper', defaults, '<45%')
    .from('.ebook-experts_grid h2', defaults, position)
    .from('.ebook-experts_grid p', defaults, '<45%')
    .from('.ebook-experts_grid a', defaults, '<45%')

  createScrollTrigger('.ebook-experts_grid', tl)
}
