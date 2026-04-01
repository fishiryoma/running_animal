import React from 'react'
import { Card } from '../Card'
import { CONSTANTS } from '../../constants'

interface SkillItemProps {
  name: string
  level: number
  icon?: string // 暫時用文字代替圖示
  color?: keyof typeof CONSTANTS.LABEL_COLORS
  suffix?: React.ReactNode
}

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  level,
  color = 'blue',
  suffix,
}) => {
  const colorClass = CONSTANTS.LABEL_COLORS[color] || CONSTANTS.LABEL_COLORS.blue

  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-1">
        <span className="font-mono font-bold tracking-tight">{name}</span>
        <span className="font-mono text-xs text-gray-500">
          {suffix ?? `LVL ${level}`}
        </span>
      </div>
      <div className="h-4 w-full bg-gray-200 pixel-bar-bg p-0.5">
        <div
          className={`h-full ${colorClass}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* FRONTEND */}
        <Card label="FRONTEND" labelColor="blue">
          <div className="pt-2">
            <SkillItem name="JavaScript / TypeScript" level={100} color="blue" suffix="" />
            <SkillItem name="React.js / Vue.js" level={100} color="blue" suffix="" />
            <SkillItem name="Tailwind / Material UI" level={100} color="blue" suffix="" />
            <SkillItem name="Axios / Zustand / SWR" level={100} color="blue" suffix="" />
            <SkillItem name="Recharts / Chart.js / i18n" level={100} color="blue" suffix="" />
          </div>
        </Card>

        {/* BACKEND */}
        <Card label="BACKEND" labelColor="green">
          <div className="pt-2">
            <SkillItem name="Python" level={60} color="green" />
            <SkillItem name="MySQL" level={40} color="green" />
            <SkillItem name="C#" level={30} color="green" />
          </div>
        </Card>

        {/* LANGUAGES */}
        <Card label="LANGUAGES" labelColor="red">
          <div className="pt-2">
            <SkillItem name="Mandarin" color="red" level={100} suffix="Native"/>
            <SkillItem name="Japanese" color="red" level={80} suffix="Fluent, JLPT N1" />
            <SkillItem name="English" color="red" level={70} suffix="Fluent, TOEIC 835" />
          </div>
        </Card>

        {/* OTHER */}
        <Card label="OTHER" labelColor="dark">
          <div className="pt-2">
            <SkillItem name="Figma / UX Design" level={60} color="dark" />
            <SkillItem name="Cloud ( Firebase / AWS )" level={60} color="dark" />
            <SkillItem name="Unity" level={50} color="dark" />
          </div>
        </Card>
      </div>
    </div>
  )
}
