import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="overflow-visible bg-white py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <div
          dir="ltr"
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-x-0 lg:gap-y-0"
        >
          <div className="flex justify-center lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:z-20 lg:justify-end">
            <img
              src="/aboutImage.svg"
              alt="فريق العمل في بيت الفكرة"
              className="h-[360px] w-full max-w-[280px] rounded-[2rem] object-cover shadow-2xl sm:h-[400px] sm:max-w-[300px] md:h-[440px] md:max-w-[320px] lg:h-[500px] lg:max-w-[360px] xl:h-[520px] xl:max-w-[400px]"
            />
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-[2.5rem] bg-[#de6b5f] px-8 py-12 md:px-12 md:py-14 lg:col-span-12 lg:col-start-1 lg:row-start-1 lg:z-10 lg:py-16 lg:pl-0 lg:pr-10 xl:pr-14">
            <div className="pointer-events-none absolute top-10 h-20 w-20 rounded-full border border-white/30 max-lg:left-10 lg:left-[calc(100%*5/12+0.75rem)]" />
            <div className="pointer-events-none absolute bottom-10 left-10 h-24 w-24 rotate-12 rounded-2xl border border-white/20" />
            <svg
              className="pointer-events-none absolute bottom-2 right-20 origin-center rotate-[90deg] h-[56px] w-[72px] text-[#f59e0b]/60 opacity-70"
              viewBox="0 0 72 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M36 52 66 10H6L36 52z"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinejoin="round"
              />
            </svg>

            <div
              dir="rtl"
              className="relative z-10 text-right lg:pl-[calc(100%*7/12+1.5rem)]"
            >
              <h2 className="text-4xl font-semibold md:text-5xl">
                <span className="text-[#FAFAF7]">من</span>{" "}
                <span className="text-[#FFDE86]">نحن</span>
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-[#FAFAF7]">
                شركة متخصصة تساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى
                حلول رقمية ناجحة من خلال:
              </p>

              <ul className="mt-10 flex w-full flex-col items-start gap-6">
                {["تطوير الحلول البرمجية", "دعم الابتكار"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-start gap-4 text-xl font-light text-[#FAFAF7]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#fde68a]">
                      <Check className="h-5 w-5 text-[#fde68a]" />
                    </span>

                    <span className="min-w-0 text-right">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
