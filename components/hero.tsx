"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const lineRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    el.style.width = "0"
    const timer = setTimeout(() => {
      el.style.transition = "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)"
      el.style.width = "100%"
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.78 0.08 75) 60px, oklch(0.78 0.08 75) 61px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-10 opacity-80">
          Consultoria Financeira — Sul do Brasil
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-foreground text-balance max-w-5xl">
          Sua empresa está crescendo,{" "}
          <br className="hidden md:block" />
          <em className="not-italic text-primary">endividada</em> ou sem{" "}
          <br className="hidden md:block" />
          controle financeiro?
        </h1>

        {/* Animated underline */}
        <div className="mt-8 mb-10 h-px w-full max-w-xl bg-divider relative overflow-hidden">
          <span
            ref={lineRef}
            className="absolute top-0 left-0 h-full bg-primary"
            style={{ width: 0 }}
          />
        </div>

        <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Consultoria financeira especializada para empresas e produtores rurais — com experiência em reestruturação de crédito e recuperação financeira.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contato"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-sm font-medium px-8 py-4 tracking-wide uppercase transition-all duration-300 hover:opacity-85 active:scale-95"
          >
            Agendar conversa gratuita
          </a>
          <a
            href="#problema"
            className="inline-flex items-center justify-center border border-border text-foreground font-sans text-sm font-medium px-8 py-4 tracking-wide uppercase transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Ver como atuamos
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap gap-12">
          {[
            { value: "+200", label: "Empresas atendidas" },
            { value: "12+", label: "Anos de atuação" },
            { value: "R$800M+", label: "Em dívidas reestruturadas" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-light text-primary">{stat.value}</p>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <ArrowDown size={16} />
      </div>
    </section>
  )
}
