import React from 'react'
import { CONSTANTS } from '../constants'

interface CardProps {
  children: React.ReactNode
  className?: string
  id?: string
  label?: string
  labelColor?: keyof typeof CONSTANTS.LABEL_COLORS
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  id,
  label,
  labelColor = 'blue',
}) => {
  const colorClass = CONSTANTS.LABEL_COLORS[labelColor] || CONSTANTS.LABEL_COLORS.blue

  return (
    <div id={id} className={`relative pixel-card bg-white/80 p-6 ${className}`}>
      {label && (
        <div
          className={`absolute -top-4 left-4 z-10 pixel-tag px-3 py-1 text-xs font-bold whitespace-nowrap ${CONSTANTS.TEXT_COLORS.white} ${colorClass}`}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  )
}
