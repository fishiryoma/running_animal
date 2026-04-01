import { Github, Linkedin } from './BrandIcons'
import FlipCard from './FlipCard'
import icon01 from '../assets/icon_01.png'
import icon02 from '../assets/icon_02.png'
import { CONSTANTS } from '../constants'

interface ProfileCardProps {
  githubUrl?: string
  linkedinUrl?: string
}

export const ProfileCard = ({
  githubUrl = 'https://github.com/fishiryoma',
  linkedinUrl = 'https://www.linkedin.com/in/%E7%90%AC%E7%91%9C-%E9%BB%83-860203112/',
}: ProfileCardProps) => {
  const socialLinks = [
    { href: githubUrl, icon: <Github size={24} />, label: 'GitHub' },
    { href: linkedinUrl, icon: <Linkedin size={24} />, label: 'LinkedIn' },
  ]

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className='relative'>
        <div className={`absolute -top-4 left-4 z-10 pixel-tag ${CONSTANTS.LABEL_COLORS.orange} px-3 py-1 text-xs font-bold whitespace-nowrap ${CONSTANTS.TEXT_COLORS.white}`}>
          PROFILE
        </div>
        <FlipCard
          className='h-64 w-64 pixel-card bg-white/80'
          front={
            <img
              src={icon01}
              alt='Icon 01'
              className='h-full w-full object-cover'
            />
          }
          back={
            <img
              src={icon02}
              alt='Icon 02'
              className='h-full w-full object-cover'
            />
          }
        />
      </div>

      {/* 社群圖示區域 */}
      <div className='flex justify-center gap-4'>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className={`flex h-10 w-10 items-center justify-center bg-white ${CONSTANTS.TEXT_COLORS.dark} pixel-btn-shadow pixel-btn-active transition-colors hover:text-pixel-orange`}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
