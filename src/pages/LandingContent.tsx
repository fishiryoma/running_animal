import { RippleButton } from '../components/RippleButton'
import '../styles/Cursors.css'

export function LandingContent() {
  const themeColors = [
    { name: 'Muted Forest', hsl: 'hsl(165, 50%, 30%)', hex: '#267362' },
    { name: 'Dark Ocean', hsl: 'hsl(180, 100%, 25%)', hex: '#008080' },
    { name: 'Midnight', hsl: 'hsl(190, 40%, 20%)', hex: '#1E4047' },
    { name: 'Muted Sage', hsl: 'hsl(175, 20%, 60%)', hex: '#85ADA9' },
    { name: 'Steel Teal', hsl: 'hsl(185, 15%, 40%)', hex: '#577175' },
  ]

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-6 text-center text-white'>
      {/* 主標題 */}
      <h1 className='mb-6 text-5xl font-extrabold tracking-tight drop-shadow-lg'>
        探索奇幻森林
      </h1>

      {/* 描述文案 */}
      <p className='mb-12 max-w-lg text-xl leading-relaxed opacity-90 drop-shadow-md'>
        隨著貓咪的腳步，跨越光影交織的邊界，
        <br />
        發現隱藏在森林深處那不為人知的古老秘密。
      </p>

      {/* 行動按鈕：目前僅保留幽靈波紋款式 */}
      <div className='mb-16'>
        <RippleButton onClick={() => alert('進入森林')}>開始探索</RippleButton>
      </div>

      {/* 主題色展示區 */}
      <div className='mt-8 w-full max-w-4xl'>
        <h2 className='mb-6 text-2xl font-bold opacity-80'>
          推薦主題色：藍綠之森
        </h2>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-5'>
          {themeColors.map((color, index) => (
            <div key={index} className='group flex flex-col items-center'>
              <div
                className='h-16 w-16 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110'
                style={{ backgroundColor: color.hsl }}
              />
              <span className='mt-2 text-xs font-medium opacity-70'>
                {color.name}
              </span>
              <span className='text-[10px] opacity-50'>{color.hex}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
