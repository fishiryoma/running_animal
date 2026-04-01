import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { CONSTANTS } from '../constants'

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  size?: ModalSize
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-3xl',
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'lg',
}) => {
  // 當 Modal 開啟時防止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='absolute inset-0 bg-black/60 backdrop-blur-sm'
          />

          {/* 彈窗主體 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative z-10 w-full ${sizeClasses[size]} pixel-card bg-white/95`}
          >
            {/* 像素風格關閉按鈕 - 顯眼的紅色底 */}
            <button
              onClick={onClose}
              className={`absolute -top-3 -right-3 z-20 flex h-10 w-10 items-center justify-center ${CONSTANTS.LABEL_COLORS.red} pixel-tag pixel-btn-active ${CONSTANTS.TEXT_COLORS.white} transition-colors hover:brightness-130`}
              aria-label='Close'
            >
              <X size={24} />
            </button>

            <div
              className={`max-h-[85vh] overflow-y-auto p-8 leading-relaxed ${CONSTANTS.TEXT_COLORS.dark}`}
            >
              {title && (
                <h2
                  className={`mb-6 text-2xl font-bold tracking-tight ${CONSTANTS.TEXT_COLORS.dark}`}
                >
                  {title}
                </h2>
              )}
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Modal
