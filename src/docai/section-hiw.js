import gsap from 'gsap'

export const sectionHiw = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hiw-top',
      start: 'top 55%',
    },
  })

  tl.from('.hiw-tag', { opacity: 0, y: 30 })
    .from('.hiw-top h2', { opacity: 0, y: 30 }, '<35%')
    .from(
      '.hiw_card-item',
      { opacity: 0, y: 30, stagger: { amount: 0.3 } },
      '<35%'
    )
}
