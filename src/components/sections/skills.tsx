import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"

type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    description: "Desenvolvimento de interfaces modernas, responsivas e acessíveis com foco na experiência do usuário.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Back-end",
    description:
      "Criação de APIs robustas, sistemas escaláveis e integração com bancos de dados para aplicações de alta performance.",
    skills: ["Node.js", "Prisma ORM", "PostgreSQL", "REST API"],
  },
  {
    title: "Ferramentas",
    description: "Utilização de ferramentas modernas para desenvolvimento, design, testes e implantação de aplicações.",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading title="Minhas" highlight="Habilidades" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 md:p-8 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
      <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {category.skills.map((skill, index) => (
          <Badge key={index} className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">
            {skill}
          </Badge>
        ))}
      </div>
      <p className="text-zinc-400">{category.description}</p>
    </div>
  )
}
