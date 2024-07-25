import { gsap } from 'gsap'
import { defaults } from '../../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.event_timer', { y: '-120%' })
    .from('.event-navbar .event-logo svg', { y: '110%' }, '<')
    .from('.event-navbar .button-event', { opacity: 0, y: '-50%' }, '<')
    .from(
      '.event-grid-1 rect, .event-grid-2 rect',
      {
        opacity: 0,
        stagger: { amount: 1, from: 'random' },
      },
      '<45%'
    )
    .from('.event-hero h1', defaults, '<')
    .from('.event-hero_venue-wrap', defaults, '<45%')
    .from('.event-hero_right, [button-hero]', defaults, '<')
    .from('.event-lightbox', defaults, '<45%')
}
