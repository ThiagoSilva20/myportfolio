"use client";
import { SectionHeading } from "@/components/ui/section-heading";

// Constantes
const PERSONAL_INFO = [
  { 
    title: "Localização", 
    description: "Rio de Janeiro, RJ",
    icon: "📍"
  },
  { 
    title: "Contato", 
    description: process.env.NEXT_PUBLIC_PHONE_NUMBER || "(21) 99339-2724",
    icon: "📱"
  },
  { 
    title: "Idiomas", 
    description: "Português (Nativo), Inglês (Básico)",
    icon: "🌎"
  },
  { 
    title: "Interesses", 
    description: "Desenvolvimento Web, Novas Tecnologias",
    icon: "💻"
  }
];

// Tipos
interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

// Componente de texto
const AboutText = () => (
  <div className="md:w-1/2 space-y-6">
    <p className="text-lg text-zinc-300">
      Desenvolvedor em formação com uma sólida base em Tecnologia da Informação. Atualmente
      cursando Análise e Desenvolvimento de Sistemas pela Estácio, sou também formado em Desenvolvimento
      Front-End pela Tech4me e Técnico em Informática pelo Centro Interescolar Miécimo da Silva.
    </p>
    <p className="text-lg text-zinc-300">
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
);

// Componente InfoCard com animações e interatividade
function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <div 
      className="bg-zinc-800 p-6 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-zinc-700"
      onClick={() => {/* ação opcional */}}
    >
      {icon && (
        <span className="text-2xl mb-4 block" role="img" aria-label={title}>
          {icon}
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

// Componente principal About
export default function About() {
  return (
    <section 
      id="sobre" 
      className="py-16 md:py-20 bg-zinc-900"
      aria-label="Sobre mim"
      itemScope 
      itemType="http://schema.org/Person"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeading title="Sobre" highlight="Mim" />

        <div className="flex flex-col md:flex-row gap-10 items-center animate-fade-in">
          <AboutText />
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-0">
            {PERSONAL_INFO.map((info, index) => (
              <InfoCard
                key={index}
                title={info.title}
                description={info.description}
                icon={info.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
