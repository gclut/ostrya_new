"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [form, setForm] = useState({ nome: "", telefone: "", desafio: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contato" className="bg-surface-1 py-28 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:flex-1">
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6 opacity-80">
              Contato
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance leading-[1.1] mb-8">
              O primeiro passo é uma conversa.
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10">
              30 minutos gratuitos. Sem compromisso. Você nos conta a situação, nós mostramos o que enxergamos e como podemos ajudar.
            </p>

            <div className="space-y-4">
              {[
                "Diagnóstico preliminar da situação",
                "Identificação do maior risco financeiro atual",
                "Clareza sobre os próximos passos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight size={14} className="text-primary shrink-0" />
                  <span className="font-sans text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:flex-1 max-w-lg">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <CheckCircle2 size={36} className="text-primary" />
                <h3 className="font-serif text-3xl font-light text-foreground">
                  Mensagem recebida.
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Entraremos em contato em até 24 horas para agendar sua conversa. Obrigado pela confiança.
                </p>
              </div>
            ) : (
              <>
                <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed">
                  Preencha o formulário abaixo e fale conosco.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Nome <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full bg-background border border-border text-foreground font-sans text-sm px-4 py-3.5 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Telefone / WhatsApp <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      placeholder="(51) 9 0000-0000"
                      className="w-full bg-background border border-border text-foreground font-sans text-sm px-4 py-3.5 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Qual é o seu principal desafio? <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.desafio}
                      onChange={(e) => setForm({ ...form, desafio: e.target.value })}
                      placeholder="Conte brevemente a sua situação financeira atual..."
                      className="w-full bg-background border border-border text-foreground font-sans text-sm px-4 py-3.5 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground font-sans text-sm font-medium py-4 tracking-wide uppercase transition-all duration-300 hover:opacity-85 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        Enviar mensagem
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
