import gsap from 'gsap'

export const buttonHoverIx = () => {
  const buttons = document.querySelectorAll('.button-link')

  buttons.forEach((button) => {
    const buttonGradient = button.querySelector('.gradient-color-blue')
    const isDark = buttonGradient.classList.contains('is-dark')
    const gradientColor = isDark ? 'white' : '#3152F1'

    const tl = gsap.timeline({ paused: true })

    gsap.set(buttonGradient, { opacity: 0 })
    tl.to(buttonGradient, { opacity: 1 }).fromTo(
      buttonGradient,
      {
        background: `conic-gradient(from 0deg, transparent, ${gradientColor})`,
      },
      {
        background: `conic-gradient(from 360deg, transparent, ${gradientColor})`,
        duration: 5,
        repeat: -1,
        ease: 'linear',
      },
      0
    )

    button.addEventListener('mouseenter', () => {
      tl.restart()
    })

    button.addEventListener('mouseleave', () => {
      gsap.to(buttonGradient, { opacity: 0 })
    })
  })
}
