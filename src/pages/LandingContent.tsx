import { ProfileCard } from '../components/ProfileCard'
import { Card } from '../components/Card'
import '../styles/Cursors.css'

export function LandingContent() {
  // const themeColors = [
  //   { name: 'Muted Forest', hsl: 'hsl(165, 50%, 30%)', hex: '#267362' },
  //   { name: 'Dark Ocean', hsl: 'hsl(180, 100%, 25%)', hex: '#008080' },
  //   { name: 'Midnight', hsl: 'hsl(190, 40%, 20%)', hex: '#1E4047' },
  //   { name: 'Muted Sage', hsl: 'hsl(175, 20%, 60%)', hex: '#85ADA9' },
  //   { name: 'Steel Teal', hsl: 'hsl(185, 15%, 40%)', hex: '#577175' },
  // ]

  return (
    <div className='flex min-h-[150vh] w-full flex-col items-start justify-center overflow-x-hidden p-6 md:p-12'>
      <div className='flex w-full flex-col items-start justify-center gap-8 md:flex-row md:justify-start'>
        {/* 角色卡片區域：在捲動時保持固定位置 */}
        <div className='mx-auto md:fixed md:top-12'>
          <ProfileCard />
        </div>

        {/* 內容區域 */}
        <div className='w-full flex-1 md:ml-80'>
          <div className='flex flex-col gap-6'>
            <Card className='text-left text-gray-800'>
              <h1 className='font-artistic-en mb-4 text-4xl font-bold'>
                Hello, I'm Ryoma
              </h1>
              <p className='text-lg leading-relaxed'>
                這是一個使用 React 與 Canvas 打造的互動式個人網站。
                在這裡您可以看到結合了精緻動畫與流暢互動的網頁設計。
              </p>
            </Card>

            {/* 這裡增加較長的內容以供測試滾動效果 */}
            <Card className='text-left text-gray-800'>
              <h2 className='mb-4 text-2xl font-bold'>My Works</h2>
              <div className='space-y-4'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className='h-64 rounded-xl bg-gray-100/50' />
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Card>

            <Card className='text-left text-gray-800'>
              <h2 className='mb-4 text-2xl font-bold'>Contact Me</h2>
              <p>歡迎隨時與我聯繫，討論任何有趣的合作計畫！</p>
              <div className='h-32' />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
