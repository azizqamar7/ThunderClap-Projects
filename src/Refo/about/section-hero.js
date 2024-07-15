import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.navbar_component', {
    y: '-100%',
    duration: 0.7,
    ease: 'power2.out',
  })
    .from('.about-hero .text-size-tiny', defaults)
    .set('.navbar_component', { clearProps: 'all' })
    .from('.about-hero h1', defaults, '<15%')
    .from('.about-hero p', defaults, '<45%')
    .from('.about-hero .button-group', defaults, '<45%')
    .from('.about-svg', { opacity: 0 }, '<45%')

  // Get Paths
  const pathDownLines = document.querySelectorAll('.g-blue-line-down path')
  const pathUpLines = document.querySelectorAll('.g-blue-line-up path')

  const pathlineTl = gsap.timeline()
  pathDownLines.forEach((pathLine, index) => {
    const pathLineLength = pathLine.getTotalLength()
    const pathUpLineLength = pathUpLines[index].getTotalLength()

    pathlineTl
      .from(
        pathLine,
        {
          strokeDashoffset: -pathLineLength,
          duration: 1,
          force3D: true,
        },
        0
      )
      .from(
        pathUpLines[index],
        {
          strokeDashoffset: -pathUpLineLength,
          duration: 1,
          force3D: true,
        },
        0
      )
  })

  tl.add(pathlineTl).from(
    '.g-circle',
    { scale: 0, transformOrigin: '50% 50%' },
    '<85%'
  )
}
