import { partners } from '../data/content.js'
import { useEffect } from "react";



export default function Clients() {
  const row = [...partners, ...partners]
  console.log('Partners:', partners)
  console.log('Row:', row)

  useEffect(() => {
  partners.forEach((src) => {

    const img = new Image();
      img.src = src;
      img.loading = "eager";
   });
}, []);

  return (
    <section className="py-16 md:py-20" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

                <div className="hidden">
          {partners.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>


        <h2 id="clients-heading" className="mb-12 text-center text-xl font-bold text-[#040303] md:text-2xl lg:text-3xl">
          نفخر بالعمل مع أكثر من{' '}
          <span className="text-[#ff6b6b]" dir="ltr">
            +20
          </span>{' '}
          شريك وعميل
        </h2>



        <div className="relative overflow-hidden">
          <div dir="ltr" className="flex animate-marquee gap-3 md:gap-4">
            {row.map((logo, i) => (
              <div
                key={i}
                className="flex h-24 shrink-0 items-center justify-center px-1.5 md:h-32 md:px-2"
              >
                <div className="rounded-xl bg-white/10 px-2 py-1.5 backdrop-blur-sm md:px-2.5 md:py-2">
                  <img
                    src={logo}
                    alt=""
                    className="h-20 w-auto object-contain opacity-90 md:h-24"
                    onError={() => console.log("FAILED:", logo)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
