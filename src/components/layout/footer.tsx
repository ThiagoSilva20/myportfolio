import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-emerald-500">Thiago</span>Silva
            </Link>
            <p className="text-zinc-400 mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>

          <div className="flex gap-6">
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
      </div>
    </footer>
  )
}
