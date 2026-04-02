"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const services = [
  {
    title: "Diagnóstico Financeiro Completo",
    description:
      "Análise detalhada da saúde financeira da sua empresa ou propriedade. Identificamos onde o dinheiro está sendo perdido, quais estruturas estão consumindo margem e qual é o real ponto de equilíbrio — antes de qualquer proposta de ação.",
  },
  {
    title: "Renegociação de Dívidas",
    description:
      "Mapeamos todas as obrigações financeiras, priorizamos por custo e urgência, e conduzimos negociações diretas com credores. O objetivo é reduzir encargos, estender prazos e criar condições de pagamento sustentáveis para o fluxo de caixa real.",
  },
  {
    title: "Reestruturação Financeira",
    description:
      "Reorganização da estrutura de capital, das fontes de financiamento e dos processos internos de controle. Transformamos um cenário de crise em base sólida para recuperação e crescimento sustentável.",
  },
  {
    title: "Painel de Resultados Financeiros",
    description:
      "Implementamos indicadores e relatórios que você realmente usa. Margem operacional, fluxo de caixa, ciclo financeiro e posição de endividamento — atualizados e interpretados para que você decida com base em dados, não em intuição.",
  },
  {
    title: "Planejamento Financeiro",
    description:
      "Construção de cenários futuros realistas: projeção de caixa, orçamento operacional, planejamento de investimentos e definição de metas financeiras mensuráveis. Um plano que o seu time consegue executar.",
  },
  {
    title: "Avaliação de Projetos de Investimento",
    description:
      "Antes de investir, analisamos viabilidade econômica, retorno esperado, prazos e riscos. Seja expansão de operação, aquisição de equipamentos ou novos projetos rurais — decidimos com critério, não com otimismo.",
  },
  {
    title: "Valuation — Avaliação da Empresa",
    description:
      "Estimativa do valor justo da sua empresa ou propriedade, baseada em fluxo de caixa, ativos e posição de mercado. Essencial para processos de venda, entrada de sócios, financiamentos estruturados ou planejamento sucessório.",
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i)

  return (
    <section id="solucoes" className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6 opacity-80">
          Soluções
        </p>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance max-w-xl">
            O que fazemos por você
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-md self-end">
            Cada solução é dimensionada para o tamanho e complexidade do seu negócio. Sem pacotes prontos.
          </p>
        </div>

        <div className="border-t border-divider">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="border-b border-divider"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group transition-colors duration-200 hover:text-primary"
                aria-expanded={activeIndex === i}
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-sm text-primary/40 group-hover:text-primary/70 transition-colors mt-0.5 shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                </div>
                <span className="shrink-0 text-primary/60 group-hover:text-primary transition-colors">
                  {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === i ? "max-h-64 opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-sans text-muted-foreground leading-relaxed text-base pl-12 pr-8 max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
