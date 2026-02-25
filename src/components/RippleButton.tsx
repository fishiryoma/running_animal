import React from 'react'
import './RippleButton.css'

/**
 * RippleButton 組件 - 幽靈款式 (Ghost)
 *
 * 具備簡潔的白色外觀，並在 Hover 時產生從左至右流動的幽靈波紋。
 */
interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function RippleButton({
  children,
  className = '',
  ...props
}: RippleButtonProps) {
  return (
    <button
      className={`ripple-button relative overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 ${className}`}
      {...props}
    >
      <span className='relative z-10'>{children}</span>

      {/* 幽靈款式專用的動畫容器 */}
      <div className='ripple-container'>
        <div className='ghost-waves'>
          <div className='ghost-edge'></div>
          <div className='ghost-edge'></div>
        </div>
      </div>
    </button>
  )
}
