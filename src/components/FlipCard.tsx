import type { ReactNode } from 'react'
import './FlipCard.css'

interface FlipCardProps {
  front: ReactNode
  back: ReactNode
  className?: string
}

const FlipCard = ({ front, back, className = '' }: FlipCardProps) => {
  return (
    <div className={`flip-card ${className}`}>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>{front}</div>
        <div className='flip-card-back'>{back}</div>
      </div>
    </div>
  )
}

export default FlipCard
