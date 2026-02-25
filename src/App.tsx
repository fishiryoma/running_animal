import { BgContainer } from './layout/BgContainer'
import { LandingContent } from './pages/LandingContent'

function App() {
  return (
    <div className='min-h-[300vh] bg-black'>
      <BgContainer>
        {/* 頁面內容物件：包含所有標題、文案與按鈕展示 */}
        <LandingContent />
      </BgContainer>
    </div>
  )
}

export default App
