/**
 * For Home page js
 */

console.log('Hello from Home folder')

import gsap from 'gsap'
import { createScrollTrigger, defaults } from '../defaults/interactionParams'
import { playVideo } from '../defaults/plyr-video'
import { sectionHomeHero } from './section-home'
import { navbarDropdown } from '../defaults/navbar-dropdown'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // Navbar Dropdown Hover
  navbarDropdown()

  // Plyr Video
  playVideo()

  // Section Home Hero

  if (window.innerWidth > 767) {
    sectionHomeHero()
  }
  // Section Home Hero

  // Section Home Stat
  const sectionHomeStat = () => {
    const tl = gsap.timeline()

    tl.from('.home-stat_wrapper', defaults).from(
      '.home-stat_item',
      {
        opacity: 0,
        y: 30,
        ease: 'power3.out',
        duration: 0.7,
        stagger: { amount: 0.3 },
      },
      '<45%'
    )

    createScrollTrigger('.section_home-stat', tl)
  }

  sectionHomeStat()
  // Section Home Stat

  // Section Home Speed
  const sectionHomeSpeed = () => {
    const tl = gsap.timeline()

    tl.from('.home-speed_top .text-style-eyebrow-wrapper', defaults)
      .from('.home-speed_top h2', defaults, '<35%')
      .from('.home-speed_top p', defaults, '<35%')

    createScrollTrigger('.home-speed_top', tl)

    // block 1 Animation
    const block1Ix = () => {
      const tl = gsap.timeline()
      const pathLine = document.querySelector('.path-line-1')
      const pathLineLength = pathLine.getTotalLength()

      tl.from('.g-mockup-1', defaults)
        .from('.home-speed_image', { opacity: 0, x: '-5%' }, '<45%')
        .from('.g-shopline-drag-1', { opacity: 0, y: '-10%' }, '<45%')
        .from('.g-shopline-drag-2', { opacity: 0, y: '-10%' }, '<45%')
        .from(
          '.svg-button',
          { opacity: 0, scale: 0.2, ease: 'back.out(3)', duration: 0.3 },
          '<45%'
        )
        .from(
          pathLine,
          { strokeDashoffset: -pathLineLength, duration: 1 },
          '<45%'
        )
        .from('[home-speed-block-1] h3', defaults, 0.2)
        .from('[home-speed-block-1] p', defaults, '<45%')

      tl.timeScale(1.25)

      createScrollTrigger('[home-speed-block-1]', tl, 'top 65%')
    }

    block1Ix()

    // block 2 Animation
    const block2Ix = () => {
      const pathLine = document.querySelector('.svg-line-1 path')
      const pathLineLength = pathLine.getTotalLength()
      const tl = gsap.timeline()

      tl.from('.home-speed_image-2', defaults)
        .from(
          '.image-react',
          {
            opacity: 0,
            scale: 0.5,
            ease: 'back.out(3)',
          },
          '<45%'
        )
        .from(
          pathLine,
          { strokeDashoffset: -pathLineLength, duration: 1 },
          '<45%'
        )
        .from(
          '.svg-settings',
          { opacity: 0, scale: 0.5, ease: 'back.out(3)' },
          '<75%'
        )
        .from('.svg-code-lines', defaults, '<15%')
        .from('[home-speed-block-2] h3', defaults, 0.2)
        .from('[home-speed-block-2] p', defaults, '<45%')

      tl.timeScale(1.25)

      createScrollTrigger('[home-speed-block-2]', tl, 'top 65%')
    }

    block2Ix()

    // Block 3 Animation
    const block3Ix = () => {
      const pathLine = document.querySelector('.svg-line-2 path')
      const pathLineLength = pathLine.getTotalLength()

      const tl = gsap.timeline()

      tl.from('.home-speed_image-3', defaults)
        .from('.svg-social-sales', defaults, '<45%')
        .from(
          pathLine,
          { strokeDashoffset: -pathLineLength, duration: 1 },
          '<45%'
        )
        .from(
          '.svg-camera',
          { opacity: 0, scale: 0.5, ease: 'back.out(3)' },
          '<15%'
        )
        .from(
          '.abs-social',
          {
            opacity: 0,
            scale: 0.5,
            ease: 'back.out(3)',
            stagger: { amount: 0.3, from: 'random' },
          },
          '<45%'
        )
        .from('[home-speed-block-3] h3', defaults, 0.2)
        .from('[home-speed-block-3] p', defaults, '<45%')

      createScrollTrigger('[home-speed-block-3]', tl, 'top 65%')
    }

    // Home Video
    const sectionHomeVideo = () => {
      const tl = gsap.timeline()

      tl.from('.home-video h2', defaults)
        .from(
          '.home-testimonials_bg-wrapper.is-top',
          { x: '20%', opacity: 0 },
          '<45%'
        )
        .from(
          '.home-video .plyr-video-wrapper, .svg-line-video',
          defaults,
          '<45%'
        )
        .from(
          '.home-testimonials_bg-wrapper.is-bottom',
          { y: '20%', opacity: 0 },
          '<45%'
        )
      createScrollTrigger('.home-video', tl)
    }

    sectionHomeVideo()
    // Home Video

    block3Ix()

    // Block 4 Animation
    const block4Ix = () => {
      const pathLine = document.querySelector('.svg-line-3 path')
      const pathLineLength = pathLine.getTotalLength()

      const tl = gsap.timeline()

      tl.from('.home-speed_image-4', defaults)
        .from(
          '.svg-icon',
          { opacity: 0, scale: 0.5, ease: 'back.out(3)' },
          '<45%'
        )
        .from(
          pathLine,
          { strokeDashoffset: -pathLineLength, duration: 1 },
          '<15%'
        )
        .from(
          '.abs-pfp-1, .abs-pfp-2, .abs-pfp-3',
          {
            opacity: 0,
            scale: 0.8,
            ease: 'back.out(3)',
            stagger: { amount: 0.3, from: 'random' },
          },
          '<45%'
        )
        .from('[home-speed-block-4] h3', defaults, 0.2)
        // .from('[home-speed-block-4] p', defaults, '<45%')
        .from(
          '[home-speed-block-4] .pointer-item, [home-speed-block-4] a',
          { opacity: 0, x: '3%', stagger: { amount: 0.3 } },
          '<45%'
        )
        .from('[home-speed-block-4] .heading-size-medium', defaults, '<35%')

      createScrollTrigger('[home-speed-block-4]', tl, 'top 65%')
    }

    block4Ix()
  }

  sectionHomeSpeed()
  // Section Home Speed

  //Section Home Graph

  const sectionHomeGraph = () => {
    // Get all the graph paths
    const pathLineBlue = document.querySelector('.path-line-graph-blue')
    const pathLineBlueLength = pathLineBlue.getTotalLength()
    const pathLineBlueWhite = document.querySelector(
      '.path-line-graph-blue-white'
    )
    const pathLineBlueWhiteLength = pathLineBlueWhite.getTotalLength()
    const pathLineOrange = document.querySelector('.path-line-graph-orange')
    const pathLineOrangeLength = pathLineOrange.getTotalLength()
    const pathLineOrangeWhite = document.querySelector(
      '.path-line-graph-orange-white'
    )
    const pathLineOrangeWhiteLength = pathLineOrangeWhite.getTotalLength()

    const tl = gsap.timeline()

    tl.from('.home-graph_content h2', defaults).from(
      '.home-graph_content p',
      defaults,
      '<45%'
    )

    createScrollTrigger('.home-graph_content', tl)

    const graphBlueTl = gsap.timeline()

    graphBlueTl
      .from(
        pathLineBlue,
        { strokeDashoffset: -pathLineBlueLength, duration: 1 },
        '<45%'
      )
      .from(
        pathLineBlueWhite,
        { strokeDashoffset: -pathLineBlueWhiteLength, duration: 1 },
        '<'
      )
      .from(
        '.svg-circle-blue',
        { scale: 0, transformOrigin: '50% 50%', duration: 0.2 },
        '<45%'
      )
      .from(
        '.g-returns',
        {
          opacity: 0,
          scale: 0.5,
          transformOrigin: '50% 50%',
          duration: 0.2,
          ease: 'back.out(3)',
        },
        '<45%'
      )

    const graphOrangeTl = gsap.timeline()
    graphOrangeTl
      .from(
        pathLineOrange,
        { strokeDashoffset: -pathLineOrangeLength, duration: 1 },
        '<45%'
      )
      .from(
        pathLineOrangeWhite,
        { strokeDashoffset: -pathLineOrangeWhiteLength, duration: 1 },
        '<'
      )
      .from(
        '.svg-circle-orange',
        { scale: 0, transformOrigin: '50% 50%', duration: 0.2 },
        '<45%'
      )
      .from(
        '.g-cost',
        {
          scale: 0.5,
          opacity: 0,
          transformOrigin: '50% 50%',
          duration: 0.2,
          ease: 'back.out(3)',
        },
        '<45%'
      )

    graphBlueTl.add(graphOrangeTl, '<')
    let startPercent = 35
    if (window.innerWidth < 990) {
      startPercent = 75
    }
    graphBlueTl.timeScale(0.7)
    createScrollTrigger(pathLineBlue, graphBlueTl, `top ${startPercent}%`)
  }

  sectionHomeGraph()
  //Section Home Graph

  // Section Home Platform
  const sectionHomePlatform = () => {
    const tl = gsap.timeline()

    tl.from('.home-platform_wrapper', defaults)
      .from('.home-platform_img-wrapper', defaults, '<45%')
      .from('.home-platform_wrapper h2', defaults, 0.2)
      .from('.home-platform_wrapper p', defaults, '<45%')
      .from('.home-platform_wrapper a', defaults, '<35%')

    createScrollTrigger('.home-platform_wrapper', tl)
  }

  sectionHomePlatform()
  // Section Home Platform

  // Section Home Strories
  const sectionHomeStories = () => {
    const tl = gsap.timeline()

    tl.from('.home-stories_header h2', defaults)
      .from('.home-stories_header a', defaults, '<45%')
      .from('.testimonials_tabs', defaults, '<45%')

    createScrollTrigger('.home-stories_header', tl)
  }

  sectionHomeStories()
  // Section Home Strories

  // Section Home Commerce
  const sectionHomeCommerce = () => {
    const tl = gsap.timeline()

    tl.from('.home-commerce_content .text-style-eyebrow--inline', defaults)
      .from('.home-commerce_content h2', defaults, '<45%')
      .from('.home-commerce_content p', defaults, '<45%')

    createScrollTrigger('.home-commerce_content', tl)

    const pathLine = document.querySelector('.svg-line-5 path')
    const pathLineLength = pathLine.getTotalLength()
    const imageTl = gsap.timeline()

    imageTl
      .from('.home-commerce_image', defaults)
      .from('.svg-stat', defaults, '<45%')
      .from('.svg-sale-type', defaults, '<45%')
      .from(
        pathLine,
        { strokeDashoffset: -pathLineLength, duration: 1 },
        '<15%'
      )
      .from(
        '.svg-speaker',
        {
          opacity: 0,
          scale: 0.8,
          ease: 'back.out(3)',
        },
        '<45%'
      )

    createScrollTrigger('.home-commerce_image', imageTl)

    const commerceBlocks = document.querySelectorAll('.home-commerce_block')
    commerceBlocks.forEach((block) => {
      const blockIcon = block.querySelector('.icon-size-44')
      const blockTitle = block.querySelector('h3')
      const blockList = block.querySelectorAll('.uo-list-item')
      const tl = gsap.timeline()

      tl.from(blockIcon, defaults)
        .from(blockTitle, defaults, '<15%')
        .from(
          blockList,
          { opacity: 0, x: '3%', stagger: { amount: 0.3 } },
          '<45%'
        )

      createScrollTrigger(block, tl)
    })
  }

  sectionHomeCommerce()
  // Section Home Commerce

  // Section Home Journey
  const sectionHomeJourney = () => {
    const pathLine = document.querySelector('.svg-line-4 path')
    const pathLineLength = pathLine.getTotalLength()
    const tl = gsap.timeline()

    tl.from('.home-journey_wrapper h2', defaults)
      .from('.home-journey_img-wrapper', defaults, '<45%')
      .from('.svg-rect', defaults, '<45%')
      .from('.lady-posing', defaults, '<45%')
      .from('.abs-cart', defaults, '<45%')
      .from(
        pathLine,
        { strokeDashoffset: -pathLineLength, duration: 1 },
        '<45%'
      )
      .from(
        '.svg-globe',
        { scale: 0.5, ease: 'back.out(3)', opacity: 0 },
        '<45%'
      )

    createScrollTrigger('.home-journey_wrapper', tl, 'top 65%')

    const journeyListTl = gsap.timeline()
    journeyListTl.from('.home-journey_item', {
      opacity: 0,
      x: '10%',
      stagger: { amount: 0.9 },
    })

    createScrollTrigger('.home-journey_item', journeyListTl)
  }

  sectionHomeJourney()
  // Section Home Journey

  // Section CTA
  const sectionCTA = () => {
    const tl = gsap.timeline()

    tl.from('.home-cta_top h2', defaults)
      .from('.home-cta_top p', defaults, '<45%')
      .from('.home-cta_top a', defaults, '<45%')

    createScrollTrigger('.home-cta_top', tl)
  }

  sectionCTA()
  // Section CTA
})
