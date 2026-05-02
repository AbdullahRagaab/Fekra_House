import { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section dir='ltr' id="contact" className="relative overflow-hidden bg-[#f9fafb] py-16 md:py-24">
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#fde68a]/80" />
      <div className="pointer-events-none absolute left-8 top-12 h-24 w-24 rounded-full border-2 border-[#fbbf24]/60" />
      <div className="pointer-events-none absolute bottom-12 right-12 h-32 w-32 rounded-full border-2 border-neutral-400/40" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="bg-[#F57167] p-8 text-white md:p-10 lg:col-span-5 lg:rounded-s-3xl">
              <h2 className="text-right text-2xl font-medium text-[#FAFAF7] md:text-3xl">تواصل معنا</h2>
              <ul className="mt-10 space-y-8 text-right">
                <li className="flex items-start justify-end gap-4">
                  <div>
                    <p className="font-light text-lg leading-relaxed">26 يوليو الشيخ زايد بالجيزة</p>
                  </div>
                  <MapPin className="mt-1 h-6 w-6 shrink-0 opacity-95" aria-hidden />
                </li>
                <li className="flex items-start justify-end gap-4">
                  <a href="mailto:Support@FekraHouse.com" className="font-light text-lg hover:underline">
                    Support@FekraHouse.com
                  </a>
                  <Mail className="mt-1 h-6 w-6 shrink-0 opacity-95" aria-hidden />
                </li>
                <li className="flex items-start justify-end gap-4">
                  <a href="tel:+201053796553" className="font-light text-lg hover:underline" dir="ltr">
                    +201053796553
                  </a>
                  <Phone className="mt-1 h-6 w-6 shrink-0 opacity-95" aria-hidden />
                </li>
              </ul>
            </div>

            <div className="py-10 px-35 lg:col-span-7">
              <h3 className="text-right text-2xl font-medium text-[#040303] md:text-3xl">حول أفكارك إلى واقع</h3>
              <p className="mt-3 text-right text-[#828181] md:text-xl ">
                تواصل مع فريق الخبراء لتطوير مشروعك ووضع خطة واضحة
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-right">
                <label className="block">
                  <span className="sr-only">رقم الهاتف</span>
                  <span className="relative flex items-center">
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="رقم الهاتف"
                      dir="rtl"
                      className="w-full rounded-xl bg-[#e5e7eb] px-4 py-3.5 pe-12 text-right text-neutral-900 placeholder:text-right placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#f87171]"
                    />
                  </span>
                </label>
                <label className="block">
                  <span className="sr-only">الاسم بالكامل</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="الاسم بالكامل"
                    dir="rtl"
                    className="w-full rounded-xl bg-[#e5e7eb] px-4 py-3.5 text-right text-neutral-900 placeholder:text-right placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#f87171]"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">الرسالة</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="اكتب رسالتك هنا"
                    dir="rtl"
                    className="w-full resize-y rounded-xl bg-[#e5e7eb] px-4 py-3.5 text-right text-neutral-900 placeholder:text-right placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#f87171]"
                  />
                </label>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-[#F57167] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-red-500 hover:shadow-lg"
                  >
                    {sent ? 'تم الإرسال — شكراً لك' : 'تواصل معنا'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
