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
  <div dir="ltr" className="flex animate-marquee gap-12 md:gap-16">
    {row.map((logo, i) => (


<div
  key={i}
  className="flex h-20 shrink-0 items-center justify-center px-6 md:h-24"
>
  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">

    <img
  src={logo}
  alt=""
  className="h-12 w-auto object-contain opacity-90 md:h-14"
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
