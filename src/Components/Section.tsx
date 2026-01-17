type SectionProps = {
    children: React.ReactNode
    id?: string
    className?: string
}


export default function Section({ children, id, className = ""}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
        {children}
    </section>
  )
}
