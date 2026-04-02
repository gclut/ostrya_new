"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "A primeira conversa é gratuita?",
    answer:
      "Sim. A primeira conversa dura aproximadamente 30 minutos e não tem custo. O objetivo é entender sua situação, identificar os pontos críticos e avaliar se há encaixe para uma atuação conjunta. Você sai com clareza, mesmo que não avancemos.",
  },
  {
    question: "Vocês atendem fora do Sul do Brasil?",
    answer:
      "Temos base no Sul do Brasil, mas atendemos clientes em todo o país de forma remota. Para empresas e propriedades que exigem visita técnica presencial, avaliamos caso a caso.",
  },
  {
    question: "Quanto custa a consultoria?",
    answer:
      "O valor é definido após o diagnóstico inicial, de acordo com a complexidade e o escopo do trabalho. Não trabalhamos com tabelas fixas. Trabalhamos por projeto ou por retainer mensal, dependendo do que faz mais sentido para a situação do cliente.",
  },
  {
    question: "Por onde começo?",
    answer:
      "Pelo formulário ou pelo WhatsApp. Você descreve brevemente sua situação, agendamos a conversa de 30 minutos e, a partir daí, definimos os próximos passos — sem compromisso.",
  },
  {
    question: "Qual o perfil de clientes atendidos?",
    answer:
      "Empresas com faturamento a partir de R$ 1M/ano e produtores rurais com operação relevante. Atendemos principalmente negócios que já têm histórico, estrutura operacional e estão enfrentando desafios financeiros específicos — endividamento, crescimento desestruturado ou falta de controle.",
  },
  {
    question: "Vocês atuam em casos graves, com dívidas grandes?",
    answer:
      "Sim. Temos experiência em processos de reestruturação com volumes significativos de endividamento. Casos complexos exigem mais tempo e método, mas é exatamente para isso que existimos.",
  },
  {
    question: "Em quanto tempo aparecem os resultados?",
    answer:
      "Depende da solução. Um diagnóstico financeiro entrega clareza em 2 a 4 semanas. Uma renegociação de dívidas pode levar de 1 a 6 meses. Um planejamento financeiro começa a gerar impacto a partir do segundo trimestre de implementação. Somos diretos sobre isso desde o início.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-background py-28 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6 opacity-80">
          FAQ
        </p>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-72 shrink-0">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance leading-[1.1]">
              Perguntas frequentes
            </h2>
          </div>

          <div className="flex-1 border-t border-divider">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b border-divider">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-sans text-base font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-primary/60 group-hover:text-primary transition-colors mt-0.5">
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === i ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
