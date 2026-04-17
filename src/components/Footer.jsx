function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M9.101 23.691v-9.223h-3.127v-3.168h3.127V9.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.168h-3.12V23.69h-3.816z" />
    </svg>
  )
}

function IconTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6.5a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  )
}

export default function Footer() {
  const social = [
    { href: '#', label: 'Facebook', bg: 'bg-[#3b5998]', Icon: IconFacebook },
    { href: '#', label: 'X', bg: 'bg-[#e66a5a]', Icon: IconTwitter },
    { href: '#', label: 'Instagram', bg: 'bg-[#6b705c]', Icon: IconInstagram },
  ]

  return (
    <footer className="bg-black py-14 text-white md:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <div className="flex flex-col items-center gap-2">
          {/* <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <svg viewBox="0 0 24 24" className="h-9 w-9 text-white" fill="currentColor" aria-hidden>
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l6 3.75v7.14l-6 3.75-6-3.75V7.93l6-3.75z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold">بيت الفكرة</span>
          <span className="text-sm font-medium text-white/80">Fekra House</span>
          <span className="text-xs text-white/50">Thinking Ideas House</span> */}
                                          <img src="../../public/Logo Horizontal Overlay Dark@2x 1.svg" alt="icon" className="w-30 h-15 hover:cursor-pointer" />

        </div>

        <div className="mt-10 flex gap-4">
          {social.map(({ href, label, bg, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform hover:scale-110 ${bg}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-white/50">حقوق النشر © 2026 بيت الفكرة كل الحقوق محفوظة</p>
      </div>
    </footer>
  )
}
