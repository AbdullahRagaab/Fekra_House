import { useState } from 'react'
import { Check } from 'lucide-react'
import ServiceCard from './ui/ServiceCard.jsx'
import Button from './ui/Button.jsx'
import { innovationServices } from '../data/content.js'

const INITIAL = 5

export default function Services() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? innovationServices : innovationServices.slice(0, INITIAL)
  const hiddenCount = Math.max(0, innovationServices.length - INITIAL)

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="mb-10 text-center text-2xl font-black text-[#e57373] md:text-3xl">خدمات بيت الفكرة</p>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col rounded-2xl border border-white/10 bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">

              <img src="../../public/Logo Horizontal Light@0.5x 1.svg" alt="icon" className="w-30 h-15 hover:cursor-pointer" />

            </div>
            <h2 className="text-right text-2xl font-black leading-snug text-black md:text-3xl">
              خدماتنا في قطاع{' '}
              <span className="text-[#e57373]">الابتكار والتدريب</span>
            </h2>
            <ul className="mt-8 space-y-4 text-right">
              {['تطوير الحلول البرمجية', 'دعم الابتكار'].map((item) => (
                <li key={item} className="flex items-center justify-end gap-3 text-neutral-200">
                  <span>{item}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e57373]">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {visible.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} variant="cream" />
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-12 flex justify-center">
            <Button
              type="button"
              variant="dark"
              className="min-w-[200px] rounded-full px-8"
              onClick={() => setExpanded((e) => !e)}
            >
              {expanded ? 'إخفاء الخدمات' : 'اظهر جميع الخدمات'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
