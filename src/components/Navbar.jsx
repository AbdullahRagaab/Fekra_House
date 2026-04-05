import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content.js'

function scrollToId(id) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#FAFAF7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => scrollToId('home')}
          className="flex shrink-0 items-center gap-3 text-right transition-opacity hover:opacity-90"
        >

                  <img src="../../public/Logo Horizontal Light@0.5x 1.svg" alt="icon" className="w-30 h-15 hover:cursor-pointer" />

        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className={`rounded-full px-3 py-2 text-lg font-light transition-colors hover:cursor-pointer hover:text-[#ef6b5b] ${
                link.id === 'home' ? 'text-[#ef6b5b]' : 'text-[#040303]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden  px-3 py-1.5 text-lg font-light text-[#040303] sm:inline-block">
            العربية
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white lg:hidden"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-100 bg-[#FAFAF7] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className="rounded-xl px-3 py-3 text-right text-base font-bold text-neutral-800 hover:bg-white"
                onClick={() => {
                  scrollToId(link.id)
                  setOpen(false)
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
