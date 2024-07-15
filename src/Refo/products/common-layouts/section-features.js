import gsap from 'gsap'

export const sectionFeatures = () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[features]',
      start: 'top 65%',
    },
  })

  tl.from('[feature-block]', {
    opacity: 0,
    y: 20,
    stagger: { amount: 0.5 },
  })
}
