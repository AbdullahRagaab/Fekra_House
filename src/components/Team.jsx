import { teamMembers } from '../data/content.js'

function TeamCard({ member }) {
  const accentColorClass =
    member.accent === 'bg-[#f1665c]' ? 'bg-[#F57167]' : 'bg-[#FFDE86]'

  const accentPositionClass =
    member.accent === 'bg-[#f1665c]'
      ? 'right-[20%] translate-x-1/2'
      : 'left-[20%] -translate-x-1/2'

  const isSecondCard = member.name === 'سارة منصور'
  const isThirdCard = member.name === 'على أحمد'
  const isFirstCard = member.name === 'كريم عادل'

  return (
    <article className="group relative w-[260px] shrink-0 px-2 sm:w-[280px]">
      <div
        className={`relative rounded-xl ${member.bg} pt-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
      >
        <div
          className={`pointer-events-none absolute -top-15 z-20 h-7 w-7 rounded-full ${accentPositionClass} ${accentColorClass} opacity-90`}
        />
        {!isThirdCard && (
          <div
            className={`pointer-events-none absolute rounded-xl bg-white/90 opacity-90 ${
              isFirstCard
                ? 'left-8 top-1/3 h-6 w-6'
                : isSecondCard
                ? 'right-4 top-[62%] h-6 w-6 z-100'
                : 'right-4 top-1/2 h-4 w-4'
            }`}
          />
        )}

        <div className="relative mx-auto flex h-[200px] w-full items-end justify-center overflow-visible">
          <img
            src={member.image}
            alt={member.name}
            // className="relative z-[1] max-h-[290px] w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
             className="relative z-10 max-h-[300px] w-auto object-contain -mt-16 grayscale transition-all duration-300 group-hover:grayscale-0"
            loading="lazy"
          />
        </div>

        <div className="rounded-b-xl bg-[#3d5a6c] px-3 py-3 text-center">
          <span className="text-lg font-light text-[#FAFAF7]">{member.name}</span>
        </div>
      </div>
      <p className="mt-3 text-center text-xl font-light text-[#040303]">{member.role}</p>
    </article>
  )
}

export default function Team() {
  const loop = [...teamMembers, ...teamMembers]

  return (
    <section id="team" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-30 text-center text-2xl font-bold md:text-4xl">
          <span className="text-[#040303]">تعرف على </span>
          <span className="text-[#F57167]">فريقنا</span>
        </h2>

        <div className="hidden gap-8 md:grid md:grid-cols-3 md:justify-items-center lg:gap-12">
          {teamMembers.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        <div className="relative overflow-hidden md:hidden [mask-image:linear-gradient(to_left,transparent,black_5%,black_95%,transparent)]">
          <div dir="ltr" className="flex w-max animate-marquee-team gap-6 py-2">
            {loop.map((m, i) => (
              <TeamCard key={`${m.name}-${i}`} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
