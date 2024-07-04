import gsap from 'gsap'

export const sectionShoplineMade = () => {
  gsap.registerPlugin(ScrollTrigger)

  const images = document.querySelectorAll('.made-in-shopline_item')

  images.forEach((image) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: 'top 75%',
      },
    })

    tl.from(image, {
      opacity: 0,
      y: 30,
    })
  })
}
