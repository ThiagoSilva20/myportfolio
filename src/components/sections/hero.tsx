import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-black/50 z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 z-[-1]" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Olá, eu sou <span className="text-emerald-500">Thiago Silva</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-300">Desenvolvedor Front End</h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              Desenvolvedor em formação com uma sólida base em TI e uma paixão por inovação e solução de problemas.
              Especializado em React.js, Next.js, Node.js e Tailwind CSS.
            </p>
            <div className="flex gap-4">
              {/* <Button className="bg-emerald-500 hover:bg-emerald-600" asChild>
                <Link href="#projetos">Ver Projetos</Link>
              </Button> */}
              <Button variant="outline" className="hidden md:inline-flex border-emerald-500 text-emerald-500 hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors" asChild>
                <Link href="#contato">Contato</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/thiagosilva20"
                target="_blank"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/thiago-silva-3599221ba"
                target="_blank"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link href="mailto:thiago201714@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                <Mail size={24} />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500/50">
              <Image src="/images/eu.jpg" alt="Thiago Silva" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#sobre">
            <ChevronDown size={32} className="text-emerald-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}
