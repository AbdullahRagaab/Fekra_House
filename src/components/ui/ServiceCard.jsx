import { useState } from 'react'
import { ServiceIcon } from '../../utils/serviceIcons.jsx'

const PREVIEW_MAX_CHARS = 96

function truncateForPreview(text, maxChars) {
  const t = text.trim()
  if (t.length <= maxChars) return t
  let cut = t.slice(0, maxChars)
  const lastSpace = cut.lastIndexOf(' ')
  if (lastSpace > maxChars * 0.5) cut = cut.slice(0, lastSpace)
  return `${cut.trim()}…`
}

export default function ServiceCard({ title, desc, icon, variant = 'cream', collapsibleDesc = false }) {
  const [descExpanded, setDescExpanded] = useState(false)
  const shells = {
    cream: 'bg-[#FAFAF7] border-b-10 border-[#f7d794]',
    black: 'bg-[#FAFAF7] border-b-10 border-[#3B6273]',
  }

  const trimmed = desc.trim()
  const hasLongDesc = collapsibleDesc && trimmed.length > PREVIEW_MAX_CHARS
  const previewText = truncateForPreview(trimmed, PREVIEW_MAX_CHARS)
  const bodyText = collapsibleDesc && hasLongDesc && !descExpanded ? previewText : trimmed

  return (
    <article
      className={`group flex h-full min-h-[20rem] flex-col items-center rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[22rem] md:p-8 ${shells[variant] ?? shells.cream}`}
    >
      <div className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110">
        <ServiceIcon name={icon} className="h-full w-full max-h-10 max-w-10" />
      </div>
      <h3 className="mb-2 text-lg font-extrabold text-neutral-900 md:text-xl">{title}</h3>

      {collapsibleDesc ? (
        <div className="flex w-full min-w-0 flex-1 flex-col">
          <p className="text-sm leading-relaxed text-neutral-600 [overflow-wrap:anywhere]">{bodyText}</p>
          {hasLongDesc && (
            <button
              type="button"
              onClick={() => setDescExpanded((e) => !e)}
              className="mt-3 text-sm font-medium text-[#ef6b5b] underline-offset-4 hover:underline hover:cursor-pointer"
            >
              {descExpanded ? 'عرض أقل' : 'المزيد'}
            </button>
          )}
        </div>
      ) : (
        <p className="flex-1 text-sm leading-relaxed text-neutral-600">
          {desc}{' '}
          <span className="font-medium text-[#ef6b5b] opacity-0 transition-opacity group-hover:opacity-100">المزيد</span>
        </p>
      )}
    </article>
  )
}
