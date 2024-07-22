import gsap from 'gsap'

export const sectionFeatures = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.feature-wrapper',
      start: 'top 55%',
    },
  })

  tl.from('.feature-tag', { opacity: 0, y: 30 }).from(
    '.feature-wrapper h2',
    { opacity: 0, y: 30 },
    '<35%'
  )

  const card1Ix = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.feature_card-item.is-1',
        start: 'top 65%',
      },
    })

    tl.from('.feature_card-item.is-1', { opacity: 0, y: 30 })
  }

  card1Ix()

  const card2Ix = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.feature_card-item.is-2',
        start: 'top 65%',
      },
    })

    tl.from('.feature_card-item.is-2', { opacity: 0, y: 30 }).from(
      '.featrue_card-image',
      { opacity: 0, x: '10%' },
      '<35%'
    )
  }

  card2Ix()

  const card3Ix = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.feature_card-item.is-3',
        start: 'top 65%',
      },
    })

    tl.from('.feature_card-item.is-3', { opacity: 0, y: 30 }).from(
      '.featrue_card-svg',
      { opacity: 0, x: '10%' },
      '<35%'
    )
  }

  card3Ix()

  const card4Ix = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.feature_card-item.is-4',
        start: 'top 65%',
      },
    })

    tl.from('.feature_card-item.is-4', { opacity: 0, y: 30 }).from(
      '.g-track',
      { opacity: 0, x: '10%', stagger: 0.15 },
      '<35%'
    )
  }

  card4Ix()

  const card5Ix = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.feature_card-item.is-5',
        start: 'top 65%',
      },
    })

    tl.from('.feature_card-item.is-5', { opacity: 0, y: 30 })
  }

  card5Ix()

  const card6Ix = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.feature_card-item.is-6',
        start: 'top 65%',
      },
    })

    tl.from('.feature_card-item.is-6', { opacity: 0, y: 30 }).from(
      '.featrue_card-svg-6',
      { opacity: 0, x: '10%' },
      '<35%'
    )
  }

  card6Ix()
}
