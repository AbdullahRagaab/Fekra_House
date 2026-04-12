// import { Check } from 'lucide-react'

// export default function About() {
//   return (
//     <section id="about" className="bg-[#ffffff] py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4 md:px-8">
//         <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-stretch lg:gap-0">
//           <div className="relative flex-1 lg:w-1/2">
//             <div className="pointer-events-none absolute -left-8 top-1/4 h-40 w-40 rounded-full border border-white/10" />
//             <div className="relative z-10 lg:-ml-8 lg:mt-8 lg:pb-8">
//               <img
//                 src="../../public/aboutImage.svg"
//                 alt="فريق العمل في بيت الفكرة"
//                 className="mx-auto w-3/4 max-w-lg rounded-[2.5rem] object-cover shadow-2xl lg:max-w-none"
//                 loading="lazy"
//               />
//             </div>
//             <div className="pointer-events-none absolute bottom-8 right-4 hidden h-24 w-24 rotate-12 rounded-3xl border border-white/10 lg:block" />
//           </div>

//           <div className="relative flex-2 overflow-hidden rounded-3xl bg-[#e57368] p-8 shadow-xl md:p-12 lg:w-1/2 lg:rounded-l-none lg:rounded-r-[2.5rem]">
//             <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 rounded-full border border-white/25" />
//             <div className="pointer-events-none absolute bottom-8 right-10 h-20 w-20 rotate-6 rounded-2xl border border-white/20" />

//             <h2 className="text-4xl font-black md:text-5xl">
//               <span className="text-[#fde68a]">من</span>{' '}
//               <span className="text-white">نحن</span>
//             </h2>
//             <p className="mt-8 text-lg leading-relaxed text-white/95">
//               شركة متخصصة تساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى حلول رقمية ناجحة من خلال:
//             </p>
//             <ul className="mt-10 space-y-5">
//               {['تطوير الحلول البرمجية', 'دعم الابتكار'].map((item) => (
//                 <li key={item} className="flex items-center justify-end gap-4 text-right text-lg font-semibold text-white">
//                   <span>{item}</span>
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/30">
//                     <Check className="h-5 w-5 text-white" strokeWidth={3} />
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// import { Check } from 'lucide-react'

// export default function About() {
//   return (
//     <section id="about" className="bg-[#ffffff] py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4 md:px-8">
//         {/* force ltr عشان الـ RTL في المشروع مش يعكس الترتيب */}
//         <div className="relative flex flex-row items-stretch rounded-3xl" style={{ direction: 'ltr' }}>

//           {/* الصورة على الشمال */}
//           <div className="relative z-10 w-1/4  shrink-0">
//             <img
//               src="../../public/aboutImage.svg"
//               alt="فريق العمل في بيت الفكرة"
//               className="h-full w-full rounded-3xl object-cover shadow-2xl"
//               loading="lazy"
//             />
//           </div>

//           {/* الكارت الأحمر على اليمين يتداخل مع الصورة */}
//           <div className="relative -ml-10 flex flex-1 flex-col justify-center overflow-hidden rounded-3xl bg-[#e57368] p-10 shadow-xl md:p-14" style={{ direction: 'rtl' }}>
//             {/* الدوائر الزخرفية */}
//             <div className="pointer-events-none absolute left-16 top-8 h-20 w-20 rounded-full border-2 border-white/30" />
//             <div className="pointer-events-none absolute bottom-8 right-10 h-14 w-14 rotate-12 rounded-xl border-2 border-white/25" />

//             <h2 className="text-right text-4xl font-black md:text-5xl">
//               <span className="text-white">من </span>
//               <span className="text-[#fde68a]">نحن</span>
//             </h2>
//             <p className="mt-6 text-right text-lg leading-relaxed text-white/95">
//               شركة متخصصة تساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى حلول رقمية ناجحة من خلال:
//             </p>
//             <ul className="mt-8 space-y-5">
//               {['تطوير الحلول البرمجية', 'دعم الابتكار'].map((item) => (
//                 <li key={item} className="flex items-center justify-end gap-4 text-right text-lg font-semibold text-white">
//                   <span>{item}</span>
//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/10">
//                     <Check className="h-4 w-4 text-white" strokeWidth={3} />
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }




// import { Check } from 'lucide-react'

// export default function About() {
//   return (
//     <section id="about" className="bg-[#ffffff] pb-16 pt-32 md:pb-24">
//       <div className="mx-auto max-w-7xl px-4 md:px-8">
//         <div className="relative flex flex-row items-end rounded-3xl" style={{ direction: 'ltr' }}>

//           <div className="relative z-10 w-2/5 shrink-0 -mb-10 -mt-10">
//             <img
//               src="../../public/aboutImage.svg"
//               alt="فريق العمل في بيت الفكرة"
//               className="h-full w-full rounded-3xl object-cover shadow-2xl"
//               loading="lazy"
//             />
//           </div>

//           <div
//             className="relative -ml-10 flex flex-1 flex-col justify-center overflow-hidden rounded-3xl bg-[#e57368] p-10 shadow-xl md:p-14"
//             style={{ direction: 'rtl', minHeight: '420px' }}
//           >
//             <div className="pointer-events-none absolute left-16 top-8 h-20 w-20 rounded-full border-2 border-white/30" />
//             <div className="pointer-events-none absolute bottom-8 right-10 h-14 w-14 rotate-12 rounded-xl border-2 border-white/25" />

//             <h2 className="text-right text-4xl font-black md:text-5xl">
//               <span className="text-white">من </span>
//               <span className="text-[#fde68a]">نحن</span>
//             </h2>
//             <p className="mt-6 text-right text-lg leading-relaxed text-white/95">
//               شركة متخصصة تساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى حلول رقمية ناجحة من خلال:
//             </p>
//             <ul className="mt-8 space-y-5">
//               {['تطوير الحلول البرمجية', 'دعم الابتكار'].map((item) => (
//                 <li key={item} className="flex items-center justify-end gap-4 text-right text-lg font-semibold text-white">
//                   <span>{item}</span>
//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/10">
//                     <Check className="h-4 w-4 text-white" strokeWidth={3} />
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }








import { Check } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="relative mx-auto max-w-7xl px-4">

        {/* 🔴 الكارد الأحمر */}
        <div className="relative rounded-[2.5rem] bg-[#de6b5f] px-8 py-16 md:px-16 overflow-visible">

          {/* Shapes */}
          <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-white/30" />
          <div className="absolute bottom-10 right-10 h-24 w-24 rounded-2xl border border-white/20 rotate-12" />
          <div className="absolute right-20 bottom-6 w-0 h-0 border-l-[40px] border-l-transparent border-t-[60px] border-t-[#f59e0b]/60 border-r-[40px] border-r-transparent opacity-70" />

          {/* 🖼️ الصورة */}
          <div className="absolute left-10 -top-16 md:-top-10 w-[280px] md:w-[340px] lg:w-[400px]">
            <img
                            src="../../public/aboutImage.svg"
              alt="فريق العمل في بيت الفكرة"
              className="h-[420px] md:h-[500px] w-full object-cover rounded-[2rem] shadow-2xl"
            />
          </div>

          {/* المحتوى */}
          <div className="ml-auto max-w-xl text-right">

            <h2 className="text-4xl md:text-5xl font-black">
              <span className="text-[#fde68a]">من</span>{" "}
              <span className="text-white">نحن</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/90">
              شركة متخصصة تساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى
              حلول رقمية ناجحة من خلال:
            </p>

            <ul className="mt-10 space-y-6">
              {["تطوير الحلول البرمجية", "دعم الابتكار"].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-end gap-4 text-white text-lg font-semibold"
                >
                  <span>{item}</span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#fde68a]">
                    <Check className="h-5 w-5 text-[#fde68a]" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}