import React from 'react'
import { CONSTANTS } from '../constants'

interface CardProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '', id }) => {
  return (
    <div
      id={id}
      className={`bg-white/40 backdrop-blur-sm ${CONSTANTS.UI.borderRadius} ${CONSTANTS.UI.borderWidth} border-gray-800 p-6 ${className}`}
    >
      {children}
    </div>
  )
}
