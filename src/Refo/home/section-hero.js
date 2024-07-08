import gsap from 'gsap'
import { defaults } from '../defaults/interactionParams'

export const sectionHero = () => {
  const tl = gsap.timeline()

  tl.from('.navbar_component', {
    y: '-100%',
    duration: 0.7,
    ease: 'power2.out',
  })
    .from('.home-hero .text-size-tiny', defaults)
    .set('.navbar_component', { clearProps: 'all' })
    .from('.home-hero h1', defaults, '<45%')
    .from('.home-hero p', defaults, '<45%')
    .from('.home-hero .button-group', defaults, '<45%')

  // Run video on mobile
  const mobileVideo = () => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.home-hero_video-mobile-wrapper',
    //     start: 'top 400',
    //     markers: true,
    //   },
    // })
    const mobileVideo = document.querySelector('.hero-video-mobile')

    tl.from('.home-hero_video-mobile-wrapper', {
      opacity: 0,
      onComplete: () => {
        if (mobileVideo) {
          mobileVideo.loop = true
          mobileVideo
            .play()
            .then(() => {
              console.log('not in low powermode')
            })
            .catch((error) => {
              console.log(error, 'in low powermode')
              $('.home-hero_video-mobile-wrapper').css('display', 'none')
              $('.svg.is-mobile').css('display', 'block')
            })
        }
      },
    })
  }

  if (window.innerWidth < 479) {
    mobileVideo()
  }

  const sectionHeroOrangeLines = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-right_gradient-svg',
        start: 'top 25%',
      },
    })

    const pathLines = document.querySelectorAll('.g-orange-path')

    const pathLineTl = gsap.timeline()
    pathLines.forEach((pathLine) => {
      const pathLineLength = pathLine.getTotalLength()

      pathLineTl.from(
        pathLine,
        {
          strokeDashoffset: -pathLineLength,
          duration: 1,
        },
        0
      )
    })

    tl.add(pathLineTl)
      .from('.g-orange-line', {
        scale: 0,
        transformOrigin: '50% 50%',
      })
      .from('.hero-left_gradient-svg circle', { opacity: 0 }, '<45%')

    const heroDesktopVideo = document.querySelector('.hero-video-desktop')
    const heroDesktopVideoLoop = document.querySelector('.hero-video-loop')

    tl.from(
      '.home-hero_video-wrapper',
      {
        opacity: 0,
        onComplete: () => {
          if (heroDesktopVideo) {
            heroDesktopVideo
              .play()
              .then(() => {
                console.log('not in low powermode')
              })
              .catch((error) => {
                console.log(error, 'in low powermode')
                $('.home-hero_video-wrapper').css('display', 'none')
                $('.home-image').css('display', 'block')
              })
          }
        },
      },
      '<'
    )

    console.log(tl.totalDuration())

    const videoLoopTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-right_gradient-svg',
        start: 'top 25%',
      },
    })
    videoLoopTl
      .to('.home-hero_video-loop', {
        opacity: 1,
        delay: 10,
        duration: 0.1,
        onComplete: () => {
          if (heroDesktopVideoLoop) {
            heroDesktopVideoLoop.loop = true
            heroDesktopVideoLoop
              .play()
              .then(() => {
                console.log('not in low powermode')
              })
              .catch((error) => {
                console.log(error, 'in low powermode')
                $('.home-hero_video-wrapper').css('display', 'none')
                $('.home-image').css('display', 'block')
              })
          }
        },
      })
      .set(heroDesktopVideo, { opacity: 0 })
  }

  const sectionHeroGreenLines = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-right_gradient-svg',
        start: 'top 25%',
      },
    })

    const pathLines = document.querySelectorAll('.g-green-path')

    const pathLineTl = gsap.timeline()
    pathLines.forEach((pathLine) => {
      const pathLineLength = pathLine.getTotalLength()

      pathLineTl.from(
        pathLine,
        {
          strokeDashoffset: -pathLineLength,
          duration: 1,
        },
        0
      )
    })

    tl.add(pathLineTl)
      .from('.g-green-line', {
        scale: 0,
        transformOrigin: '50% 50%',
      })
      .from('.hero-right_gradient-svg circle', { opacity: 0 }, '<45%')
  }

  if (window.innerWidth > 479) {
    sectionHeroOrangeLines()
    sectionHeroGreenLines()
  }
}
