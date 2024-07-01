export const navbarDropdown = () => {
  console.log('navabe')

  const tabButtons = document.querySelectorAll('.dropdown-platform_tab')
  const tabContents = document.querySelectorAll('.dropdown-platform_tab-pane')

  tabButtons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
      // Remove 'is-active' class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove('is-active'))
      tabContents.forEach((content) => content.classList.remove('is-active'))

      // Add 'is-active' class to hovered button and corresponding content
      button.classList.add('is-active')
      tabContents[index].classList.add('is-active')
    })
  })
}
