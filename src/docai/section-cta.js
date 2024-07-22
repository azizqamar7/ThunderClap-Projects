import gsap from 'gsap'

export const sectionCta = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_cta',
      start: 'top 55%',
    },
  })

  tl.from('.section_cta h2', { opacity: 0, y: 30 }).from(
    '.section_cta a',
    { opacity: 0, y: 30, stagger: 0.1 },
    '<35%'
  )
}
