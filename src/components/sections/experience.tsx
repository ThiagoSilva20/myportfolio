import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"

type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor Front End",
    company: "Next Devs Academy",
    period: "Fevereiro 2025 - Presente",
    description: [
      "Desenvolvimento de sites e aplicações web utilizando Next.js, React.js e Node.js para criar soluções otimizadas, escaláveis e de alto desempenho.",
      "Construção de interfaces modernas e responsivas com Tailwind CSS.",
      "Integração e gerenciamento de bancos de dados PostgreSQL com Prisma ORM, garantindo segurança, eficiência e facilidade na manipulação de dados.",
      "Aplicação de boas práticas de desenvolvimento, otimização de performance e acessibilidade.",
    ],
  },
  {
    title: "Atendente DIC",
    company: "Poupa Tempo RJ",
    period: "Março 2023 - Novembro 2024",
    description: [
      "Recepção e verificação de documentos de cidadãos para solicitação da Carteira de Identidade Nacional (CIN).",
      "Cadastro de dados biométricos e biográficos no sistema do Serviço de Identificação do Cidadão.",
      "Conferência da veracidade e validade dos documentos apresentados.",
      "Esclarecimento de dúvidas sobre a CIN, seus benefícios e funcionalidades.",
      "Manutenção e conservação dos equipamentos utilizados no processo.",
    ],
  },
  {
    title: "Service Desk (Estagiário de TI)",
    company: "Governo do Estado do Rio de Janeiro",
    period: "Julho 2022 - Janeiro 2023",
    description: [
      "Atendimento de solicitações dos usuários por telefone ou e-mail, registrando os chamados no sistema.",
      "Solução de problemas de forma presencial, utilizando ferramentas e técnicas adequadas.",
      "Escalação de chamados para o nível superior da equipe de suporte quando necessário.",
      "Acompanhamento do status e feedback dos chamados, mantendo os usuários informados.",
      "Auxílio na instalação, configuração e manutenção de equipamentos e softwares.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experiência" highlight="Profissional" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="text-emerald-500">{experience.company}</p>
          </div>
          <p className="text-zinc-400 mt-2 md:mt-0">{experience.period}</p>
        </div>
        <ul className="space-y-2 text-zinc-300">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-emerald-500 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>        
      </CardContent>
    </Card>
  )
}
