import { Check } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-[#ffffff] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-stretch lg:gap-0">
          <div className="relative flex-1 lg:w-1/2">
            <div className="pointer-events-none absolute -left-8 top-1/4 h-40 w-40 rounded-full border border-white/10" />
            <div className="relative z-10 lg:-ml-8 lg:mt-8 lg:pb-8">
              <img
                src="../../public/aboutImage.svg"
                alt="فريق العمل في بيت الفكرة"
                className="mx-auto w-3/4 max-w-lg rounded-[2.5rem] object-cover shadow-2xl lg:max-w-none"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute bottom-8 right-4 hidden h-24 w-24 rotate-12 rounded-3xl border border-white/10 lg:block" />
          </div>

          <div className="relative flex-2 overflow-hidden rounded-3xl bg-[#e57368] p-8 shadow-xl md:p-12 lg:w-1/2 lg:rounded-l-none lg:rounded-r-[2.5rem]">
            <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 rounded-full border border-white/25" />
            <div className="pointer-events-none absolute bottom-8 right-10 h-20 w-20 rotate-6 rounded-2xl border border-white/20" />

            <h2 className="text-4xl font-black md:text-5xl">
              <span className="text-[#fde68a]">من</span>{' '}
              <span className="text-white">نحن</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/95">
              شركة متخصصة تساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى حلول رقمية ناجحة من خلال:
            </p>
            <ul className="mt-10 space-y-5">
              {['تطوير الحلول البرمجية', 'دعم الابتكار'].map((item) => (
                <li key={item} className="flex items-center justify-end gap-4 text-right text-lg font-semibold text-white">
                  <span>{item}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/30">
                    <Check className="h-5 w-5 text-white" strokeWidth={3} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
