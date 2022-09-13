import { RefObject, useLayoutEffect, useState } from 'react'

export type LogoParamProps = {
  w: number
  h: number
  imgMarginLeft: number
  imgMarginRight: number
  scrollY: number
  isSwitchLogo: boolean
}

const useScrollEffects = ({
  logoRef,
}: {
  logoRef: RefObject<HTMLDivElement> | undefined
}) => {
  const [logoParams, setLogoParams] = useState<LogoParamProps>({
    w: 200,
    h: 200,
    imgMarginLeft: 0,
    imgMarginRight: 0,
    scrollY: 0,
    isSwitchLogo: false,
  })
  const handleScroll = () => {
    // Get the current scrollY point
    const sY = window.scrollY

    // explination of math
    // logo starts at 200 (w) by 200 (h) in desktop mode
    // in mobile the logo is 77 (w) by 77 (h)

    // at 0 should be 200  by 200
    // 276 should be 77 by 77
    // 200-55 = 145

    // calculating where the logo is in relationsh to top of viewport
    const top = logoRef?.current?.getBoundingClientRect()?.top as number

    // calc1 determines how proprtionaly we should increase or decrease size of logo as user scroll
    const calc1 = 200 - 145 * (sY / 260)

    // calc2 determines how much to move the image to left with margin on desktop to make it smooth
    const calc2 = 145 * (sY / 260)

    // cal3 determines how much to move the image to right with margin on mobile to make it smooth
    // i am using innewidth to proportionally adjust margin depending on different screen sizes
    const calc3 = (sY * window.innerWidth) / 520
    const calc1Min = Math.max(77, calc1)

    setLogoParams({
      w: calc1Min,
      h: calc1Min,

      // padding should never be more than 200. if it is, it will affect mobile on scroll since most screens are <= 400 pixels
      imgMarginLeft: Math.min(200, calc2),
      imgMarginRight: calc3,
      scrollY: window.scrollY,
      isSwitchLogo: typeof top === 'number' && top < 0 ? true : false,
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  return logoParams
}

export default useScrollEffects
