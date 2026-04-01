import { useState } from 'react'
import { Card } from '../Card'
import TiltedCard from '../TiltedCard'
import waterProject from '../../assets/water_project.jpg'
import water01 from '../../assets/water_01.png'
import water02 from '../../assets/water_02.png'
import water03 from '../../assets/water_03.png'
import game01 from '../../assets/game01.png'
import game02 from '../../assets/game02.png'
import game03 from '../../assets/game03.png'
import gameProject from '../../assets/game_project.jpg'
import { CONSTANTS } from '../../constants'
import Modal from '../Modal'

interface WorkItem {
  id: string
  title: string
  thumbnail: string
  tagLabel: string
  modalContent: React.ReactNode
}

export function WorksSection() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  const WORKS_DATA: WorkItem[] = [
    {
      id: 'water',
      title: '大家來喝水',
      thumbnail: waterProject,
      tagLabel: '大家來喝水',
      modalContent: (
        <div className='space-y-4'>
          <p>
            這是一個整合 LINE
            生態系統的補水追蹤應用，透過直觀的互動介面與即時數據反饋，幫助用戶建立規律的飲水習慣。目前佈署在Firebase上，可實際互動。
          </p>
          <div className='py-2'>
            <p className='mb-2 font-bold'>專案技術：</p>
            <ul className='list-inside list-disc space-y-1 text-sm'>
              <li>前端開發: Vue 3, TypeScript, Pinia, Vue Router, Vite </li>
              <li>動畫/樣式: GSAP, Tailwind CSS, SVG Animation</li>
              <li>
                後端/集成: Firebase (Auth/Store/Functions/RTDB), LINE LIFF SDK
              </li>
              <li>工具/插件: Chart.js, i18next, Day.js, V-Calendar</li>
            </ul>
          </div>
          <div className='mt-4 flex flex-wrap justify-center gap-4'>
            <img
              src={water01}
              alt='Project Preview 1'
              className='pixel-card h-50 w-auto object-contain'
            />
            <img
              src={water02}
              alt='Project Preview 2'
              className='pixel-card h-50 w-auto object-contain'
            />
            <img
              src={water03}
              alt='Project Preview 3'
              className='pixel-card h-50 w-auto object-contain'
            />
          </div>
          <div className='py-2'>
            <p className='mb-2 font-bold'>功能：</p>
            <ul className='list-inside list-disc space-y-1 text-sm'>
              <li>連結 LINE 帳號，可同時透過網頁或 LINE 即時記錄飲水量</li>
              <li>可愛動畫與互動，增加使用樂趣</li>
              <li>提供當週與當月飲水紀錄一覽，快速看出達標日</li>
              <li>透過圖表視覺化呈現每週喝水量與分布時間</li>
            </ul>
          </div>
          <div className='py-2'>
            <p className='mb-2 font-bold'>開始使用：</p>
            <span className=''>加入官方 LINE 帳號 </span>
            <a
              href='https://line.me/R/ti/p/@022yivyp'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              https://line.me/R/ti/p/@022yivyp
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'unity-game',
      title: 'Unity 2D 橫向遊戲',
      thumbnail: gameProject,
      tagLabel: 'Unity 2D 橫向遊戲',
      modalContent: (
        <div className='space-y-4'>
          <p>
            這是一款以 Unity 開發的 2D
            橫向動作冒險遊戲。展示自主掌握新開發工具（Unity
            引擎）與程式語言（C#）的能力，並將抽象的遊戲邏輯具現化為可執行的產品原型。
          </p>
          <div className='py-2'>
            <p className='mb-2 font-bold'>開發技術：</p>
            <ul className='list-inside list-disc space-y-1 text-sm'>
              <li>遊戲引擎: Unity 6</li>
              <li>程式語言: C#</li>
              <li>角色控制器: 2D 物理參數，實現包含左右位移、垂直攀爬</li>
              <li>戰鬥系統: 實作基礎子彈發射邏輯與敵人行為模擬</li>
              <li>
                Tilemap & Sprite Shape 應用:
                運用瓦片地圖系統建構關卡，並結合成型路徑工具打造豐富細節的地形設計
              </li>
            </ul>
          </div>
          <div className='mt-4 flex flex-wrap justify-center gap-4'>
            <img
              src={game01}
              alt='Game Project Preview'
              className='pixel-card h-50 w-auto object-contain'
            />
            <img
              src={game02}
              alt='Game Project Preview'
              className='pixel-card h-50 w-auto object-contain'
            />
            <img
              src={game03}
              alt='Game Project Preview'
              className='pixel-card h-50 w-auto object-contain'
            />
          </div>
          <div className='py-2'>
            <p className='mb-2 font-bold'>遊戲特色：</p>
            <ul className='list-inside list-disc space-y-1 text-sm'>
              <li>內含三個關卡，每個關卡都有不同的敵人與障礙</li>
              <li>總共有三個生命，並設置收集金幣功能</li>
              <li>能跳躍與發動攻擊</li>
              <li>加入經典背景音與可愛音效</li>
            </ul>
          </div>
          <div className='py-2'>
            <p className='mb-2 font-bold'>遊戲連結：</p>
            <a
              href='https://line.me/R/ti/p/@022yivyp'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              https://tilemonstergame.netlify.app/
            </a>
          </div>
        </div>
      ),
    },
    // 您可以在這裡輕鬆加入更多專案
  ]

  return (
    <>
      <Card
        className='py-10 text-left text-gray-800'
        label='WORKS'
        labelColor='orange'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {WORKS_DATA.map((work) => (
            <div key={work.id} className='flex justify-center py-4'>
              <TiltedCard
                imageSrc={work.thumbnail}
                altText={work.title}
                containerHeight='300px'
                containerWidth='100%'
                imageHeight='300px'
                imageWidth='300px'
                rotateAmplitude={12}
                scaleOnHover={1.15}
                displayOverlayContent={true}
                onClick={() => setSelectedWork(work)}
                overlayContent={
                  <p
                    className={`pixel-tag px-2 py-1 text-xs font-bold text-white ${CONSTANTS.LABEL_COLORS.red}`}
                  >
                    {work.tagLabel}
                  </p>
                }
              />
            </div>
          ))}
        </div>
      </Card>

      <Modal
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        title={selectedWork?.title}
        size='2xl'
      >
        {selectedWork?.modalContent}
      </Modal>
    </>
  )
}
