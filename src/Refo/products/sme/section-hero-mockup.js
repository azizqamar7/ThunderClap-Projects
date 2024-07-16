import { gsap } from 'gsap'

export const sectionHeroMockUp = () => {
  const tl = gsap.timeline()
  const pathlines1 = document.querySelectorAll('.g-sme-path-1 path')
  const pathlines2 = document.querySelectorAll('.g-sme-path-2 path')
  const pathlines3 = document.querySelectorAll('.g-sme-path-3 path')
  const pathlines4 = document.querySelectorAll('.g-sme-path-4 path')
  const pathlineTl = gsap.timeline()

  pathlines1.forEach((pathLine, index) => {
    const pathlineLength = pathLine.getTotalLength()
    const pathlineLength2 = pathlines2[index].getTotalLength()
    const pathlineLength3 = pathlines3[index].getTotalLength()
    const pathlineLength4 = pathlines4[index].getTotalLength()

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
        pathlines2[index],
        {
          strokeDashoffset: -pathlineLength2,
          duration: 0.5,
        },
        0
      )
      .from(
        pathlines3[index],
        {
          strokeDashoffset: -pathlineLength3,
          duration: 0.5,
        },
        0
      )
      .from(
        pathlines4[index],
        {
          strokeDashoffset: -pathlineLength4,
          duration: 0.5,
        },
        0
      )
  })

  tl.to({}, { duration: 0.5 })
  tl.from('.g-store', { y: 20, opacity: 0 })
    .add(pathlineTl)
    .from(
      '.g-auto, .g-analytics, .g-integrate, .g-kyc-2',
      { opacity: 0 },
      '<65%'
    )
}
