import { gsap } from 'gsap'
import { createScrollTrigger, defaults } from '../defaults/interactionParams'

export const sectionScreenpages = () => {
  const tl = gsap.timeline()

  tl.from('.partner-screenpage_wrapper h2', defaults)
    .from('.partner-screenpage_lightbox-img-wrapper', defaults, '<45%')
    .from('.partner-screenpage_bg-line', defaults, '<45%')
    .from('.partner-screenpage_grid.is-top', defaults, '<45%')
    .from('.partner-screenpage_grid.is-bottom', defaults, '<45%')

  createScrollTrigger('.partner-screenpage_wrapper', tl)
}
