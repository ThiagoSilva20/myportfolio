import { SectionHeading } from "@/components/ui/section-heading"

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Sobre" highlight="Mim" />

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-zinc-300 mb-6">
              Desenvolvedor em formação com uma sólida base em Tecnologia da Informação e Desenvolvimento. Atualmente
              cursando Análise e Desenvolvimento de Sistemas pela Estácio, sou também formado em Desenvolvimento
              Front-End pela Tech4me e Técnico em Informática pelo Centro Interescolar Miécimo da Silva.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              Minha experiência inclui atuação como estagiário de TI no Governo do Estado do Rio de Janeiro, onde
              desenvolvi competências em suporte técnico, manutenção de infraestrutura, instalação de sistemas e
              atendimento a chamados. Essa experiência reforçou minha capacidade de solucionar problemas e otimizar
              processos tecnológicos.
            </p>
            <p className="text-lg text-zinc-300">
              Estou sempre em busca de aprimorar minhas habilidades e explorar novas tecnologias, como React.js e
              Node.js. Busco uma oportunidade como desenvolvedor front end onde possa aplicar meus conhecimentos,
              crescer profissionalmente e agregar valor por meio da ética, responsabilidade e comprometimento.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-0">
            <InfoCard title="Localização" description="Rio de Janeiro, RJ" />
            <InfoCard title="Contato" description="(21) 99339-2724" />
            <InfoCard title="Idiomas" description="Português (Nativo), Inglês (Básico)" />
            <InfoCard title="Interesses" description="Desenvolvimento Web, Novas Tecnologias" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}
