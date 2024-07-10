import gsap from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const sectionProducts = () => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[products]',
      start: 'top 65%',
    },
  })

  tl.from('[products] h2', defaults)

  // Animation all Product Blocks
  const productBlocks = document.querySelectorAll('[product-block]')

  productBlocks.forEach((block) => {
    // Animate Individual blocks
    // Get All H3, Para, Pointers and image
    const blockTitle = block.querySelector('h3')
    const blockPointers = block.querySelectorAll('.check-pointer-with-para')
    const blockImage = block.querySelectorAll('.home-products_block-image')

    let positionTl = 0
    if (window.innerWidth < 500) {
      positionTl = '<45%'
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 45%',
      },
    })

    tl.from(blockTitle, defaults)
      .from(
        blockPointers,
        {
          opacity: 0,
          x: '5%',
          stagger: { amount: 0.2 },
          ease: 'power3.out',
          duration: 1,
        },
        '<45%'
      )
      .from(blockImage, defaults, positionTl)
  })
}
