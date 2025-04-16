import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  image: string
  github?: string
  demo?: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: "Portfolio Pessoal",
    description:
      "Site de portfólio pessoal desenvolvido com Next.js e Tailwind CSS para mostrar projetos e habilidades.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/thiagosilva20/portfolio",
    demo: "https://thiagosilva20.github.io/portfolio/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-commerce",
    description: "Plataforma de e-commerce com sistema de pagamentos, gestão de produtos e painel administrativo.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/thiagosilva20",
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "App de Finanças",
    description: "Aplicativo para controle financeiro pessoal com gráficos, relatórios e planejamento de orçamento.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/thiagosilva20",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-16 md:py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Meus" highlight="Projetos" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-emerald-500 hover:bg-emerald-600" asChild>
            <Link href="https://github.com/thiagosilva20" target="_blank">
              Ver Mais no GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <Link href={project.github} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
            )}
            {project.demo && (
              <Link href={project.demo} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>
        <p className="text-zinc-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
