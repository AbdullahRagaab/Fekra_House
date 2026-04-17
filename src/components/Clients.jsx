import { partners } from '../data/content.js'
import { useEffect } from "react";



export default function Clients() {
  const row = [...partners, ...partners]
  console.log('Partners:', partners)
  console.log('Row:', row)

  useEffect(() => {
  partners.forEach((src) => {
    // const img = new Image();
    // img.src = src;
    const img = new Image();
img.src = src;
img.loading = "eager";
  });
}, []);

  return (
    <section className="bg-[#1e3a5f] py-16 md:py-20" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

                <div className="hidden">
          {partners.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>


        <h2 id="clients-heading" className="mb-12 text-center text-xl font-bold text-neutral-200 md:text-2xl lg:text-3xl">
          نفخر بالعمل مع أكثر من{' '}
          <span className="text-[#ff6b6b]" dir="ltr">
            +20
          </span>{' '}
          شريك وعميل
        </h2>

        {/* <div className="relative overflow-hidden [mask-image:linear-gradient(to_left,transparent,black_8%,black_92%,transparent)]">
          <div dir="ltr" className="flex w-max animate-marquee gap-12 md:gap-16">
            {row.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-16 shrink-0 items-center justify-center px-6 transition-all duration-300 md:h-20"
              >
                <span
                  className="whitespace-nowrap text-lg font-bold text-neutral-400 grayscale transition-all duration-300 hover:scale-105 hover:text-white hover:grayscale-0 md:text-xl"
                  title={name}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div> */}

        <div className="relative overflow-hidden">
  <div dir="ltr" className="flex animate-marquee  gap-12 md:gap-16">
    {row.map((logo, i) => (
//       <div
//         key={i}
//         className="flex h-16 shrink-0 items-center justify-center px-6 md:h-20"
//       >
//         {/* <img
//           src={logo}
//           alt=""
//           className="h-10 object-contain grayscale opacity-100 transition-all duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100 md:h-12"
//           loading="lazy"
//         /> */}
//         <img
//   src={logo}
//   alt=""
//   className="h-10 object-contain opacity-90 transition-all duration-300 hover:scale-105 hover:grayscale-0 md:h-12"
// />
//       </div>

<div
  key={i}
  className="flex h-16 shrink-0 items-center justify-center px-6 md:h-20"
>
  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
    {/* <img
      src={logo}
      alt=""
      className="h-10 object-contain opacity-90 transition-all duration-300 hover:scale-105 md:h-12"
    /> */}
    <img
  src={logo}
  alt=""
  className="h-10 object-contain opacity-90"
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
