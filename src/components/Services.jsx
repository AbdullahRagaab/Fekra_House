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
      <p className="mb-10 text-center text-2xl font-bold md:text-4xl">
          <span className="text-[#040303]">خدمات</span>{" "}
          <span className="text-[#F57167]">بيت الفكرة</span>
      </p>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="flex h-full min-h-[20rem] w-full flex-col rounded-2xl border border-white/10 bg-white p-6 md:min-h-[22rem] md:p-8">
            <div className="mb-1 flex items-center gap-3">
              <div className="relative flex size-28 shrink-0 cursor-pointer items-center justify-center md:-left-5 md:size-32">
                <img
                  src={encodeURI('/servicesLogo.svg')}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <h2 className="text-right text-2xl font-bold block leading-snug text-[#040303] md:text-3xl">
              خدماتنا في قطاع{' '}
              <span className="text-[#F57167] block">الابتكار والتدريب</span>
            </h2>
            <ul className="mt-8 w-full space-y-4 text-right ">
              {['تطوير الحلول البرمجية', 'دعم الابتكار'].map((item) => (
                <li key={item} className="flex w-full items-center justify-start gap-3 text-xl text-[#828181]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#F57167] rounded-full bg-[#fff]">
                    <Check className="h-4 w-4 text-[#F57167]" strokeWidth={2} />
                  </span>
                  <span className="min-w-0 flex-1 text-right">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {visible.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              desc={s.desc}
              icon={s.icon}
              variant="cream"
              collapsibleDesc
            />
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-12 flex justify-center ">
            <Button
              type="button"
              variant="dark"
              className="min-w-[200px] rounded-full px-8 "
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
