import { useEffect, useRef } from 'react'
import { CONSTANTS } from '../constants'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  const newShapePath =
    'M4 4 L18 42 C19.5 44 21.5 44 23 42 L28 28 L42 23 C44 21.5 44 19.5 42 18 L4 4 Z'

  const { pastelPurple } = CONSTANTS.COLORS
  const strokeW = '5.5'

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const handleMouseEnter = () => {
      el.style.opacity = '1'
    }

    const handleMouseLeave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        pointerEvents: 'none',
        zIndex: 9999,
        // 初始位移到視窗外，等第一次 mousemove 才定位
        transform: 'translate(-100px, -100px)',
        opacity: 0,
        // 稍微偏移一點，讓滑鼠尖端對準座標
        marginTop: '-2px',
        marginLeft: '-2px',
      }}
    >
      <svg
        width='32'
        height='32'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <filter id='shadow-black'>
          <feDropShadow
            dx='0'
            dy='2'
            stdDeviation='1.5'
            floodColor='white'
            floodOpacity='0.8'
          />
        </filter>
        <path
          d={newShapePath}
          fill={pastelPurple}
          stroke='#000000'
          strokeWidth={strokeW}
          strokeLinejoin='round'
          strokeLinecap='round'
          filter='url(#shadow-black)'
        />
        <circle cx='15' cy='15' r='4' fill='white' opacity='0.8' />
      </svg>
    </div>
  )
}

export default CustomCursor
