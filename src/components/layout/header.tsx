"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#formacao", label: "Formação" },
  // { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    setIsOpen(false);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-sm border-b border-zinc-800"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-emerald-500">Thiago</span>Silva
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-zinc-900 border-zinc-800" side="left">
              <SheetHeader>
          <SheetTitle className="text-white text-2xl font-bold">
            <span className="text-emerald-500">Thiago</span>Silva
          </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <SheetClose key={link.href} asChild>
                <Link
            href={link.href}
            className={cn(
              "text-lg py-2 px-4 rounded-md transition-all",
              isActive
                ? "bg-emerald-500 text-black font-medium shadow-md"
                : "text-white hover:bg-emerald-500 hover:text-black"
            )}
                >
            {link.label}
                </Link>
              </SheetClose>
            );
          })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Button
          variant="outline"
          className="hidden md:inline-flex border-emerald-500 text-emerald-500 hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
          asChild
        >
          <a
            href="http://lattes.cnpq.br/9562829378369759"
            target="_blank"
            rel="noopener noreferrer"
          >
            Currículo
          </a>
        </Button>
      </div>
    </header>
  );
}
