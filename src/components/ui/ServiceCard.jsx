import { ServiceIcon } from '../../utils/serviceIcons.jsx'

export default function ServiceCard({ title, desc, icon, variant = 'cream' }) {
  const shells = {
    cream: 'bg-[#fffdf9] border-b-8 border-[#f7d794]',
    white: 'bg-white border-b-8 border-[#1e3a5f]/20',
  }

  return (
    <article
      className={`group flex flex-col items-center rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8 ${shells[variant] ?? shells.cream}`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ef6b5b]/15 to-[#f7c948]/25 text-[#ef6b5b] transition-transform duration-300 group-hover:scale-110">
        <ServiceIcon name={icon} className="h-8 w-8" />
      </div>
      <h3 className="mb-2 text-lg font-extrabold text-neutral-900 md:text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">
        {desc}{' '}
        <span className="font-medium text-[#ef6b5b] opacity-0 transition-opacity group-hover:opacity-100">المزيد</span>
      </p>
    </article>
  )
}
