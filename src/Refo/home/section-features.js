import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionFeature = () => {
  gsap.registerPlugin(ScrollTrigger)

  const getStartValue = window.innerWidth < 480 ? 'top 70%' : 'top 90%'
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-features h2',
      start: getStartValue,
    },
  })

  tl.from('.home-features h2', defaults)
  // Function to handle the feature block animation
  const animateFeatureBlocks = () => {
    if (window.innerWidth < 480) {
      tl.from('[feature-block]', {
        opacity: 0,
        y: 30,
        stagger: { amount: 0.5 },
      })
    }
  }

  animateFeatureBlocks()
}
