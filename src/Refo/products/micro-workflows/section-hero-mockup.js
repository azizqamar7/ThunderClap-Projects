import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const sectionHeroMockUp = () => {
  const tl = gsap.timeline()
  const pathlines1 = document.querySelectorAll('.g-path-process path')
  const pathlineTl = gsap.timeline()

  pathlines1.forEach((pathLine) => {
    const pathlineLength = pathLine.getTotalLength()

    pathlineTl.from(
      pathLine,
      {
        strokeDashoffset: -pathlineLength,
        duration: 0.5,
      },
      0
    )
  })

  tl.to({}, { duration: 0.5 })
  tl.from('.g-fetch-data', defaults)
    .from('.g-run-2', { y: -10, opacity: 0 }, '<45%')
    .add(pathlineTl, '<45%')
    .from('.g-item-1', { opacity: 0 }, '<45%')
    .from('.path-1', { scaleY: 0, duration: 0.2 }, '<85%')
    .from('.circle-1', { scale: 0, transformOrigin: '50% 50%', duration: 0.2 })
    .from('.g-item-2', { opacity: 0 }, '<45%')
    .from('.path-2', { scaleY: 0, duration: 0.2 }, '<85%')
    .from('.circle-2', { scale: 0, transformOrigin: '50% 50%', duration: 0.2 })
    .from('.g-item-3', { opacity: 0 }, '<45%')
}
