import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"

type EducationItem = {
  degree: string
  institution: string
  period: string
  description?: string
}

const educationItems: EducationItem[] = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Estácio de Sá",
    period: "Janeiro 2023 - Julho 2025",
    description: "Graduação em andamento",
  },
  {
    degree: "Desenvolvedor Front-end",
    institution: "Tech4me",
    period: "2023 - 2024",
    description: "Curso de formação com carga horária de 168h",
  },
  {
    degree: "Técnico em Informática",
    institution: "Centro Interescolar Miécimo da Silva",
    period: "2019 - 2021",
    description: "Ensino médio técnico",
  },
]

const certifications = [
  "Programação de Sistemas de Informação",
  "Microsoft Office 365 - Pacote Completo",
  "Linguagem de Programação Python",
  "Formação Lógica de Programação",
  "Suporte Técnico na Prática",
  "Programação Para Internet",
  "Fundamentos do Scrum",
]

export function Education() {
  return (
    <section id="formacao" className="py-16 md:py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Formação" highlight="Acadêmica" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <EducationCard key={index} education={item} />
              ))}
            </div>
          </div>

          <div>
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Certificações</h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start text-zinc-300">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationCard({ education }: { education: EducationItem }) {
  return (
    <Card className="bg-zinc-800 border-zinc-700 hover:border-emerald-500/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{education.degree}</h3>
          <p className="text-zinc-400 mt-2 md:mt-0">{education.period}</p>
        </div>
        <p className="text-emerald-500 mb-2">{education.institution}</p>
        {education.description && <p className="text-zinc-300">{education.description}</p>}
      </CardContent>
    </Card>
  )
}
