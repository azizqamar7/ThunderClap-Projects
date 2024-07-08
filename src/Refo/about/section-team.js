import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionTeam = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about_team-wrapper',
      start: 'top 70%',
    },
  })

  tl.from('.about_team-left h2', defaults)
    .from('.about_team-left p', defaults, '<45%')
    .from('.about_team-left .svg', defaults, '<45%')
    .from('.about_team-right', defaults, 0.2)
}
