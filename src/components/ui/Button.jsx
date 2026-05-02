export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50'

  const variants = {
    primary:
      'bg-[#ef6b5b] text-white shadow-md hover:bg-[#e85a48] hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-[#ef6b5b]',
    outline:
      'border-2 border-[#ef6b5b] bg-white text-[#ef6b5b] hover:bg-[#ef6b5b]/5 hover:-translate-y-0.5 focus-visible:outline-[#ef6b5b]',
    ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100',
    dark: 'rounded-full border bg-white text-xl font-light  text-[#040303] border border-[#F57167] hover:bg-[#F57167] hover:text-white hover:cursor-pointer',
  }

  return (
    <button type={type} className={`${base} ${variants[variant] ?? variants.primary} ${className}`} {...props}>
      {children}
    </button>
  )
}
