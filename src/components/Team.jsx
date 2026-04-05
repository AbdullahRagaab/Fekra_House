import { teamMembers } from '../data/content.js'

function TeamCard({ member }) {
  return (
    <article className="group relative w-[260px] shrink-0 px-2 sm:w-[280px]">
      <div
        className={`relative overflow-hidden rounded-[2.5rem] ${member.bg} pb-14 pt-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
      >
        <div
          className={`pointer-events-none absolute left-1/2 top-4 h-10 w-10 -translate-x-1/2 rounded-full ${member.accent} opacity-90`}
        />
        <div className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 rounded-full bg-white/90 opacity-80" />

        <div className="relative mx-auto flex h-[220px] w-[200px] items-end justify-center">
          <img
            src={member.image}
            alt={member.name}
            className="relative z-[1] max-h-[260px] w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 rounded-b-[2rem] bg-[#3d5a6c] px-3 py-3 text-center">
          <span className="text-base font-bold text-white">{member.name}</span>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-neutral-500">{member.role}</p>
    </article>
  )
}

export default function Team() {
  const loop = [...teamMembers, ...teamMembers]

  return (
    <section id="team" className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-black md:text-4xl">
          <span className="text-neutral-600">تعرف على </span>
          <span className="text-[#f1665c]">فريقنا</span>
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
