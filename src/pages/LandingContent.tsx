import { ProfileCard } from '../components/ProfileCard'
import { HeroSection } from '../components/Landing/HeroSection'
import { WorksSection } from '../components/Landing/WorksSection'
import { CertificationSection } from '../components/Landing/CertificationSection'
import { SkillsSection } from '../components/Landing/SkillsSection'
import '../styles/Cursors.css'

export function LandingContent() {

  return (
    <div className='flex min-h-[150vh] w-full flex-col items-center justify-start p-6 md:p-12'>
      <div className='mx-auto flex w-full flex-col items-start justify-center gap-8 md:max-w-7xl md:flex-row md:justify-center'>
        {/* 角色卡片區域：在捲動時保持固定位置 */}
        <div className='mx-auto md:sticky md:top-12 md:self-start'>
          <ProfileCard />
        </div>

        {/* 內容區域 */}
        <div className='w-full flex-1'>
          <div className='flex flex-col gap-14'>
            <HeroSection />
            <SkillsSection />
            <WorksSection />
            <CertificationSection />
          </div>
        </div>
      </div>
    </div>
  )
}
