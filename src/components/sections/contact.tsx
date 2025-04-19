"use client";
import type React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Limpa o erro do campo ao digitar
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() ? "" : "Nome é obrigatório",
      email: formData.email.trim()
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? ""
          : "Email inválido"
        : "Email é obrigatório",
      subject: formData.subject.trim() ? "" : "Assunto é obrigatório",
      message: formData.message.trim() ? "" : "Mensagem é obrigatória",
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", subject: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading title="Entre em" highlight="Contato" />

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Vamos Conversar</h3>
            <p className="text-zinc-300 mb-8">
              Estou sempre aberto a novas oportunidades, colaborações e projetos
              interessantes. Se você tem uma ideia ou projeto em mente, não
              hesite em entrar em contato!
            </p>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="text-emerald-500 h-6 w-6" />}
                title="Email"
                value="thiago201714@gmail.com"
                href="mailto:thiago201714@gmail.com"
              />
              <ContactItem
                icon={<Phone className="text-emerald-500 h-6 w-6" />}
                title="Telefone"
                value="(21) 99339-2724"
                href="https://api.whatsapp.com/send/?phone=5521993392724"
              />
              <ContactItem
                icon={<Linkedin className="text-emerald-500 h-6 w-6" />}
                title="LinkedIn"
                value="linkedin.com/in/thiago-silva-3599221ba"
                href="https://www.linkedin.com/in/thiago-silva-3599221ba"
              />
              <ContactItem
                icon={<Github className="text-emerald-500 h-6 w-6" />}
                title="GitHub"
                value="github.com/thiagosilva20"
                href="https://github.com/thiagosilva20"
              />
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-800"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <input
                  onChange={handleChange}
                  value={formData.subject}
                  id="subject"
                  required
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Assunto da mensagem"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  onChange={handleChange}
                  value={formData.message}
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Sua mensagem aqui..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-emerald-500 hover:bg-emerald-600"
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 group"
    >
      <div className="bg-emerald-500/20 p-3 rounded-full group-hover:bg-emerald-500/30 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-zinc-400">{title}</p>
        <p className="text-lg group-hover:text-emerald-400 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
