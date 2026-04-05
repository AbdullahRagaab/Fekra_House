import { useEffect, useState } from 'react'
import { Code2, Lightbulb } from 'lucide-react'
import Button from './ui/Button.jsx'
import { heroWords } from '../data/content.js'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroWords.length)
    }, 2600)
    return () => window.clearInterval(t)
  }, [])

  const current = heroWords[index]

  return (
    <section id="home" className="relative overflow-hidden bg-[#FAFAF7] px-4 pb-16 pt-10 md:px-8 md:pb-24 lg:px-12 lg:pt-14">
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#f7c948]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-[#ef6b5b]/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-right">
          <h1 className="text-4xl font-bold leading-snug text-[#040303] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl">
            نبني حلولاً{' '}
            <span className="relative inline-block min-h-[1.2em] align-bottom">
              <span
                key={index}
                className={`hero-word-enter inline-block pb-1 ${current.className}`}
              >
                {current.text}
              </span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-2xl leading-relaxed text-[#828181] lg:mx-0 lg:max-w-none lg:text-2xl">
            نحول الأفكار المبتكرة إلى منتجات رقمية حقيقية من خلال التدريب والاستشارات وتطوير البرمجيات.
          </p>



          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
  <Button
    type="button"
    onClick={() => scrollToId('contact')}
    className="text-xl text-[##FAFAF7] px-8 py-2.5 font-light hover:cursor-pointer"
  >
    تواصل معنا
  </Button>

  <Button
    type="button"
    variant="outline"
    onClick={() => scrollToId('services')}
    className="text-xl text-[#040303] px-8 py-2.5 font-light hover:cursor-pointer"
  >
    عرض خدماتنا
  </Button>
</div>

<div className="mt-10 flex flex-col items-center justify-center gap-3 text-base text-[#040303] lg:items-start">
  <p>
    <span className="font-bold text-lg text-[#ef6b5b]">+8000</span> متدرب في برامج الابتكار
  </p>
  <p>
    <span className="font-bold text-lg text-[#ef6b5b]">+5</span> سنوات خبرة في تطوير الحلول الرقمية
  </p>
</div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-md">


            <div className="relative mx-auto aspect-[3/4] w-[78%] overflow-hidden rounded-[2.5rem] bg-transparent">

              <img src="../../public/heroImage.png" alt="icon" className="w-full h-full object-contain bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
