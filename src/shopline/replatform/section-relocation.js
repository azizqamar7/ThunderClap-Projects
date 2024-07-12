import { gsap } from 'gsap'
import { defaults, createScrollTrigger } from '../defaults/interactionParams'

export const sectionRelocation = () => {
  const block1 = () => {
    const tl = gsap.timeline()

    const path = document.querySelector('.replatform-relocation_img-line path')
    const pathLength = path.getTotalLength()
    let position = 0.2
    if (window.innerWidth < 480) {
      position = '<55%'
    }

    tl.from('[block-1] .replatform-relocation_img-wrapper', defaults)
      .from('.replatform-relocation_img-ui-2', defaults, '<45%')
      .from(path, { strokeDashoffset: -pathLength, duration: 1 }, '<45%')
      .from(
        '[block-1] .replatform-relocation_img-icon.is-top',
        { scale: 0 },
        '<15%'
      )
      .from('[block-1] .replatform-relocation_img-switch', defaults, '<45%')
      .from('[block-1] h3', defaults, position)
      .from('[block-1] p', defaults, '<45%')

    createScrollTrigger('[block-1]', tl)
  }

  block1()

  const block2 = () => {
    const tl = gsap.timeline()

    const path = document.querySelector('[block-2] path')
    const pathLength = path.getTotalLength()
    let position = 0.2
    if (window.innerWidth < 480) {
      position = '<55%'
    }

    tl.from('[block-2] .replatform-relocation_img-wrapper', defaults)
      .from('[block-2] .replatform-relocation_img-ui', defaults, '<45%')
      .from(
        '[block-2] .replatform-relocation_img-icon.is-identity',
        { scale: 0, stagger: 0.2 },
        '<15%'
      )
      .from(path, { strokeDashoffset: -pathLength, duration: 1 }, '<45%')
      .from('[block-2] h3', defaults, position)
      .from('[block-2] p', defaults, '<45%')

    createScrollTrigger('[block-2]', tl)
  }

  block2()

  const block3 = () => {
    const tl = gsap.timeline()

    const path = document.querySelector('[block-3] path')
    const pathLength = path.getTotalLength()
    let position = 0.2
    if (window.innerWidth < 480) {
      position = '<55%'
    }

    tl.from('[block-3] .replatform-relocation_img-wrapper', defaults)
      .from(
        '[block-3] .replatform-relocation_img-icon.is-integrations',
        defaults,
        '<45%'
      )
      .from(path, { strokeDashoffset: -pathLength, duration: 1 }, '<45%')
      .from(
        '[block-3] .replatform-relocation_img-integrations',
        { opacity: 0, stagger: 0.2, y: 20 },
        '<45%'
      )
      .from('[block-3] h3', defaults, position)
      .from('[block-3] p', defaults, '<45%')

    createScrollTrigger('[block-3]', tl)
  }

  block3()

  const block4 = () => {
    const tl = gsap.timeline()

    const path = document.querySelector('[block-4] path')
    const pathLength = path.getTotalLength()
    let position = 0.2
    if (window.innerWidth < 480) {
      position = '<55%'
    }

    tl.from('[block-4] .replatform-relocation_img-wrapper', defaults)
      .from(
        '[block-4] .replatform-relocation_img-ui.is-performace',
        defaults,
        '<45%'
      )
      .from(path, { strokeDashoffset: -pathLength, duration: 1 }, '<45%')
      .from(
        '[block-4] .replatform-relocation_img-icon.is-performance',
        { scale: 0 },
        '<15%'
      )
      .from('.replatform-relocation_img-ui-top', defaults, '<45%')
      .from('[block-4] h3', defaults, position)
      .from('[block-4] p', defaults, '<45%')

    createScrollTrigger('[block-4]', tl)
  }

  block4()
}
