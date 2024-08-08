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
}
