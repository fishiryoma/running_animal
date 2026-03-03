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
  githubUrl = '#',
  linkedinUrl = '#',
}: ProfileCardProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <FlipCard
        className={`h-64 w-64 ${CONSTANTS.UI.borderRadius} bg-white/20 backdrop-blur-md`}
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

      {/* 社群圖示區域 */}
      <div className='flex justify-center gap-6 rounded-full bg-black/40 px-6 py-2 backdrop-blur-md transition-all hover:bg-black/10'>
        <a
          href={githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white/70 transition-colors hover:text-white'
        >
          <Github size={24} />
        </a>
        <a
          href={linkedinUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white/70 transition-colors hover:text-white'
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  )
}

export default ProfileCard
