import gsap from 'gsap'
import { defaults } from './defaults/interactionParams'

export const sectionGrid2 = () => {
  const sectionLayouts = document.querySelectorAll('.home-col-2')

  sectionLayouts.forEach((layout) => {
    const layoutTag = layout.querySelector('.tag')
    const layoutTitle = layout.querySelector('h2')
    const layoutPointer = layout.querySelectorAll('.icon-pointer_item')
    const layoutButton = layout.querySelector('a')
    const layoutImage = layout.querySelector('.home-col-2_image')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: layout,
        start: 'top 70%',
      },
    })

    tl.from(layoutTag, defaults)
      .from(layoutTitle, defaults, '<15%')
      .from(
        layoutPointer,
        { opacity: 0, ease: 'power2.out', stagger: 0.1, x: 15 },
        '<45%'
      )
    if (layoutButton) {
      tl.from(layoutButton, { opacity: 0, ease: 'power2.out', x: 15 }, '<65%')
    }
    tl.from(layoutImage, defaults, 0.2)
  })

  const reportIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[svg-reports]',
        start: 'top 70%',
      },
    })

    tl.from('.g-animal', { y: '100%' }, 0.2).from(
      '.g-chart',
      { opacity: 0, scale: 0.7, ease: 'back.out', transformOrigin: '50% 50%' },
      '<45%'
    )
  }

  reportIx()

  const recommendIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[svg-recommend]',
        start: 'top 70%',
      },
    })

    tl.from('.g-recommend-animal', { y: '100%' }, 0.2).from(
      '.g-recommend-block',
      {
        opacity: 0,
        scale: 0.7,
        ease: 'back.out',
        transformOrigin: '50% 50%',
        stagger: 0.1,
      },
      '<65%'
    )
  }

  recommendIx()

  const incodentIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[svg-incident]',
        start: 'top 70%',
      },
    })

    tl.from('.g-incident-animal', { y: '100%' }, 0.2)
      .from(
        '.g-warning',
        {
          opacity: 0,
          scale: 0.7,
          ease: 'back.out',
          transformOrigin: '50% 50%',
        },
        '<45%'
      )
      .from(
        '.g-incident-block',
        {
          opacity: 0,
          scale: 0.7,
          ease: 'back.out',
          transformOrigin: '50% 50%',
          stagger: 0.1,
        },
        '<65%'
      )
  }

  incodentIx()
}
