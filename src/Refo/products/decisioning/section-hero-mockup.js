import { gsap } from 'gsap'

export const sectionHeroMockUp = () => {
  const tl = gsap.timeline()
  const pathlinesRight = document.querySelectorAll('.g-path-right path')
  const pathlinesLeft = document.querySelectorAll('.g-path-left path')
  const pathlineTl = gsap.timeline()

  pathlinesRight.forEach((pathLine, index) => {
    const pathlineLength = pathLine.getTotalLength()
    const pathlineLengthLeft = pathlinesLeft[index].getTotalLength()

    pathlineTl
      .from(
        pathLine,
        {
          strokeDashoffset: -pathlineLength,
          duration: 0.5,
        },
        0
      )
      .from(
        pathlinesLeft[index],
        {
          strokeDashoffset: -pathlineLengthLeft,
          duration: 0.5,
        },
        0
      )
  })

  tl.to({}, { duration: 0.5 })
  tl.from('.g-top-block', { y: -20, opacity: 0 })
    .from(
      '.g-line-flow-down',
      {
        scaleY: 0,
        transformOrigin: '50% 0%',
      },
      '<55%'
    )
    .from('.g-engine', { opacity: 0 }, '<45%')
    .add(pathlineTl)
    .from('.g-step, .g-manual', { opacity: 0, y: -10 }, '<65%')
}
