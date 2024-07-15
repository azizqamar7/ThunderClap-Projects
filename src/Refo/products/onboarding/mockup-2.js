import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const mockUp2 = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg.is-api-service',
      start: 'top 65%',
    },
  })

  const pathlines = document.querySelectorAll('.g-line-onboard-2 path')
  const pathlineTl = gsap.timeline()

  pathlines.forEach((pathLine) => {
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

  tl.from('.g-api-service', defaults)
    .add(pathlineTl)
    .from('.g-crud', defaults, '<65%')
    .from(
      '.g-run',
      { scale: 0.8, opacity: 0, transformOrigin: '50% 50%', duration: 0.3 },
      '<45%'
    )
}
