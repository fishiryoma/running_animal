import { useEffect, useState, type ReactNode } from 'react'
import catSprites8 from '../assets/cat sprites8.png'
import house from '../assets/house.png'
import CustomCursor from '../components/CustomCursor'
import { Navbar } from './Navbar'

/**
 * BackgroundContainer 組件
 *
 * 提供滿版的滾動背景效果，包含背景圖層與隨滾動移動的貓咪。
 * 支援透過 children 渲染內容，內容會放置在 z-index 較高的圖層中。
 */
interface BackgroundContainerProps {
  className?: string
  style?: React.CSSProperties
  children?: ReactNode
}

export function BgContainer({
  className,
  style,
  children,
}: BackgroundContainerProps) {
  const [scrollData, setScrollData] = useState({ progress: 0, frameIndex: 0 })
  const { progress, frameIndex } = scrollData

  // 配置常量
  const TOTAL_FRAMES = 8
  const PIXELS_PER_FRAME = 80
  const SPRITE_WIDTH = 100 // 每格寬度
  const SPRITE_HEIGHT = 400 // 每格高度

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? scrollY / totalHeight : 0

      // 根據滾動位置計算當前幀
      const frameIndex = Math.floor(scrollY / PIXELS_PER_FRAME) % TOTAL_FRAMES

      setScrollData({
        progress: Math.min(Math.max(progress, 0), 1),
        frameIndex,
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始化檢查

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='relative min-h-screen w-full bg-black'>
      <CustomCursor />

      {/* 1. 背景層 (z-0)：隨滾動有輕微的位移效果 */}
      <div
        className='fixed top-0 left-0 z-0 h-screen w-full bg-cover bg-center transition-transform duration-100 ease-out'
        style={{
          backgroundImage: `url("${house}")`,
          transform: `translateX(-${progress * 10}%)`,
          width: '120%',
          opacity: 0.75,
        }}
      />

      {/* 2. 角色層 (z-20)：隨滾動水平移動並切換幀動畫 */}
      <div
        className={`fixed -bottom-41 z-20 ${className || ''}`}
        style={{
          left: `calc(${progress * 100}% - ${progress * SPRITE_WIDTH}px)`,
          width: `${SPRITE_WIDTH}px`,
          height: `${SPRITE_HEIGHT}px`,
          backgroundImage: `url("${catSprites8}")`,
          backgroundSize: `${TOTAL_FRAMES * SPRITE_WIDTH}px ${SPRITE_HEIGHT}px`,
          backgroundPosition: `-${frameIndex * SPRITE_WIDTH}px 0`,
          backgroundRepeat: 'no-repeat',
          imageRendering: 'pixelated',
          transition: 'left 0.1s linear',
          ...style,
        }}
      />

      {/* 3. 內容圖層 (z-1)：放置 children，具備滾動能力與點擊互動 */}
      <div className='relative z-1 w-full pt-24'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
