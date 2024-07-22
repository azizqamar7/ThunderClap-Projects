import gsap from 'gsap'

export const sectionIntegration = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.integration-wrapper',
      start: 'top 55%',
    },
  })

  tl.from('.integration-tag', { opacity: 0, y: 30 })
    .from('.integration-wrapper h2', { opacity: 0, y: 30 }, '<35%')
    .from('.integration-wrapper p', { opacity: 0, y: 30 }, '<35%')
}
