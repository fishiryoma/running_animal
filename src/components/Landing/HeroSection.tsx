import { Card } from '../Card'
import { CONSTANTS } from '../../constants'

export function HeroSection() {
  return (
    <Card className={`text-left ${CONSTANTS.TEXT_COLORS.dark}`} label="HELLO" labelColor="orange">
      <h1 className='font-pixel mb-4 text-4xl font-bold uppercase'>
        Hello, I'm Wanyu.
      </h1>
      <h1 className='font-pixel mb-4 text-4xl font-bold uppercase'>
        A passionate Frontend Developer.
      </h1>
    </Card>
  )
}
