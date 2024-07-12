import { gsap } from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionMigration = () => {
  const tl = gsap.timeline()

  tl.from('.replatform-migrate_wrapper .text-style-eyebrow-wrapper', defaults)
    .from('.replatform-migrate_wrapper h2', defaults, '<45%')
    .from('.replatform-migrate_lightbox-wrapper', defaults, '<45%')

  createScrollTrigger('.replatform-migrate_wrapper', tl)
}
