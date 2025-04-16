interface SectionHeadingProps {
    title: string
    highlight: string
  }
  
  export function SectionHeading({ title, highlight }: SectionHeadingProps) {
    return (
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        {title} <span className="text-emerald-500">{highlight}</span>
      </h2>
    )
  }
  